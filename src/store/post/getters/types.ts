import { PiniaGetterAdaptor, Post } from "../../../common/types"
import { PostStore } from "../state/types"

export enum GetterNames {
    Posts = 'posts',
    PostsFiltered = 'postsFiltered',
    ById = 'byId',
}

export type Getters = {
    [GetterNames.Posts](): Post[],
    [GetterNames.PostsFiltered](): Post[],
    [GetterNames.ById](): (id: number) => Post | undefined,
}

export type PostGetters = PiniaGetterAdaptor<Getters, PostStore<Getters>>