<script lang="ts">
export default {
  name: 'HomeAbout',
}
</script>

<script setup lang="ts">
import avatarImg from '@/assets/images/avatar.jpg'
import {useDisplay} from "vuetify";

const {mdAndDown} = useDisplay()

</script>

<template>
  <div class="w-screen home-about" id="about">
    <kinesis-container event="scroll" class="background background-right">
      <kinesis-element
          type="translate"
          :strength="500"
          :originY="0"
      >
        <div class="ring"/>
      </kinesis-element>
    </kinesis-container>
    <kinesis-container event="scroll" class="background background-left">
      <kinesis-element
          type="translate"
          :strength="700"
          :originY="-100"
      >
        <div class="ring"/>
      </kinesis-element>
    </kinesis-container>
    <div class="d-flex align-center ga-15 home-about-wrapper" :class="{mdAndDown}">
      <kinesis-container class="avatar">
        <kinesis-element
            type="depth"
            :strength="20"
        >
          <div class="ring back"/>
        </kinesis-element>
        <kinesis-element
            type="depth"
            :strength="20"
        >
          <v-img
              :width="300"
              :height="300"
              cover
              class="br-4"
              :src="avatarImg"
          />
        </kinesis-element>
        <kinesis-element
            type="depth"
            :strength="20"
        >
          <div class="ring top"/>
        </kinesis-element>
      </kinesis-container>
      <div class="d-flex flex-column ga-5 description">
        <div class="title fs-20 fw-7">ABOUT ME</div>
        <div class="subtitle fs-18 fw-5">
          A junior front end developer <br/>
          graduated from Hanoi University of Science and Technology</div>
        <div class="content">
          I've been passionate about programming website interfaces since my university days.
          I worked for a big corporation for three months as an intern,
          and I learned useful skills that support my passion.
          Having studied and worked on real projects for over two years,
          I have developed a strong understanding of HTML, CSS, Javascript, Vue, SCSS, and most recently, Nuxt.
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.home-about {
  background: $secondary-white;
  position: relative;
  overflow: hidden;
  color: $main-dark;

  .home-about-wrapper {
    width: 100%;
    height: 500px;
    max-width: 1200px;
    margin: auto;
    padding: 100px 0;
    position: relative;
    z-index: 1;

    &.mdAndDown {
      padding: 60px 60px;
      flex-direction: column;
      justify-content: center;
      height: fit-content;

      .description {
        align-items: center;
        text-align: center;
      }
    }

    .avatar {
      width: 300px;
      height: 300px;
    }

    .description {
      height: 100%;
      flex-grow: 1;
      align-items: start;
      justify-content: start;

      .title {
        color: $accent;
      }

      .content {
        color: $secondary-dark;
        max-width: 600px;
      }
    }
  }
}

.ring {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: $gray;
  mask: radial-gradient(transparent 40px, #000 0px);
  -webkit-mask: radial-gradient(transparent 40px, #000 0px);

  &.back {
    position: absolute;
    top: -20px;
    left: -50px;
    mask: radial-gradient(transparent 0px, #000 0px);
    -webkit-mask: radial-gradient(transparent 0px, #000 0px);
  }

  &.top {
    position: absolute;
    bottom: -50px;
    right: -50px;
  }
}

.background {
  position: absolute;

  &-left {
    left: -180px;
    .ring {
      width: 300px;
      height: 300px;
      background: $main-white;
      mask: radial-gradient(transparent 135px, #000 0px);
      -webkit-mask: radial-gradient(transparent 135px, #000 0px);
    }
  }

  &-right {
    right: -180px;
    .ring {
      width: 300px;
      height: 300px;
      background: $main-white;
      mask: radial-gradient(transparent 135px, #000 0px);
      -webkit-mask: radial-gradient(transparent 135px, #000 0px);
    }
  }
}
</style>