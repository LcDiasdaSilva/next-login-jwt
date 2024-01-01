import { useUserStore } from "../store/userStore";

export default defineNuxtRouteMiddleware(async (to, from) => {
  const userStore = useUserStore();
  const isPublic = to.meta.isPublic;
  const isAuthenticated = userStore.getStateUserLoggedStatus;
  const token = useCookie("token")?.value || null;

  if (!isPublic && !isAuthenticated && !token) return navigateTo("/login");

  if (!isPublic && !isAuthenticated && token) {
    useLoadUserLogged().then((user) => {
      userStore.setUserLogged(user);
    })
  }
});   