// main.js or main.ts
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

// Import Bootstrap CSS and JS
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

// Import Font Awesome core and icons
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

// Import specific Font Awesome icon sets
import { faTwitter, faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons'; // Brand icons
import { faHome } from '@fortawesome/free-solid-svg-icons'; // Solid icons (example)

// Add icons to the library
library.add(faTwitter, faFacebookF, faInstagram, faHome);

// Create the Vue app
const app = createApp(App);

// Register FontAwesomeIcon component globally
app.component('font-awesome-icon', FontAwesomeIcon);

// Use router
app.use(router);

// Mount the app
app.mount('#app');
