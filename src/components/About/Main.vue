<script lang="ts">
export default {
  name: 'AboutMain'
}
</script>

<script setup lang="ts">
import avatarImg from '@/assets/images/avatar.jpg'
import {useDisplay} from "vuetify";
import {expertiseList} from "../../composables";

const {mdAndDown} = useDisplay()

//data


</script>

<template>
  <div class="w-screen about-main">
    <div
        class="d-flex
        flex-column flex-md-row
        justify-start justify-md-space-between
        align-center align-md-start
        about-main-wrapper"
        :class="{mdAndDown}">
      <div class="main-info d-flex flex-column ga-8">
        <div class="d-flex flex-column align-center align-md-start">
          <div class="fs-40 fw-7 title" v-view-transition-name="'about-title'">ABOUT ME</div>
          <div class="d-block d-md-none avatar" style="margin-bottom: 20px;">
            <img :src="avatarImg" alt="" v-view-transition-name="'avatar'"/>
          </div>
          <div class="d-none d-md-block" style="height: 150px"/>
          <div class="subtitle">
            I've been passionate about programming website interfaces since my university days.
            I worked for a big corporation for three months as an intern,
            and I learned useful skills that support my passion.
            Having studied and worked on real projects for over two years,
            I have developed a strong understanding of HTML, CSS, Javascript, Vue, SCSS, and most recently, Nuxt.
          </div>
        </div>
        <v-divider color="f6f6f6" thickness="2"/>
        <div class="d-flex flex-column align-center align-md-start ga-5">
          <div class="fs-16 fw-6">EXPERTISE</div>
          <div class="d-flex flex-column ga-5 w-100">
            <div class="d-flex flex-column flex-md-row expertise-row ga-2" v-for="item in expertiseList"
                 :key="item.key">
              <div class="expertise-key fs-14 d-flex justify-start align-center">{{ item.key }}</div>
              <div class="d-flex ga-2 flex-wrap">
                <div class="expertise-skill-tag"
                     v-for="skill in item.skill" :key="skill.name"
                >
                  <div class="flip-card-inner br-2">
                    <div class="flip-card-front fs-14 d-flex justify-center align-center br-2">
                      {{ skill.name }}
                    </div>
                    <div class="flip-card-back fs-14 d-flex justify-center align-center br-2">
                      {{ skill.exp }}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="avatar d-none d-md-block">
        <img :src="avatarImg" alt="" v-view-transition-name="'avatar'"/>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.about-main {
  .about-main-wrapper {
    width: 100%;
    max-width: 1200px;
    margin: auto;
    padding-top: 60px;
    padding-bottom: 60px;

    &.mdAndDown {
      padding: 0 10px 60px;
    }

    .main-info {
      flex-basis: 50%;

      .subtitle {
        color: $secondary-dark;
        font-size: var(--fs-s);
      }

      .expertise-row {
        .expertise-key {
          flex: 0 0;
          min-width: 120px;
          height: 33px;
          color: $secondary-dark;
        }

        .expertise-skill-tag {
          color: $secondary-dark;
          width: 110px;
          height: 33px;
          perspective: 500px;

          .flip-card-inner {
            border: 1px solid $secondary-dark;
            position: relative;
            width: 100%;
            height: 100%;
            text-align: center;
            transition: transform 0.5s ease;
            transform-style: preserve-3d;
          }

          &:hover .flip-card-inner {
            transform: rotateY(180deg);
          }

          .flip-card-front, .flip-card-back {
            position: absolute;
            width: 100%;
            height: 100%;
            -webkit-backface-visibility: hidden;
            backface-visibility: hidden;
          }

          .flip-card-front {
            z-index: 1;
            transform: rotateY(0deg);
          }

          .flip-card-back {
            z-index: 0;
            transform: rotateY(180deg);
            background: $gray;
            color: $secondary-white;
          }
        }
      }
    }

    .avatar {
      overflow: clip;
      border-radius: 16px;
      width: 300px;
      height: 400px;
      box-shadow: 2px 2px 4px 1px rgba(0, 0, 0, 0.15);

      > img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
}
</style>