<script lang="ts" setup>
import { reactive } from "vue";

const logoutHeaderState = reactive({ visible: false });

const componentProps = defineProps<{
  loggedIn: boolean;
}>();

function onClick() {
  logoutHeaderState.visible = true;
}
</script>

<template>
  <div>
    <h1 v-show="logoutHeaderState.visible">Buy buy!</h1>
    <button v-show="loggedIn" @click="onClick">Logout</button>
  </div>
</template>
