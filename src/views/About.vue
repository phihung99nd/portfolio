<script setup lang="ts">

import AboutMain from "../components/About/Main.vue";
import AboutTimeLine from "../components/About/TimeLine.vue";
import ContactFooter from "../components/ContactFooter.vue";
</script>

<template>
  <div class="w-screen about">
    <div class="d-flex flex-column">
      <AboutMain/>
      <AboutTimeLine/>
      <ContactFooter/>
    </div>
  </div>
</template>

<style scoped lang="scss">
.about {
  background: $main-white;
}
</style>