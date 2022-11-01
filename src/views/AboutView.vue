<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      title: "This title is from Vue Component data",
      color: "color: red;",
      inStock: true, // change this attribute to see effect
      inventory: 11, // change this attribute to see effect
      primeNumbers: ["two", "three", "five", "seven", "eleven"],
      cars: [
        { id: 1, color: "red", speed: 100 },
        { id: 2, color: "blue", speed: 120 },
      ],
      count: 0,
      weather: "sunny",
      backgroundColor: "red",
    };
  },
  methods: {
    changeWeather() {
      if (this.weather === "sunny") {
        this.weather = "cloudy";
      } else {
        this.weather = "sunny";
      }
    },
    changeBackgroundColor() {
      if (this.backgroundColor === "red") {
        this.backgroundColor = "blue";
      } else {
        this.backgroundColor = "red";
      }
    },
  },
});
</script>

<template>
  <div class="about">
    <h1 v-bind:style="color">{{ title }}</h1>
    <!-- short way to bind -->
    <h1 :style="color">{{ title }}</h1>

    <p v-if="inStock">v-if Cool TShirts In Stock</p>
    <p v-else>v-else Cool TShirts Out of Stock</p>
    <p v-show="inStock">v-show Cool TShirts Out of Stock</p>

    <p v-if="inventory > 10">v-if More than 10 Cool TShirts In of Stock</p>
    <p v-else-if="inventory <= 10 && inventory > 0">
      v-else-if Less than 10 Cool TShirts In of Stock
    </p>
    <p v-else>v-else Invetory 0, Out of Stock</p>

    <ul>
      <li v-for="num in primeNumbers" :key="num">{{ num }}</li>
    </ul>

    <ul>
      <li v-for="car in cars" :key="car.id">
        {{ car.color }} car with speed {{ car.speed }}
      </li>
    </ul>

    <p>Events</p>
    <p>Count: {{ count }}</p>
    <button v-on:click="count += 1">Add Plus One</button>
    <p>Weather: {{ weather }}</p>
    <button v-on:click="changeWeather">Change Weather</button>
    <button @click="changeWeather">Change Weather (Short)</button>
    <p>Hoover over Button</p>
    <button @mouseover="changeWeather">Change Weather (onHoover)</button>

    <h1 :style="{ 'background-color': backgroundColor }">{{ title }}</h1>
    <button @click="changeBackgroundColor">Change Background Color</button>
  </div>
</template>
