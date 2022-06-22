import { Post } from "../../../common/types";

export interface UseAddPost {
    addPost: (post: Post) => void;
}