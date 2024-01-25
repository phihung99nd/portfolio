import './assets/base.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import '@mdi/font/css/materialdesignicons.css'

import App from './App.vue'
import router from './router'

// UI helper packages
// @ts-ignore
import VueKinesis from "vue-kinesis";
// @ts-ignore
import VueWriter from "vue-writer";

const vuetify = createVuetify({
    components,
    directives,
    display: {
        thresholds: {
            lg: 1200,
        },
    },
})

const app = createApp(App)

app.use(vuetify)
app.use(createPinia())
app.use(router)
app.use(VueKinesis);
app.use(VueWriter)

app.mount('#app')
