<style lang="scss" scoped>
@import "~/assets/styles/mq.scss";

.login-page {
  width: 100%;
  min-height: 100lvh;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  padding-top: 4rem;
  &__logo-wrapper {
    img {
      width: 100%;
      height: auto;
    }
  }
  h1 {
    font-family: "Sora";
    font-size: 2rem;
    font-weight: 300;
    color: #444;
    padding-top: 1rem;
    text-align: center;
  }
}
</style>

<template>
  <main class="login-page">
    <section class="login-page__logo-wrapper">
      <img
        width="169px"
        height="169px"
        alt="Logotipo do sistema"
        src="/logo.webp"
        title="LogoTipo do sistema"
      />
    </section>
    <h1>LC DIAS</h1>
    <LoginFormSignIn @submit="submit" class="mt-2" />
  </main>
</template>

<script setup lang="ts">
import { useLayoutStore } from "~/store/layoutStore";
import { useLoadUserLogged } from "../composables/useLoadUserLogged";
import { useUserStore } from "../store/userStore";

const layoutStore = useLayoutStore();
const authHttpGateway = inject("authHttpGateway") as IAuthHttp;
const userStore = useUserStore();
const token = useCookie("token");
token.value = null;
async function submit(payload: ISignIn) {
  try {
    layoutStore.changeStateLoading(true);
    const responseToken = await signIn(payload);
    if (responseToken) token.value = responseToken;
    await nextTick();
    useLoadUserLogged().then((user) => {
      userStore.setUserLogged(user);
      layoutStore.changeStateLoading(false);
      navigateTo("/");
    });
  } catch (error) {
    layoutStore.changeStateLoading(false);
  }
}

async function signIn(payload: ISignIn) {
  const { access_token } = await authHttpGateway.logIn(payload);
  return access_token;
}

const img = useImage();
useSeoMeta({
  title: "LC | LOGIN",
  description: "Login",
});
</script>
