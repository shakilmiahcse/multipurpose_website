<!-- src/components/Footer.vue -->
<template>
  <footer class="bg-dark text-white py-4 mt-auto">
    <div class="container">
      <div class="row align-items-center">
        <!-- Left: Copyright Information -->
        <div class="col-md-6 text-center text-md-start">
          <p class="mb-0">&copy; {{ currentYear }} Shakil Miah. All rights reserved.</p>
        </div>

        <!-- Right: Social Media Icons -->
        <div class="col-md-6 text-center text-md-end">
          <div class="d-flex justify-content-center justify-content-md-end">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" class="text-white me-3">
              <font-awesome-icon :icon="['fab', 'twitter']" size="lg" />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" class="text-white me-3">
              <font-awesome-icon :icon="['fab', 'facebook-f']" size="lg" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" class="text-white">
              <font-awesome-icon :icon="['fab', 'instagram']" size="lg" />
            </a>
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
/* Custom styles for the footer, if needed */
</style>
