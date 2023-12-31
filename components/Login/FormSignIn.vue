<style lang="scss" scoped>
@import "~/assets/styles/mq.scss";

.form-sign-in {
  width: 100%;
  max-width: 400px;
}
</style>

<template>
  <form @submit.prevent="submit" class="form-sign-in">
    <InputsFieldEmail
      name="input-email-login"
      id="input-email-login"
      label="E-mail"
      v-model="payload.email"
      :required="true"
      :initialFocus="true"
      fieldClass="field-default-class"
      placeholder="Digite seu e-mail"
    />
    <InputsFieldPassword
      name="input-password-login"
      id="input-password-login"
      label="Senha"
      v-model="payload.password"
      :required="true"
      fieldClass="field-default-class"
      placeholder="Digite sua senha"
    />

    <ButtonsSimpleButton
      id="btn-sing-in"
      class="mt-8"
      title="Entrar"
      :primary="true"
      :round="false"
      maxWidth="100%"
    />
  </form>
</template>

<script setup lang="ts">
import useVuelidate from "@vuelidate/core";
const emit = defineEmits(["submit"]);
const v$ = useVuelidate();
const payload = reactive({
  email: "",
  password: "",
});

async function submit() {
  const isValid = await v$.value.$validate();
  if (!isValid) return;
  emit("submit", payload);
}
</script>
