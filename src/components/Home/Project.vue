<script lang="ts">
export default {
  name: 'HomeProject',
}
</script>

<script setup lang="ts">
import {useDisplay} from "vuetify";
import ProjectCard from "@/components/ProjectCard.vue";
import {ref} from "vue";
import {useRouter} from "vue-router";
import {projectList} from "../../composables";

const router = useRouter()
const {mdAndDown} = useDisplay()

// data

</script>

<template>
  <div class="w-screen home-project">
    <div class="d-flex flex-column align-center ga-10 home-project-wrapper" :class="{mdAndDown}">
      <div class="d-flex flex-column align-center ga-5 header">
        <div class="title fs-20 fw-7">PROJECTS</div>
        <div class="subtitle fs-18 fw-5">Feel free to check out my works</div>
      </div>
      <div class="d-flex flex-column ga-7 w-100 align-center project-list">
        <div class="more-btn br-3">
          <span class="cursor-trigger" @click="router.push({name: 'projects'})">More >></span>
        </div>
        <ProjectCard
            v-for="(item, index) in projectList"
            :key="item"
            :reverse="index%2 != 0"
            :item="item"
        />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.home-project {
  color: $main-dark;
  padding: 20px 0;
  margin-bottom: 60px;

  .home-project-wrapper {
    width: 100%;
    height: 100%;
    max-width: 1200px;
    margin: auto;

    &.mdAndDown {
      padding: 0 10px;
    }

    .header {
      .title {
        color: $accent;
      }
    }

    .project-list {
      .more-btn {
        align-self: end;
        > span:hover {
          color: $accent;
        }
      }
    }
  }
}
</style>