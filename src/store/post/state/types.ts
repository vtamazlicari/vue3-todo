import { Store } from "pinia";
import { Post } from "../../../common/types";
import { Actions } from "../actions/types";
import { PostGetters } from "../getters/types";

export interface State {
    entities: Post[];
    isLoading: boolean;
}

export type PostStore<G = PostGetters> = Store<'post', State, G, Actions>