<script lang="ts" setup>
import { reactive } from "vue";

// step 2. Creating the Vue App
const stateTitle = reactive({ title: "This title is from Vue Component data" });
// step 3. Attribute binding
const stateTitleColor = reactive({ color: "color: red;" });
// step 4. Conditional Rendering
const stateStock = reactive({ inStock: true, inventory: 11 }); // change inStock and inventory to see effect
// step 5. List Rendering
const primeNumbers = reactive(["two", "three", "five", "seven", "eleven"]);
const cars = reactive([
  { id: 1, color: "red", speed: 100 },
  { id: 2, color: "blue", speed: 120 },
]);
</script>

<template>
  <div class="about">
    <h1>{{ stateTitle.title }}</h1>

    <h1 v-bind:style="stateTitleColor.color">{{ stateTitle.title }}</h1>
    <!-- short way to bind -->
    <h1 :style="stateTitleColor.color">{{ stateTitle.title }}</h1>

    <p v-if="stateStock.inStock">v-if Cool TShirts In Stock</p>
    <p v-else>v-else Cool TShirts Out of Stock</p>
    <p v-show="stateStock.inStock">v-show Cool TShirts Out of Stock</p>

    <p v-if="stateStock.inventory > 10">
      v-if More than 10 Cool TShirts In of Stock
    </p>
    <p v-else-if="stateStock.inventory <= 10 && stateStock.inventory > 0">
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
  </div>
</template>
