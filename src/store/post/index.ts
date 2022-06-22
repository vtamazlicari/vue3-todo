import { defineStore } from 'pinia'
import { actions } from './actions/actions'
import { getters } from './getters/getters'
import { state } from './state/state'

export const usePostStore = defineStore('post', {
    state,
    getters,
    actions,
})
