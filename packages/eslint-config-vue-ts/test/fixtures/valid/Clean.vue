<template>
  <p>{{ greeting }}</p>
</template>

<script setup lang="ts">
import { ref } from 'vue'

defineOptions({ name: 'CleanComponent' })

const greeting = ref<string>('hello')
</script>
