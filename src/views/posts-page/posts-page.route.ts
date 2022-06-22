import PostsPage from './posts-page.vue';
import PostPageRoute from '../post-page/post-page.route';
import { IsPostsGuard } from './guards/is-posts.guard';

export default [
    {
        path: '/posts',
        component: PostsPage,
        name: 'posts',
        beforeEnter: [IsPostsGuard],
        children: [
            ...PostPageRoute,
        ]
    },
];