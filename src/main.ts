import { createApp } from 'vue'
import { createPinia } from 'pinia'
import FontAwesomeIcon from "@/utils/fontawesome"

import App from './App.vue'
import router from './router'

import './assets/main.css'

const app = createApp(App)

app.use(createPinia())
app.component("font-awesome-icon", FontAwesomeIcon)
app.use(router)

app.mount('#app')
