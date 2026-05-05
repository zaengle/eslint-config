<template>
  <p>{{ greeting }}</p>
</template>

<script setup>
import { ref } from 'vue'

defineOptions({ name: 'CleanComponent' })

const greeting = ref('hello')
</script>
