import { createApp } from 'vue';
import App from './App.vue';
import router from './router';


// Import Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';

// Import Bootstrap JS (Optional, for JS components)
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


createApp(App)
  .use(router)
  .mount('#app');
