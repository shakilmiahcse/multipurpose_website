<!-- src/components/Footer.vue -->
<template>
    <footer class="bg-dark text-white py-4 mt-auto">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-md-6 text-center text-md-start">
            <p class="mb-0">&copy; {{ currentYear }} Your Company. All rights reserved.</p>
          </div>
          <div class="col-md-6 text-center text-md-end">
            <div class="d-flex justify-content-center justify-content-md-end">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" class="text-white me-3">
                <i class="fab fa-twitter fa-lg"></i>
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" class="text-white me-3">
                <i class="fab fa-facebook-f fa-lg"></i>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" class="text-white">
                <i class="fab fa-instagram fa-lg"></i>
              </a>
              <!-- Add more social links as needed -->
            </div>
          </div>
        </div>
      </div>
    </footer>
  </template>
  
  <script>
  export default {
    name: 'Footer',
    data() {
      return {
        currentYear: new Date().getFullYear(),
      };
    },
  };
  </script>
  
  <style scoped>
  /* Remove existing styles as Bootstrap handles them */
  </style>
  