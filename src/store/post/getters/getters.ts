import { Post } from "../../../common/types";
import { GetterNames, PostGetters } from "./types";

const posts: PostGetters[GetterNames.Posts] = function (): Post[] {
    return this.entities;
}

const postsFiltered: PostGetters[GetterNames.Posts] = function (): Post[] {
    return this.posts;
}

const byId: PostGetters[GetterNames.ById] = function (): (id: number) => Post | undefined {
    return (id: number) => this.posts.find(post => post.id === id);
}

export const getters: PostGetters = {
    posts,
    postsFiltered,
    byId,
};
