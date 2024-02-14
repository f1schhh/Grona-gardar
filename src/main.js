import { createApp } from 'vue'
import './style.css'
import './database.json'
import App from './App.vue'
import router from './router';

const app = createApp(App);

app.use(router);

app.mount("#app");
