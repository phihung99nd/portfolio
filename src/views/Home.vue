<script setup lang="ts">
import {useDisplay} from "vuetify";
import HomeHero from "@/components/Home/Hero.vue";
import HomeAbout from "@/components/Home/About.vue";

const {mdAndDown} = useDisplay()

</script>

<template>
<div class="w-screen home">
  <div class="d-flex flex-column">
    <HomeHero/>
    <HomeAbout/>
  </div>
</div>
</template>

<style scoped lang="scss">
.home {
  background: $main-white;
}
</style>