import { reactive } from "vue";
import { Post } from "../../../common/types";

export function useEmitPost(emit: (event: "added", ...args: any[]) => void) {

    const form = reactive({ title: '' });

    const submit = function () {
        const post: Post = {
            id: new Date().getTime(),
            title: form.title,
        };

        form.title = '';

        emit('added', post);
    };

    return {
        form,
        submit,
    }
}