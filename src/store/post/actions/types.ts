import { PiniaActionAdaptor, Post } from "../../../common/types"
import { PostStore } from "../state/types"

export enum ActionNames {
    AddOne = 'addOne',
    GetMany = 'getMany',
    GetManySuccess = 'getManySuccess',
    GetManyIsLoaded = 'getManyIsLoaded',
}

export type Actions = {
    [ActionNames.AddOne](post: Post): void
    [ActionNames.GetMany](): void
    [ActionNames.GetManySuccess](posts: Post[]): void
    [ActionNames.GetManyIsLoaded](): void
}

export type PostActions = PiniaActionAdaptor<Actions, PostStore>