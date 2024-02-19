<script lang="ts">
export default {
  name: 'AboutTimeLine'
}
</script>

<script setup lang="ts">
import {useDisplay} from "vuetify";
import {timelineList} from "../../composables";

const {mdAndDown} = useDisplay()

// data

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