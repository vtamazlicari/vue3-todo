import { createApp } from 'vue'
import App from './app.vue'
import router from './app.route';
import { createPinia } from 'pinia'
import { VueQueryPlugin } from 'vue-query';
import "bootstrap/dist/css/bootstrap.min.css"


const app = createApp(App);

app
    .use(createPinia())
    .use(router)
    .use(VueQueryPlugin)
    .mount('#app');
import "bootstrap/dist/js/bootstrap.js"
