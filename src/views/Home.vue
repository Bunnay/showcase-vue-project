<template>
  <div>
    <Header />
    <ProductLists />
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import ProductLists from '@/components/Guest/HomePage/ProductLists.vue';
import Header from '@/components/Guest/HomePage/Header.vue';

</script>
