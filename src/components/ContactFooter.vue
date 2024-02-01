<script setup lang="ts">
import {useDisplay} from "vuetify";
import {ref} from "vue";
import { Email } from '@/plugins/smtp.js'

const {mdAndDown} = useDisplay()

// data
const formRef = ref()
const form = ref({
  name: '',
  email: '',
  message: ''
})

const formRules = ref({
  required: value => !!value || 'This field is required'
})

const titleOptions = ref([
  'Contact for freelance job',
  'Offer for a job'
])

const snackbar = ref(false)
const serverError = ref('')

const socialContact = ref([
  {icon: 'mdi-github', link: 'https://github.com/phihung99nd'},
  {icon: 'mdi-facebook', link: 'https://www.facebook.com/tranphi.hung.1238/'},
  {icon: 'mdi-facebook-messenger', link: 'https://m.me/tranphi.hung.1238/'},
])
async function onSubmit() {
  const {valid} = await formRef.value.validate()
  if(!valid) return
  Email.send({
    Host : "smtp.elasticemail.com",
    Username : "phihung99nd@gmail.com",
    Password : "AC9695905B23C8A7FC208FFD935D01A1BAAD",
    To : 'phihung99nd@gmail.com',
    From : 'phihung99nd@gmail.com',
    Subject : form.value.title || 'Portfolio Contact ',
    Body : `<div>Name: ${form.value.name}</div>` +
        `<div>Email: ${form.value.email}</div>` +
        `<div>Message: ${form.value.message}</div>`
  }).then(
      message => {
        if(message == 'OK') {
          Email.send({
            Host : "smtp.elasticemail.com",
            Username : "phihung99nd@gmail.com",
            Password : "AC9695905B23C8A7FC208FFD935D01A1BAAD",
            To : form.value.email,
            From : 'phihung99nd@gmail.com',
            Subject : form.value.title || 'Portfolio Contact ',
            Body : '<div>I have received your email for collaboration.</div>'+
                '<div>Thank you for your contact and I will reply as soon as possible.</div>'
          }).then(message => {
            if(message == 'OK') {
              serverError.value = 'Email sent'
              snackbar.value = true
            } else {
              serverError.value = 'Server Error'
              snackbar.value = true
            }
          })
        } else {
          serverError.value = 'Server Error'
          snackbar.value = true
        }
      }
  ).finally(() => {
    formRef.value.reset()
  });
}

</script>

<template>
  <div class="contact-footer w-screen">
    <div class="d-flex flex-wrap contact-footer-wrapper" :class="{mdAndDown}">
      <div class="d-flex flex-column ga-5 contact-form">
        <div class="font-italic title">// Let's Collaborate</div>
        <v-form ref="formRef" @submit.prevent class="d-flex flex-column ga-3">
          <v-text-field v-model="form.name" :rules="[formRules.required]" validate-on="submit" density="compact"
                        label="Your Name *" variant="outlined"></v-text-field>
          <v-text-field v-model="form.email" :rules="[formRules.required]" validate-on="submit" density="compact"
                        label="Your Email *" variant="outlined"></v-text-field>
          <v-select v-model="form.title" :items="titleOptions" density="compact" label="What Can I Help You With?"
                    variant="outlined" clearable></v-select>
          <v-text-field v-model="form.message" density="compact" label="Write Your Message..."
                        variant="outlined"></v-text-field>
          <v-divider color="f6f6f6" thickness="2"/>
          <v-btn color="blue" @click="onSubmit">Submit</v-btn>
        </v-form>
      </div>
      <div class="d-flex flex-column justify-space-between contact-info">
        <div class="d-flex flex-column ga-5">
          <div class="fs-20 fw-7 title">Contact</div>
          <div class="d-flex flex-column ga-3">
            <div class="fs-32 fw-5 main-info" style="text-decoration: underline">phihung99nd@gmail.com</div>
            <div class="fs-32 fw-5 main-info">(+84) 947 170 199</div>
          </div>
        </div>
        <div class="d-flex flex-column ga-2">
          <div class="subtitle fs-14">Connect with me on social media</div>
          <div class="d-flex ga-4">
            <a class="a-reset" :href="item.link" target="_blank" v-for="item in socialContact" :key="item.icon">
              <v-icon class="fs-36 hover-text" :icon="item.icon"/>
            </a>
          </div>
        </div>
      </div>
    </div>
    <v-snackbar
        v-model="snackbar"
        timeout="2000"
        location="bottom right"
        variant="elevated"
        color="green"
        rounded
    >
      {{ serverError }}
    </v-snackbar>
  </div>
</template>

<style scoped lang="scss">
.contact-footer {
  padding: 60px 0;

  .contact-footer-wrapper {
    width: 100%;
    max-width: 1200px;
    margin: auto;
    gap: 120px;

    &.mdAndDown {
      padding: 0 10px;
    }

    .contact-form {
      width: 50%;
      min-width: 300px;
      max-width: 400px;

      .title {
        color: $secondary-dark;
      }
    }

    .contact-info {
      .title {
        color: $accent;
      }

      .main-info {
        line-height: 40px;
      }

      .hover-text:hover {
        color: $accent;
      }
    }
  }
}
</style>