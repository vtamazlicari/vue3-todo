import { createRouter, createWebHistory } from 'vue-router';
import NotFoundRoute from './views/not-found/not-found.route';
import PostsPageRoute from './views/posts-page/posts-page.route';
import { HomeRoute } from './views/home';

const routes = [
    ...PostsPageRoute,
    ...NotFoundRoute,
    ...HomeRoute,
];

const router = createRouter({
    routes,
    history: createWebHistory(import.meta.env.BASE_URL)
});

export default router;
