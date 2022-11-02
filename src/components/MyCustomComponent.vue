<script lang="ts" setup>
import { defineProps, defineEmits, computed } from "vue";

// 9. Components and Props
const componentProps = defineProps<{
  colors: Array<string>;
  counter: number;
  title: string;
}>();
const componentColor = computed(() => {
  const index = componentProps.counter % componentProps.colors.length;
  const color = componentProps.colors[index];
  return "color: " + color + ";";
});
// 10. Communicating Events
const componentColorText = computed(() => {
  const index = componentProps.counter % componentProps.colors.length;
  return componentProps.colors[index];
});

const emit = defineEmits<{ (e: "select-color", color: string): void }>();

function selectColor() {
  const index = componentProps.counter % componentProps.colors.length;
  const color = componentProps.colors[index];
  emit("select-color", color);
}
</script>

<template>
  <p>My Custom Component</p>
  <p :style="componentColor">{{ componentProps.title }}</p>
  <button @click="selectColor">
    Select Component Color: {{ componentColorText }}
  </button>
</template>
