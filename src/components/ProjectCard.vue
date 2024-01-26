<script setup lang="ts">
import {onMounted, ref} from "vue";

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

function linkTo(url) {
  window.open(url, '_blank')
}

</script>

<template>
  <div class="project-card pa-5 br-4" ref="projectCard" :style="{ '--transition': reverse ? '-100px' : '100px'}">
    <div class="d-flex flex-column flex-md-row ga-5 justify-start align-center align-md-start" :class="{'flex-md-row-reverse': reverse}">
      <div class="d-flex align-center image">
        <img class="br-3" src="https://images.unsplash.com/photo-1542744095-291d1f67b221?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt=""/>
      </div>
      <div class="d-flex flex-column justify-start align-center ga-5 description">
        <div class="text-center cursor-trigger">
          <div class="fs-20 fw-7">{{ item.title }}</div>
          <div class="fs-20 fw-5 subtitle">({{ item.time }})</div>
        </div>
        <div class="text-center subtitle">
          {{ item.description }}
        </div>
        <div class="d-flex ga-2 justify-center align-center library">
          <div class="fs-14" v-for="lib in item.lib" :key="lib.name" @click.stop="linkTo(lib.link)">
            {{ lib.name }}
          </div>
        </div>
        <div class="d-flex ga-2 justify-center align-center flex-wrap action">
          <div class="fs-16 fw-6 cursor-trigger" v-for="action in item.action" :key="action.key" @click.stop="linkTo(action.link)">
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