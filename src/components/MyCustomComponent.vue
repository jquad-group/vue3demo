<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    colors: {
      type: Array,
      required: true,
    },
    counter: {
      type: Number,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
  },
  computed: {
    componentColor() {
      const color = this.colors[this.counter % this.colors.length] as string;
      return "color: " + color + ";";
    },
  },
});
</script>

<template>
  <h>My Custom Component</h>
  <p :style="componentColor">{{ title }}</p>
</template>
