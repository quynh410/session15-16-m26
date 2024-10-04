import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './routers'

// createApp(App).use(router).mount('#app') cach 1:

// cach 2
const app = createApp(App);
app.use(router);
app.mount('#app');