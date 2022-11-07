<template>
  <p v-if="error" data-testid="message-error">{{ error }}</p>
  <p v-else data-testid="message">{{ message.text }}</p>
</template>

<script lang="ts" setup>
import { onMounted, ref } from "vue";
import { getMessage, Message } from "@/services/MessageService";

const message = ref<Message>({text: "loading..."});
const error = ref<string>();

onMounted(async () => {
  try {
    message.value = (await getMessage()).message;
  } catch (error) {
    error = "Oops! Something went wrong.";
  }
});
</script>
