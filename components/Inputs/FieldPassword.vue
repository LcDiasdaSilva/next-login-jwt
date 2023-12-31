<template>
  <fieldset :class="fieldClass">
    <label :id="id + '-label'" :for="id"> {{ label }}: </label>
    <input
      :id="id"
      :name="name"
      v-model="state.password"
      type="password"
      @input="updateValue"
      ref="fieldPassword"
      :placeholder="placeholder"
    />
    <div class="error">
      <small v-if="v$.password && v$.password.$error">
        {{ v$.password.$errors[0]?.$message }}
      </small>
    </div>
  </fieldset>
</template>
<script setup lang="ts">
import useVuelidate from "@vuelidate/core";
import { required, minLength, helpers } from "@vuelidate/validators";
import { reactive } from "vue";
import { useFocus } from "@vueuse/core";

const fieldPassword = ref();

const props = defineProps<{
  modelValue: string;
  id: string;
  name?: string;
  label?: string;
  placeholder?: string;
  required?: boolean;
  fieldClass?: string;
  initialFocus?: boolean;
}>();

onMounted(() => {
  if (props.initialFocus) {
    useFocus(fieldPassword, { initialValue: false });
  }
});

const emit = defineEmits(["update:modelValue"]);
const state = reactive({
  password: props.modelValue,
});

const rules = reactive({
  password: {
    minLength: helpers.withMessage("Mínimo 6 caracteres", minLength(6)),
    required: props.required
      ? helpers.withMessage("Senha é obrigatório", required)
      : null,
  },
});

const updateValue = (event: { target: any }) => {
  emit("update:modelValue", event.target.value);
};

const v$ = useVuelidate(rules, state);
</script>
