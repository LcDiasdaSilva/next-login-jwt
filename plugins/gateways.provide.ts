import AuthHttpGateway from "~/gateways/api/AuthHttpGateway";

export default defineNuxtPlugin((nuxtApp) => {
  const runtimeConfig = useRuntimeConfig()

  const authHttpGateway = new AuthHttpGateway(runtimeConfig.public.apiBaseUrl)

  nuxtApp.vueApp
    .provide('authHttpGateway', authHttpGateway)
});