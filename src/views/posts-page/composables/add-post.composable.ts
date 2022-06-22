import { Ref } from "vue";
import { useRouter } from "vue-router";
import { Post } from "../../../common/types";
import { usePostStore } from "../../../store/post";
import { UseAddPost } from "../types";

export function useAddPost(isShowDialog: Ref<boolean>): UseAddPost {
    const postStore = usePostStore();
    const router = useRouter()

    const addPost: (post: Post) => void = (post: Post) => {
        postStore.addOne(post);
        isShowDialog.value = false;
        router.push({ name: 'post-item', params: { id: post.id } })
    }

    return {
        addPost
    }
}