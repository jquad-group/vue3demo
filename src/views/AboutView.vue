<script lang="ts" setup>
import { reactive } from "vue";

// step 2. Creating the Vue App
const stateTitle = reactive({ title: "This title is from Vue Component data" });
</script>

<template>
  <div class="about">
    <h1>{{ stateTitle.title }}</h1>
  </div>
</template>
