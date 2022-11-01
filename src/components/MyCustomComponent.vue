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
  methods: {
    selectColor() {
      const color = this.colors[this.counter % this.colors.length] as string;
      this.$emit("select-color", color);
    },
  },
  computed: {
    componentColor() {
      const color = this.colors[this.counter % this.colors.length] as string;
      return "color: " + color + ";";
    },
    componentColorText() {
      return this.colors[this.counter % this.colors.length] as string;
    },
  },
});
</script>

<template>
  <p>My Custom Component</p>
  <p :style="componentColor">{{ title }}</p>
  <button @click="selectColor">
    Select Component Color: {{ componentColorText }}
  </button>
</template>
