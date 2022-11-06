<script lang="ts" setup>
import { ref } from "vue";

const randomNumber = ref(0);

const componentProps = defineProps<{
  min: number;
  max: number;
}>();

const getRandomNumber = () => {
  randomNumber.value =
    Math.floor(Math.random() * (componentProps.max - componentProps.min + 1)) +
    componentProps.min;
};
</script>
<template>
  <div>
    <span>{{ randomNumber }}</span>
    <button @click="getRandomNumber">Generate random number</button>
  </div>
</template>
