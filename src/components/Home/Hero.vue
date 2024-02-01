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
  <div class="w-screen home-hero" id="hero">
    <div class="d-flex flex-column home-hero-wrapper" :class="{mdAndDown}">
      <v-row>
        <v-col cols="12" sm="6" class="fs-48 fw-6 title">
          <div>
            I AM A FRONT END VUE DEVELOPER WITH 2+ YEARS OF EXPERIENCE.
          </div>
          <div class="mask">
            <VueWriter :array="['I AM A FRONT END VUE DEVELOPER WITH 2+ YEARS OF EXPERIENCE.']" :iterations="1"
                       :type-speed="25" caret="cursor"/>
          </div>
        </v-col>
        <v-col cols="12" sm="6" class="d-flex flex-column justify-end align-end ga-2">
          <div class="fs-14 fw-4 subtitle">
            Welcome to my portfolio website.
            I specialize in front end development and enjoy exploring variety of UI styles.
            Check out my work and feel free to contact me for work.
          </div>
          <div class="d-flex ga-2 cursor-trigger">
            <button class="cta">
              Download CV
            </button>
<!--            <button class="cta">-->
<!--              Contact-->
<!--            </button>-->
          </div>
        </v-col>
      </v-row>
      <v-parallax :src="heroImg" class="br-4 parallax" :scale="mdAndDown ? 0.8 : 0.5"/>
      <div style="display: none">Photo by <a href="https://unsplash.com/@cgower?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Christopher Gower</a> on <a href="https://unsplash.com/photos/a-macbook-with-lines-of-code-on-its-screen-on-a-busy-desk-m_HRfLhgABo?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a></div>

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
      padding: 0 10px;
    }

    .title {
      font-size: var(--fs-l);
      position: relative;
      color: transparent;

      .mask {
        color: $main-dark;
        position: absolute;
        top: 12px;
      }
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

:deep() {
  .is-typed span.cursor {
    display: inline-block;
    width: 3px;
    background-color: black;
    animation: blink 1s forwards;
    animation-iteration-count: 5;
  }

  .is-typed span.cursor.typing {
    animation: none;
  }

  @keyframes blink {
    49% {
      background-color: black;
    }
    50% {
      background-color: transparent;
    }
    100% {
      background-color: transparent;
    }
  }
}
</style>