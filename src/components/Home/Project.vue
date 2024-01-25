<script lang="ts">
export default {
  name: 'HomeProject',
}
</script>

<script setup lang="ts">
import {useDisplay} from "vuetify";
import ProjectCard from "@/components/ProjectCard.vue";
import {ref} from "vue";

const {mdAndDown} = useDisplay()

// data
const projectList = ref([
  {
    title: 'BESA - Online Service Reservation Webapp',
    time: 'January 2023',
    description: 'Besa.vn is a great choice for anyone looking for beauty and healthcare services. ' +
        'Besa is an online booking site that allows users and service providers ' +
        'to interact and easily exchange information about services and promotions. ' +
        'Therefore, searching and booking on Besa becomes faster and simpler.',
    lib: [
      {name: 'Vue 2', link: 'https://v2.vuejs.org/'},
      {name: 'ViewUI', link: 'https://www.iviewui.com/'},
    ],
    action: [
      {key: 'Demo', link: 'https://besa.vn/', icon: 'mdi-youtube-tv'},
    ]
  },
  {
    title: 'Personal Portfolio',
    time: 'January 2024',
    description: 'A personal portfolio to briefly present my information to recruiter. ' +
        'The website is compilation of academic and professional materials that exemplifies my education, skills, experiences and work ethics. ' +
        'The website is designed by Figma and developed based on VueJS and Vuetify.',
    lib: [
      {name: 'Vue 3', link: 'https://vuejs.org/'},
      {name: 'Vuetify', link: 'https://vuetifyjs.com/en/'},
    ],
    action: [
      {key: 'Demo', link: 'https://phihungtran.vercel.app/', icon: 'mdi-youtube-tv'},
      {key: 'Figma', link: 'https://www.figma.com/file/xsRGt5E1xxziZfQK51WWom/Portfolio?type=design&node-id=30%3A19929&mode=design&t=U7FtyAKMmfUC93J1-1', icon: 'mdi-palette'},
      {key: 'Github', link: 'https://github.com/phihung99nd/portfolio', icon: 'mdi-github'},
    ]
  }
])

</script>

<template>
  <div class="w-screen home-project">
    <div class="d-flex flex-column align-center ga-10 home-project-wrapper" :class="{mdAndDown}">
      <div class="d-flex flex-column align-center ga-5 header">
        <div class="title fs-20 fw-7">PROJECTS</div>
        <div class="subtitle fs-18 fw-5">Feel free to check out my works</div>
      </div>
      <div class="d-flex flex-column ga-7 w-100 project-list">
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

  .home-project-wrapper {
    width: 100%;
    height: 100%;
    max-width: 1200px;
    margin: auto;

    &.mdAndDown {
      padding: 0 60px;
    }

    .header {
      .title {
        color: $accent;
      }
    }
  }
}
</style>