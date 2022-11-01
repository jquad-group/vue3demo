<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      name: "",
      review: "",
      rating: 0,
    };
  },
  props: {},
  methods: {
    onSubmit() {
      if (!this.name || !this.review || this.rating === 0) {
        alert("Review is incomplete!");
      }

      this.$emit("review-submitted", {
        name: this.name,
        review: this.review,
        rating: this.rating,
      });

      this.name = "";
      this.review = "";
      this.rating = 0;
    },
  },
  computed: {},
});
</script>

<template>
  <form @submit.prevent="onSubmit">
    <h3>Leave a review</h3>
    <label for="name">Name:</label>
    <input id="name" v-model="name" />
    <br /><br />
    <label for="review">Review:</label>
    <textarea id="review" v-model="review"></textarea>
    <br /><br />
    <label for="rating">Rating:</label>
    <select id="rating" v-model.number="rating">
      <option>5</option>
      <option>4</option>
      <option>3</option>
      <option>1</option>
    </select>
    <br /><br />
    <input class="button" type="submit" value="Submit" />
  </form>
</template>
