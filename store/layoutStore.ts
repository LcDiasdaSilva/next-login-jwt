import { defineStore } from 'pinia'

export const useLayoutStore = defineStore('layout', {
  state: () => ({
    loading: false,
  }),
  getters: {
    getStateLoading(state) {
      return state.loading;
    },
  },
  actions: {
    changeStateLoading(value:boolean) {
      this.loading = value;
    },
  }
})
