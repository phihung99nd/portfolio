<script setup lang="ts">
import {useDisplay} from "vuetify";
import {ref} from "vue";
import NavbarButton from "@/layouts/NavbarButton.vue";

const {mdAndDown} = useDisplay()

// data
const navList = ref([
  {title: 'Home', to: 'home'},
  {title: 'About', to: 'about'},
  {title: 'Projects', to: 'projects'},
  {title: 'Contact', to: 'contact'},
])
const drawer = ref(false)
</script>

<template>
  <div class="navbar w-screen">
    <div class="navbar-wrapper" :class="{mdAndDown}">
      <RouterLink :to="{ name: 'home' }" class="fs-24 fw-4 a-reset app-title">PHI HUNG TRAN</RouterLink>
      <div class="d-none d-md-flex align-center ga-2">
        <NavbarButton v-for="(item, index) in navList" :key="index" :to="{name: item.to}">
          {{ item.title }}
        </NavbarButton>
      </div>
      <div class="d-md-none">
        <v-btn :icon="drawer ? 'mdi-close' : 'mdi-menu'" variant="plain" @click.stop="drawer = !drawer"></v-btn>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.navbar {
  height: 70px;
  background: $main-white;
  position: fixed;
  top: 0;
  left: 0;
  color: $main-dark;

  .navbar-wrapper {
    width: 100%;
    height: 100%;
    max-width: 1200px;
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: all 0.3s ease;

    .app-title {
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    }

    &.mdAndDown {
      padding: 0 60px;
    }
  }
}
</style>