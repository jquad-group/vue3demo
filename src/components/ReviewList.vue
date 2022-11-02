<script lang="ts" setup>
import { defineProps } from "vue";
import Review from "../data/Review";

// 11. Forms and vmodel
const reviewProps = defineProps<{
  reviews: Array<Review>;
}>();
</script>

<template>
  <div>
    <h3>Reviews:</h3>
    <ul>
      <li v-for="(review, index) in reviewProps.reviews" :key="index">
        {{ review.name }} gave this {{ review.rating }} stars
        <br />
        "{{ review.review }}"
        <br />
      </li>
    </ul>
  </div>
</template>
