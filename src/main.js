import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './style.css'
import './database.json'
import App from './App.vue'
import router from './router';

//Creat an intstamce of app
const app = createApp(App);

//Apply router to app
app.use(router);

// Install Pinia plugin
const pinia = createPinia();
// Make sure to install Pinia before mounting the app
app.use(pinia);

app.mount("#app");
