import AuthHttpGateway from "~/gateways/api/AuthHttpGateway";
import UserHttpGateway from "~/gateways/api/UserHttpGateway";


export default defineNuxtPlugin((nuxtApp) => {
  const runtimeConfig = useRuntimeConfig()

  const authHttpGateway = new AuthHttpGateway(runtimeConfig.public.apiBaseUrl)
  const userHttpGateway = new UserHttpGateway(runtimeConfig.public.apiBaseUrl)


  nuxtApp.vueApp
    .provide('authHttpGateway', authHttpGateway)
    .provide('userHttpGateway', userHttpGateway)
});