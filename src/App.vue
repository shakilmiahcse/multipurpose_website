<!-- src/App.vue -->
<template>
  <div id="app" class="d-flex flex-column min-vh-100">
    <!-- Header component -->
    <Header />

    <!-- Main content area -->
    <router-view class="flex-fill"></router-view>

    <!-- Footer component -->
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';

export default {
  name: 'App',
  components: {
    Header,
    Footer,
  },
};
</script>

<style>
/* Optional: Additional global styles */
body {
  margin: 0;
  padding: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  background-color: #f8f9fa;
}

/* Ensure the main content takes up available space */
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

router-view {
  flex: 1;
}
</style>
