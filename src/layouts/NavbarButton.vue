<script setup lang="ts">
defineProps(['to'])
</script>

<template>
  <RouterLink active-class="router-active" class="d-flex justify-space-between align-center fs-16 navbar-btn a-reset" :to="to">
    <slot/>
  </RouterLink>
</template>

<style scoped lang="scss">
.navbar-btn {
  padding: 8px 20px;
  border-radius: 12px;
  border: 1px solid transparent;
  line-height: 19px;
  transition: all 0.3s ease;

  &:hover, &.router-active {
    border: 1px solid $main-dark;
  }
}
</style>