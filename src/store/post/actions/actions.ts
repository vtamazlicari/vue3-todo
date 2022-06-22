import { Post } from "../../../common/types";
import { ActionNames, PostActions } from "./types";
import { getPosts } from '../../../api';

const getMany: PostActions[ActionNames.GetMany] = async function (): Promise<void> {
    this.isLoading = true;

    if (this.entities.length) {
        this.getManyIsLoaded();

        return;
    }

    const response = await getPosts();
    this.getManySuccess(response.data)
}

const getManySuccess: PostActions[ActionNames.GetManySuccess] = async function (posts: Post[]): Promise<void> {
    this.entities = posts;
    this.isLoading = false
}

const getManyIsLoaded: PostActions[ActionNames.GetManyIsLoaded] = async function (): Promise<void> {
    this.isLoading = false;
}

const addOne: PostActions[ActionNames.AddOne] = function (post: Post): void {
    this.entities.push(post);
}

export const actions: PostActions = {
    addOne,
    getMany,
    getManySuccess,
    getManyIsLoaded,
}
