<script setup lang="ts">
import Navbar from "@/layouts/Navbar.vue";
import AppFooter from "@/layouts/AppFooter.vue";
import {onMounted} from "vue";

onMounted(() => {
  const elPointer  = document.querySelector("#custom-cursor");

  addEventListener("mousemove", (evt) => {
    elPointer.style.cssText = `
    left: ${evt.clientX}px;
    top:  ${evt.clientY}px;
  `;
  });
})
</script>

<template>
  <v-app class="app">
    <Navbar style="z-index: 100;"/>
    <div style="height: 80px"/>
    <v-main>
      <RouterView/>
    </v-main>
    <AppFooter/>
    <div id="custom-cursor"/>
  </v-app>
</template>

<style lang="scss">
.app {
  #custom-cursor {
    position: fixed;
    translate: -50% -50%;
    left: 0;
    top: 0;
    z-index: 1000;
    pointer-events: none;
    width: 20px;
    height: 20px;
    background-color: rgba($accent, 0.1);
    border: 1px solid $secondary-dark;
    border-radius: 50%;
    margin-bottom: 20rem;
    transition: width 0.3s ease, height 0.3s ease, background-color 0.3s ease;
  }

  &:has(.cursor-trigger:hover) {
    #custom-cursor {
      width: 50px;
      height: 50px;
      background-color: rgba($accent, 0.5);
      animation-name: pulse;
      animation-duration: 2.0s;
      animation-timing-function: ease-out;
      animation-direction: alternate;
      animation-iteration-count: infinite;
      animation-play-state: running;
    }
  }

  @keyframes pulse {
    0% {
      transform: scale(1);
    }

    50% {
      transform: scale(1.5);
    }

    100% {
      transform: scale(1);
    }
  }
}
</style>
