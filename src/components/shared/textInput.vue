<template>
  <input
    :value="modelValue"
    type="text"
    class="h-full w-full rounded-full px-4 text-base font-normal text-slate-700 focus:outline-none"
    @input="handleInput"
  />
</template>

<script lang="ts" setup>
defineProps({
  modelValue: {
    type: String,
    required: true,
  },
});

const emit = defineEmits(["update:modelValue"]);

const handleInput = ($event: Event) => {
  const target = $event.target as HTMLInputElement;
  emit("update:modelValue", target.value);
};
</script>
