<template>
  <el-container>
    <div>
      <router-view />
    </div>
    <el-footer>
      <guest-footer />
    </el-footer>
  </el-container>
</template>

<script setup lang="ts">
import GuestFooter from '@/components/Guest/Footer.vue';
</script>
