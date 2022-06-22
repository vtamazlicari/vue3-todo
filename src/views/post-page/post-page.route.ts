import { IsPostGuard } from './guards/is-post.guard';
import PostPage from './post-page.vue';

export default [
    {
        path: ':id',
        name: 'post-item',
        component: PostPage,
        beforeEnter: [IsPostGuard],
    },
];