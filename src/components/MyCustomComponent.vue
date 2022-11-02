<script lang="ts" setup>
import { defineProps, computed } from "vue";

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
</script>

<template>
  <h>My Custom Component</h>
  <p :style="componentColor">{{ componentProps.title }}</p>
</template>
