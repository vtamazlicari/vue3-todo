import { RouteLocationNormalized } from "vue-router";
import { usePostStore } from "../../../store/post";

export const IsPostGuard = (to: RouteLocationNormalized) => {
    const postStore = usePostStore();

    if (!postStore.posts.some(post => post.id === +to.params.id)) {
        return { name: '404' }
    }
}
