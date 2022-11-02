<script lang="ts" setup>
import { defineEmits, reactive } from "vue";
import Review from "../data/Review";
// 11. Forms and vmodel
const reviewState = reactive({
  name: "",
  review: "",
  rating: 0,
});

const emit = defineEmits<{ (e: "review-submitted", review: Review): void }>();

function onSubmit() {
  if (!reviewState.name || !reviewState.review || reviewState.rating === 0) {
    alert("Review is incomplete!");
  }
  emit("review-submitted", {
    name: reviewState.name,
    review: reviewState.review,
    rating: reviewState.rating,
  } as Review);
  reviewState.name = "";
  reviewState.review = "";
  reviewState.rating = 0;
}
</script>

<template>
  <form @submit.prevent="onSubmit">
    <h3>Leave a review</h3>
    <label for="name">Name:</label>
    <input id="name" v-model="reviewState.name" />
    <br /><br />
    <label for="review">Review:</label>
    <textarea id="review" v-model="reviewState.review"></textarea>
    <br /><br />
    <label for="rating">Rating:</label>
    <select id="rating" v-model.number="reviewState.rating">
      <option>5</option>
      <option>4</option>
      <option>3</option>
      <option>1</option>
    </select>
    <br /><br />
    <input class="button" type="submit" value="Submit" />
  </form>
</template>
