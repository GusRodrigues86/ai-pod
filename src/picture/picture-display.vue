<script setup lang="ts">
import { ref } from 'vue';
import 'vuetify/styles';
const appName = ref<string>('AI-Apod');
const welcome = ref<string>('Welcome!');
</script>

<template>
  <v-card variant="tonal" width="400" class="mx-auto">
    <v-card-title>{{ appName }}</v-card-title>
    <v-card-subtitle>{{ welcome }}</v-card-subtitle>
    <v-card-text>Welcome to the {{ appName }}, The next gen APOD information</v-card-text>
  </v-card>
</template>
