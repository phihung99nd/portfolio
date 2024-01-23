<script setup lang="ts">
import Navbar from "@/layouts/Navbar.vue";
import AppFooter from "@/layouts/AppFooter.vue";
</script>

<template>
  <v-app>
    <Navbar style="z-index: 1;"/>
    <div style="height: 80px"/>
    <v-main>
      <RouterView/>
    </v-main>
    <AppFooter/>
  </v-app>
</template>

<style scoped lang="scss">

</style>
