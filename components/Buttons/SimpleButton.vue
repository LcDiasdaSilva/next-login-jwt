<style scoped lang="scss">
@import "../../assets/styles/_colors.scss";
.simple-button {
  border: none;
  background: none;
  width: 100%;
  cursor: pointer;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  border: solid 2px transparent;
  transition: filter 0.3s ease;
  font-weight: 900;
  &:focus {
    border: solid 2px #000;
  }
 
  &--primary {
    background-color: $color-primary-dark;
    color: white;
    &:hover{
      background-color: $color-primary;
    }
  }

  &--small {
    padding: 0.2rem 1rem;
  }

  &--medium {
    padding: 0.5rem 1rem;
  }

  &--large {
    padding: 1rem 1rem;
  }

  &--round {
    border-radius: 50px;
  }
}
</style>
<template>
  <button
    :id="id"
    :style="`max-width:${maxWidth}`"
    class="simple-button"
    :class="classes"
  >
    {{ title }}
  </button>
</template>
<script setup lang="ts">
const props = defineProps<{
  id: string;
  title: string;
  primary?: boolean;
  round?: boolean;
  maxWidth?: string;
  size?: string;
}>();

const classes = computed(() => ({
  "simple-button--primary": props.primary,
  "simple-button--round": props.round,
  [`simple-button--${props.size || "medium"}`]: true,
}));
</script>
