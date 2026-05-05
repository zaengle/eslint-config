<template>
  <ul>
    <li v-for="item in items">{{ item }}</li>
  </ul>
</template>

<script setup>
import { ref } from 'vue'

const items = ref([1, 2, 3])
</script>
