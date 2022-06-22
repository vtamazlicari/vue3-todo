import { RouteLocationNormalized } from "vue-router";
import { usePostStore } from "../../../store/post";

export const IsPostsGuard = async (to: RouteLocationNormalized) => {
    const postStore = usePostStore();

    try {
        await postStore.getMany();

        return true;
    } catch (error) {
        return { name: '404' }
    }
}
