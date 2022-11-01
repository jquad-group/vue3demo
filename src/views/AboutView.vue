<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      title: "This title is from Vue Component data",
      color: "color: red;",
    };
  },
});
</script>

<template>
  <div class="about">
    <h1 v-bind:style="color">{{ title }}</h1>
    <!-- short way to bind -->
    <h1 :style="color">{{ title }}</h1>
  </div>
</template>
