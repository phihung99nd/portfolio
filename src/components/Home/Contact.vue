<script lang="ts">
export default {
  name: 'HomeContact',
}
</script>

<script setup lang="ts">
import FooterSVG from "@/assets/svg/Partnership-pana.svg"
import {ref} from "vue";
import {useLink} from "../../composables";

const contactList = ref([
  {
    key: 'Address',
    icon: 'mdi-map-marker',
    value: 'No. 285, Khuat Duy Tien, Cau Giay, Hanoi',
    link: 'https://www.google.com/maps/place/Th%C4%83ng+Long+Number+One,+Trung+Ho%C3%A0,+H%C3%A0+N%E1%BB%99i,+Vi%E1%BB%87t+Nam/@21.0021501,105.7906512,17.5z/data=!4m6!3m5!1s0x3135acafea14232b:0xad5bf6e36ded46b3!8m2!3d21.0024314!4d105.7927063!16s%2Fg%2F11b6bplxz0?entry=ttu'
  },
  {key: 'Email', icon: 'mdi-email', value: 'phihung99nd@gmail.com', link: 'mailto:phihung99nd@gmail.com'},
  {key: 'Phone', icon: 'mdi-phone', value: '(+84) 947 170 199', link: 'tel:+84947170199'},
])
</script>

<template>
  <div class="w-screen home-contact">
    <div class="d-flex justify-center justify-md-space-between align-center home-contact-wrapper">
      <a href="https://storyset.com/people" class="d-none d-md-block footer-svg">
        <img :src="FooterSVG" alt=""/>
      </a>
      <div class="d-flex flex-column align-center align-md-end ga-5 footer-info">
        <div class="title fs-20 fw-7">CONTACT</div>
        <div class="subtitle fs-18 fw-5 text-center text-md-right">For any collaborative projects or inquiries feel free to reach out to me</div>
        <div class="contact-item cursor-trigger" v-for="item in contactList" :key="item.key" @click="useLink(item.link)">
          <div class="title fs-16 fw-5 d-flex align-center justify-center justify-md-end">
            {{ item.key }}
            <v-icon :icon="item.icon"/>
          </div>
          <div class="contact-detail">{{ item.value }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.home-contact {
  background: $secondary-white;
  padding: 40px 0;

  .home-contact-wrapper {
    width: 100%;
    height: 100%;
    margin: auto;
    max-width: 1200px;

    .footer-svg {
      flex-basis: 40%;
    }

    .footer-info {
      .title {
        color: $accent;
      }

      .subtitle {
        max-width: 80%;
      }

      .contact-item {
        .contact-detail {
          color: $secondary-dark;
        }
      }
    }
  }
}
</style>