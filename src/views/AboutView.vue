<script lang="ts" setup>
import { reactive } from "vue";

// step 2. Creating the Vue App
const stateTitle = reactive({ title: "This title is from Vue Component data" });
// step 3 . Attribute binding
const stateTitleColor = reactive({ color: "color: red;" });
</script>

<template>
  <div class="about">
    <h1>{{ stateTitle.title }}</h1>

    <h1 v-bind:style="stateTitleColor.color">{{ stateTitle.title }}</h1>
    <!-- short way to bind -->
    <h1 :style="stateTitleColor.color">{{ stateTitle.title }}</h1>
  </div>
</template>
