<script setup lang="ts">
import { useHead } from '@vueuse/head'

// https://github.com/vueuse/head
// you can use this to manipulate the document head in any components,
// they will be rendered correctly in the html results with vite-ssg
useHead({
  title: 'Vital',
  meta: [
    { name: 'description', content: 'Vital Vite Starter' },
  ],
})

import { useClient } from 'villus';
    useClient({
      url: import.meta.env.VITE_GRAPHQL_ENDPOINT,
    });
</script>

<template>
  <router-view />
</template>
