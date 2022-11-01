<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    reviews: {
      type: Object,
      required: true,
    },
  },
});
</script>

<template>
  <div>
    <h3>Reviews:</h3>
    <ul>
      <li v-for="(review, index) in reviews" :key="index">
        {{ review.name }} gave this {{ review.rating }} stars
        <br />
        "{{ review.review }}"
        <br />
      </li>
    </ul>
  </div>
</template>
