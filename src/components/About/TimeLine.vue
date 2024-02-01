<script lang="ts">
export default {
  name: 'AboutTimeLine'
}
</script>

<script setup lang="ts">
import {ref} from "vue";
import {useDisplay} from "vuetify";

const {mdAndDown} = useDisplay()

// data
const timelineList = ref([
  {
    time: 'July 2017 - July 2022',
    place: 'HUST University',
    program: 'Global ICT Program',
    description: 'Integer nec risus turpis. Donec sit amet posuere odio, ac porttitor massa. Nam sed ipsum tellus. Aliquam erat volutpat. Nulla facilisi.'
  },
  {
    time: 'June 2021 - September 2021',
    place: 'MISA JSC',
    program: 'Fullstack Developer Fresher',
    description: 'Integer nec risus turpis. Donec sit amet posuere odio, ac porttitor massa. Nam sed ipsum tellus. Aliquam erat volutpat. Nulla facilisi.'
  },
  {
    time: 'January 2022 - January 2024',
    place: 'MicroTech Company',
    program: 'Front-end Developer',
    description: 'Integer nec risus turpis. Donec sit amet posuere odio, ac porttitor massa. Nam sed ipsum tellus. Aliquam erat volutpat. Nulla facilisi.'
  }
])
</script>

<template>
  <div class="w-screen about-timeline">
    <div class="d-flex flex-column align-center ga-8 about-timeline-wrapper" :class="{mdAndDown}">
      <div class="fs-24 fw-7 title">EDUCATION - WORK EXPERIENCE</div>
      <div class="w-100">
        <v-timeline align="start" justify="center">
          <v-timeline-item v-for="(item, index) in timelineList" :key="item.place"
                           :dot-color="index%2 == 0 ? 'blue-darken-1' : 'grey-lighten-1'">
            <template #opposite>
              <div class="d-flex flex-column ga-2" :class="{[`align-${index%2 == 1 ? 'start' : 'end'}`]: true}">
                <div class="fs-20 fw-5">{{ item.place }}</div>
                <div class="time">{{ item.time }}</div>
              </div>
            </template>
            <div class="d-flex flex-column ga-2" :class="{[`align-${index%2 == 0 ? 'start' : 'end'}`]: true}">
              <div class="fs-20 fw-5">{{ item.program }}</div>
              <div class="description">{{
                  item.description
                }}
              </div>
            </div>
          </v-timeline-item>
        </v-timeline>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.about-timeline {
  padding-bottom: 60px;
  border-bottom: 1px solid $gray;

  .about-timeline-wrapper {
    width: 100%;
    max-width: 1200px;
    margin: auto;

    &.mdAndDown {
      padding: 0 10px;
    }

    .time, .description {
      color: $secondary-dark;
    }

    .description {
      width: 75%;
      margin-bottom: 20px;
    }

    .align-end {
      .description {
        text-align: right;
      }
    }
  }
}
</style>