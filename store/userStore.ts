export const useUserStore = defineStore('users', {
  state: () => ({
    userLogged: {} as IUser,
    token: ''
  }),
  getters: {
    getStateUserLogged: (state) => state.userLogged,
    getStateUserLoggedStatus: (state) => !!state.userLogged?.name,
  },
  actions: {
    setUserLogged(user: IUser) {
      this.userLogged = user
    },
    setUserToken(token: string) {
      this.token = token
    },
    userLogout() {
      let token = useCookie("token");
      token.value = null
      this.userLogged = {} as IUser
      return navigateTo("/login");
    }
  },
})