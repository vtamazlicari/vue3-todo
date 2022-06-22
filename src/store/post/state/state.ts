import { defineStore } from 'pinia'
import { State } from "./types"

export const state = (): State => {
    return {
        entities: [],
        isLoading: false,
    };
}
