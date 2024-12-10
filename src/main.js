import { createApp } from 'vue'
import App from './App.vue'

import '@/assets/stylesheets/application.sass';
import router from './router'

createApp(App).use(router).mount('#app')
