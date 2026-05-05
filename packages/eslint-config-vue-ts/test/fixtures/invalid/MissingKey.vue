<template>
  <ul>
    <li v-for="item in items">{{ item }}</li>
  </ul>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const items = ref<number[]>([1, 2, 3])
</script>
