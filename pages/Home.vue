<template>
  <main class="flex flex-col items-center justify-center h-screen">
<notifications class="notification" />
    <h1>Area Logada</h1>
    <pre>
      {{ userStore.getStateUserLogged }}
    </pre>
    <ButtonsSimpleButton
      id="exit-button"
      size="small"
      :primary="true"
      title="sair"
      maxWidth="100px"
      @click="logout"
    />
  </main>
</template>
<script setup lang="ts">
import { useUserStore } from "~/store/userStore";
const userStore = useUserStore();
function logout() {
  userStore.userLogout();
}
</script>
