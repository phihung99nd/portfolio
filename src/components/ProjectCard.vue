<script setup lang="ts">
import {onMounted, ref} from "vue";
import { useLink } from "../composables";

defineProps(['item', 'reverse'])

const projectCard = ref<HTMLDivElement>()

onMounted(() => {
  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5
  };

  function handleObserver(entries, observer) {
    entries.forEach(entry => {
      // If element is in viewport, add the 'show' class to trigger the animation
      if (entry.isIntersecting) {
        projectCard.value.classList.add('show');
        observer.unobserve(projectCard.value) // disable observer once the element has shown
      }
      // else {
      //   projectCard.value.classList.remove('show');
      // }
    });
  }

  const observer = new IntersectionObserver(handleObserver, options);

// Start observing the element
  observer.observe(projectCard.value);
})
</script>

<template>
  <div class="project-card pa-5 br-4" ref="projectCard" :style="{ '--transition': reverse ? '-100px' : '100px'}">
    <div class="d-flex flex-column flex-md-row ga-5 justify-start align-center align-md-start" :class="{'flex-md-row-reverse': reverse}">
      <div class="d-flex align-center image">
        <img class="br-3" :src="item.thumbnail" alt=""/>
      </div>
      <div class="d-flex flex-column justify-start align-center ga-5 description">
        <div class="text-center title cursor-trigger">
          <div class="fs-20 fw-7">{{ item.title }}</div>
          <div class="fs-20 fw-5 subtitle">({{ item.time }})</div>
        </div>
        <div class="text-center subtitle">
          {{ item.description }}
        </div>
        <div class="d-flex ga-2 justify-center align-center library">
          <div class="fs-14" v-for="lib in item.lib" :key="lib.name" @click.stop="useLink(lib.link)">
            {{ lib.name }}
          </div>
        </div>
        <div class="d-flex ga-2 justify-center align-center flex-wrap action">
          <div class="fs-16 fw-6 cursor-trigger" v-for="action in item.action" :key="action.key" @click.stop="useLink(action.link)">
            {{ action.key }}
            <v-icon :icon="action.icon"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.project-card {
  width: 100%;
  box-shadow: 4px 4px 16px 0px rgba(0, 0, 0, 0.25);
  opacity: 0;
  transform: translateX(var(--transition));
  transition: opacity 0.5s ease-out, transform 0.5s ease-out;

  &.show {
    opacity: 1;
    transform: translateX(0);
  }

  .image {
    flex-basis: 33%;
    img {
      width: 100%;
      max-width: 400px;
      object-fit: cover;
    }
  }

  .description {
    flex-basis: 66%;

    .title {
      transition: all 0.3s ease;
      &:hover {
        color: $accent;
      }
    }

    .subtitle {
      color: $secondary-dark;
    }

    .library {
      > div {
        padding: 8px 16px;
        border-radius: 4px;
        box-shadow: 2px 2px 4px 1px rgba(0, 0, 0, 0.15);
      }
    }

    .action {
      > div {
        padding: 12px 24px;
        transition: all 0.3s ease;
        &:hover {
          color: $accent;
        }
      }
    }
  }

}
</style>