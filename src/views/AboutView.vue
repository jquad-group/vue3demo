<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      title: "This title is from Vue Component data",
    };
  },
});
</script>

<template>
  <div class="about">
    <h1>{{ title }}</h1>
  </div>
</template>
