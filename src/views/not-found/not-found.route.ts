import NotFound from './not-found.vue';

export default [
    {
        path: '/:pathMatch(.*)*',
        name: '404',
        component: NotFound
    },
];