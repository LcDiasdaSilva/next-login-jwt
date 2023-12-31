<template>
  <fieldset :class="fieldClass">
    <label :id="id + '-label'" :for="id">
      {{ label }}
    </label>
    <input
      :name="name"
      :id="id"
      ref="fieldEmail"
      v-model="state.email"
      type="email"
      @input="updateValue"
      :placeholder="placeholder"
    />
    <div class="error">
      <small v-if="v$.email && v$.email.$error">
        {{ v$.email.$errors[0]?.$message }}
      </small>
    </div>
  </fieldset>
</template>
<script setup lang="ts">
import useVuelidate from "@vuelidate/core";
import { required, email, helpers } from "@vuelidate/validators";
import { useFocus } from "@vueuse/core";

const fieldEmail = ref();

const props = defineProps<{
  id: string;
  name?: string;
  modelValue: string;
  label?: string;
  required?: boolean;
  placeholder?: string;
  fieldClass?: string;
  initialFocus?: boolean;
}>();

onMounted(() => {
  if (props.initialFocus) {
    useFocus(fieldEmail, { initialValue: true });
  }
});

const emit = defineEmits(["update:modelValue"]);
const state = reactive({
  email: props.modelValue,
});

const rules = reactive({
  email: {
    email: helpers.withMessage("Email inválido", email),
    required: props.required
      ? helpers.withMessage("E-mail é obrigatório", required)
      : null,
  },
});

const updateValue = (event: { target: any }) => {
  emit("update:modelValue", event.target.value);
};

const v$ = useVuelidate(rules, state);
</script>
