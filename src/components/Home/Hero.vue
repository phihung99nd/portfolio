<script lang="ts">
export default {
  name: 'HomeHero',
}
</script>

<script setup lang="ts">
import heroImg from '@/assets/images/unsplash-1.jpg'
import {useDisplay} from "vuetify";

const {mdAndDown} = useDisplay()

</script>

<template>
  <div class="home-hero" id="hero">
    <div class="d-flex flex-column home-hero-wrapper" :class="{mdAndDown}">
      <v-row>
        <v-col cols="12" sm="6" class="fs-48 fw-6 title">
          I AM A FRONT END VUE DEVELOPER WITH 2+ YEARS OF EXPERIENCE.
        </v-col>
        <v-col cols="12" sm="6" class="d-flex flex-column justify-end align-end ga-2">
          <div class="fs-14 fw-4 subtitle">
            Welcome to my portfolio website.
            I specialize in front end development and enjoy exploring variety of UI styles.
            Check out my work and feel free to contact me for work.
          </div>
          <div class="d-flex ga-2">
            <button class="cta">
              Download CV
            </button>
            <button class="cta">
              Contact
            </button>
          </div>
        </v-col>
      </v-row>
      <v-parallax :src="heroImg" class="br-4 parallax" :scale="mdAndDown ? 0.8 : 0.5"/>
    </div>
  </div>
</template>

<style scoped lang="scss">
.home-hero {
  color: $main-dark;

  .home-hero-wrapper {
    gap: 20px;
    max-width: 1200px;
    margin: auto auto 60px;

    &.mdAndDown {
      padding: 0 60px;
    }

    .title {
      font-size: var(--fs-l);
    }

    .subtitle {
      max-width: 380px;
      color: $gray;
    }

    .cta {
      padding: 8px 20px;
      border-radius: 12px;
      line-height: 19px;
      border: 1px solid $main-dark;
      cursor: pointer;
      transition: all 0.3s ease;

      &:hover, &.router-active {
        background: $gray;
        border: 1px solid $gray;
        color: $main-white;
      }
    }

    .parallax {
      width: 100%;
      aspect-ratio: 2;
    }
  }
}
</style>