<script setup lang="ts">
import {useDisplay} from "vuetify";
import {onMounted, ref, watch} from "vue";
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
const animate = ref(false)
const scroll = ref(0)

watch(drawer, (val) => {
  if (val) {
    setTimeout(() => {
      animate.value = true
    }, 300)
  } else {
    setTimeout(() => {
      animate.value = false
    }, 300)
  }
})

onMounted(() => {
  window.addEventListener("scroll", () => {
    scroll.value = document.documentElement.scrollTop;
  });
})
</script>

<template>
  <div class="navbar w-screen" :class="{'not-top': scroll > 0}">
    <div class="navbar-wrapper" :class="{mdAndDown}">
      <RouterLink :to="{ name: 'home' }" class="fs-24 fw-4 a-reset app-title cursor-trigger">
        <VueWriter :array="['PHI HUNG TRAN']" :iterations="1"
                   :type-speed="25"/>
      </RouterLink>
      <div class="d-none d-md-flex align-center ga-2">
        <NavbarButton class="cursor-trigger" v-for="(item, index) in navList" :key="index" :to="{name: item.to}">
          {{ item.title }}
        </NavbarButton>
      </div>
      <div class="d-md-none">
        <v-btn :icon="drawer ? 'mdi-close' : 'mdi-menu'" variant="plain" @click.stop="drawer = !drawer"></v-btn>
      </div>
    </div>
    <v-overlay
        v-model="drawer"
        class="d-flex justify-center align-center overlay"
        scrim="#010101"
    >
      <RouterLink :to="{name: item.to}" class="d-flex flex-column ga-1 a-reset overlay-nav-btn"
                  v-for="(item, index) in navList" :key="index"
                  @click.stop="drawer = false"
      >
        <div class="fs-24 fw-6 title cursor-trigger" :class="{animate}">{{ item.title }}</div>
        <div class="underline"/>
      </RouterLink>
      <div class="close cursor-trigger">
        <v-btn icon="mdi-close" variant="plain" color="white" @click.stop="drawer = false"></v-btn>
      </div>
    </v-overlay>
  </div>
</template>

<style scoped lang="scss">
.navbar {
  height: 70px;
  border-bottom: 1px solid transparent;
  backdrop-filter: blur(10px);
  position: fixed;
  top: 0;
  left: 0;
  color: $main-dark;
  transition-property: background, border-bottom;
  transition-duration: .3s;
  transition-timing-function: ease;

  &.not-top {
    background: $main-white;
  }

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
      padding: 0 10px;
    }
  }
}

.overlay {

  .overlay-nav-btn {
    margin-bottom: 20px;
    overflow: clip;

    .title {
      color: $secondary-white;
      text-transform: uppercase;
      transform: translateY(50px);
      transition: all 0.3s ease;


      &.animate {
        transform: translateY(0px);
      }
    }

    .underline {
      height: 2px;
      width: 0px;
      background: $secondary-white;
      transition: width 0.3s ease;
    }

    &:hover .underline {
      width: 100%;
    }
  }

  .overlay-nav-btn:nth-child(1) {
    .title {
      transition-delay: 0s;
    }
  }

  .overlay-nav-btn:nth-child(2) {
    .title {
      transition-delay: 0.2s;
    }
  }

  .overlay-nav-btn:nth-child(3) {
    .title {
      transition-delay: 0.4s;
    }
  }

  .overlay-nav-btn:nth-child(4) {
    .title {
      transition-delay: 0.6s;
    }
  }
}

:deep() {
  .v-overlay__scrim {
    opacity: 0.9;
  }
}
</style>