import UserHttpGateway from '~/gateways/api/UserHttpGateway';
import { useUserStore } from './../store/userStore';

export const useLoadUserLogged = async () => {
  const apiBase = useRuntimeConfig().public.apiBaseUrl
  const userHttpGateway = new UserHttpGateway(apiBase) as unknown as IUserHttp;
  const userStore = useUserStore()
  const userLogged = await userHttpGateway.getUserMe();
  userStore.setUserLogged(userLogged);
  return userLogged
}

