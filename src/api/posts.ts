import axios from './api';
import { Api } from './endpoints';

export const getPosts = () => axios.get(Api.posts());
