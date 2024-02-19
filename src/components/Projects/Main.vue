<script lang="ts">
export default {
  name: 'ProjectsMain'
}
</script>

<script setup lang="ts">
import {useDisplay} from "vuetify";
import ProjectCard from "../ProjectCard.vue";
import {projectList} from "../../composables";

const {mdAndDown} = useDisplay()

</script>

<template>
  <div class="w-screen projects-main">
    <div class="d-flex flex-column projects-main-wrapper" :class="{mdAndDown}">
      <div class="d-flex justify-center justify-md-start fs-40 fw-7 title">
        MY PROJECTS
      </div>
      <div class="d-flex flex-column ga-7 w-100 align-center project-list">
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
.projects-main {
  .projects-main-wrapper {
    width: 100%;
    max-width: 1200px;
    margin: auto;
    padding-top: 60px;
    padding-bottom: 60px;

    &.mdAndDown {
      padding: 0 10px 60px;
    }

    .title {
      margin-bottom: 60px;
    }
  }
}
</style>