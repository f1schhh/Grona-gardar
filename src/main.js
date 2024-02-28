import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './style.css'
import './admin.css'
import './database.json'
import App from './App.vue'
import router from './router';
import { useProductStore } from "./store";

// Import the watch function from Vue
import { watch } from "vue";



//Creat an intstamce of app
const app = createApp(App);

//Apply router to app
app.use(router);

// Install Pinia plugin
const pinia = createPinia();
// Make sure to install Pinia before mounting the app
app.use(pinia);


/*======================================================================*/
/*=== UPDATE LOCAL STORAGE WHENEVER CHANGE IN PRODUCTS in PINIA CART ===*/
/*======================================================================*/

// Retrieve the product store instance
const productStore = useProductStore();

// Watch for changes in the products state and save it to local storage
watch(
    // Watch the products state in the product store
    () => productStore.products,
    // When the products state changes, execute this callback function
    (products) => {
        // Convert the products array to a JSON string and save it to local storage
        localStorage.setItem("products", JSON.stringify(products));
    },
    // Specify options for the watch function
    { deep: true } // Deep watch ensures changes in nested properties are detected
);



app.mount("#app");
