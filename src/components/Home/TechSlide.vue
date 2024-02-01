<script lang="ts">
export default {
  name: 'HomeTechSlide',
}
</script>

<script setup lang="ts">
import {useDisplay} from "vuetify";
import {ref} from "vue";
import HTMLSVG from "@/assets/svg/html-5-logo-svgrepo-com.svg"
import CSSSVG from "@/assets/svg/css-3-svgrepo-com.svg"
import JSSVG from "@/assets/svg/javascript-svgrepo-com.svg"
import SCSSSVG from "@/assets/svg/sass-svgrepo-com.svg"
import VUESVG from "@/assets/svg/vue-svgrepo-com.svg"
import NUXTSVG from "@/assets/svg/nuxt-icon-svgrepo-com.svg"

const {mdAndDown} = useDisplay()

// data
const skillList = ref([
  {src: HTMLSVG, to: 'https://www.w3schools.com/html/'},
  {src: CSSSVG, to: 'https://www.w3schools.com/css/'},
  {src: JSSVG, to: 'https://www.w3schools.com/js/'},
  {src: SCSSSVG, to: 'https://sass-lang.com/'},
  {src: VUESVG, to: 'https://vuejs.org/'},
  {src: NUXTSVG, to: 'https://nuxt.com/'},
])
</script>

<template>
  <div class="w-screen d-flex justify-center align-center home-tech-slider">
    <div class="home-tech-slider-wrapper" :class="{mdAndDown}">
      <div class="slider" :style="{'--sld-length': skillList.length}">
        <div class="slide-track">
          <template v-for="i in 2" :key="i">
            <template v-for="(item, index) in skillList" :key="index">
              <div class="slide cursor-trigger">
                <a class="a-reset" :href="item.to">
                  <img :src="item.src" alt=""/>
                </a>
              </div>
            </template>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.home-tech-slider {
  $height: clamp(130px, 100px + 10vw, 180px);
  $inner-height: calc($height - 80px);
  $inner-width: calc($inner-height * 2);

  height: $height;
  padding: 40px 0;

  .home-tech-slider-wrapper {
    width: 100%;
    height: 100%;
    max-width: 1200px;

    &.mdAndDown {
      padding: 0 10px;
    }

    // Infinity slide
    @mixin white-gradient {
      background: linear-gradient(to right, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 100%);
    }

    $animationSpeed: 15s;

    // Animation
    @keyframes scroll {
      0% {
        transform: translateX(0);
      }
      100% {
        transform: translateX(calc(0px - ($inner-width * var(--sld-length))))
      }
    }


    // Styling
    .slider {
      background: white;
      height: 100%;
      margin: auto;
      overflow: hidden;
      position: relative;
      width: 100%;

      &::before,
      &::after {
        @include white-gradient;
        content: "";
        height: $inner-height;
        position: absolute;
        width: $inner-width;
        z-index: 2;
        pointer-events: none
      }

      &::after {
        right: 0;
        top: 0;
        transform: rotateZ(180deg);
      }

      &::before {
        left: 0;
        top: 0;
      }

      .slide-track {
        animation: scroll $animationSpeed linear infinite;
        display: flex;
        width: calc($inner-width * var(--sld-length) * 2);
        //mix-blend-mode: luminosity;

        &:hover {
          animation-play-state: paused;
        }
      }

      .slide {
        height: $inner-height;
        width: $inner-width;

        img {
          height: $inner-height;
          width: $inner-height;
        }
      }
    }
  }
}
</style>