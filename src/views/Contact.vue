<script setup lang="ts">
import {useDisplay} from "vuetify";
import ContactFooter from "../components/ContactFooter.vue";

const {mdAndDown} = useDisplay()

</script>

<template>
  <div class="w-screen contact">
    <div class="d-flex flex-column">
      <div class="map-wrapper" :class="{mdAndDown}">
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4429.5406952373505!2d105.78935205210772!3d21.00125811495694!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135acafea14232b%3A0xad5bf6e36ded46b3!2zVGjEg25nIExvbmcgTnVtYmVyIE9uZSwgVHJ1bmcgSG_DoCwgSMOgIE7hu5lpLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1708334705755!5m2!1svi!2s"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"/>
      </div>
      <ContactFooter/>
    </div>
  </div>
</template>

<style scoped lang="scss">
.contact {
  .map-wrapper {
    width: 100%;
    max-width: 1200px;
    margin: auto;
    padding-top: 30px;
    padding-bottom: 30px;

    &.mdAndDown {
      padding: 0 10px 60px;
    }

    > iframe {
      width: 100%;
      aspect-ratio: 16/9;
      min-height: 300px;
      border: none;
      border-radius: 12px;
    }
  }
}
</style>