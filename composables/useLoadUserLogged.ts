import UserHttpGateway from '~/gateways/api/UserHttpGateway';

export const useLoadUserLogged = async () => {
  const apiBase = useRuntimeConfig().public.apiBaseUrl
  const userHttpGateway = new UserHttpGateway(apiBase) as unknown as IUserHttp;
  return userHttpGateway.getUserMe()
}

