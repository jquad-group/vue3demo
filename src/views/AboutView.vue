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
// step 6. Event Handling
const stateWeather = reactive({ count: 0, weather: "sunny" });

function changeWeather() {
  if (stateWeather.weather === "sunny") {
    stateWeather.weather = "cloudy";
  } else {
    stateWeather.weather = "sunny";
  }
}

// step 7. Class and Style Binding
const stateStyle = reactive({
  backgroundColor: "red",
  title: "Title with changing COLOR :)",
});
function changeBackgroundColor() {
  if (stateStyle.backgroundColor === "red") {
    stateStyle.backgroundColor = "green";
  } else {
    stateStyle.backgroundColor = "red";
  }
}
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

    <p>Events</p>
    <p>Count: {{ stateWeather.count }}</p>
    <button v-on:click="stateWeather.count += 1">Add Plus One</button>
    <p>Weather: {{ stateWeather.weather }}</p>
    <button v-on:click="changeWeather">Change Weather</button>
    <button @click="changeWeather">Change Weather (Short)</button>
    <p>Hoover over Button</p>
    <button @mouseover="changeWeather">Change Weather (onHoover)</button>

    <h1 :style="{ 'background-color': stateStyle.backgroundColor }">
      {{ stateStyle.title }}
    </h1>
    <button @click="changeBackgroundColor">Change Background Color</button>
  </div>
</template>
