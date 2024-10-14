<!-- src/views/Projects.vue -->
<template>
  <div class="projects py-5">
    <div class="container">
      <h1 class="mb-4">My Projects</h1>
      <p class="lead">
        As a web application developer, I have worked on various projects, from simple websites to complex applications.
        Below are some of the key projects I've developed:
      </p>

      <!-- Projects in a 3-card row layout -->
      <div class="row">
        <div class="col-md-4" v-for="project in recentProjects" :key="project.id">
          <div class="card mb-4 shadow-sm">
            <img :src="project.image" class="card-img-top" alt="Project image">
            <div class="card-body">
              <h5 class="card-title">{{ project.title }}</h5>
              <p class="card-text">{{ project.description }}</p>
              <a :href="project.link" class="btn btn-primary">View Project</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Projects',
  data() {
    return {
      recentProjects: [
        {
          id: 1,
          title: 'E-commerce Website',
          description: 'An online platform to buy and sell products with secure payment gateways.',
          image: 'https://via.placeholder.com/300x200', // Replace with your actual project image
          link: '#', // Replace with actual project link
        },
        {
          id: 2,
          title: 'POS System',
          description: 'A comprehensive point-of-sale system designed for small businesses.',
          image: 'https://via.placeholder.com/300x200', // Replace with your actual project image
          link: '#', // Replace with actual project link
        },
        {
          id: 3,
          title: 'Portfolio Website',
          description: 'A personal portfolio to showcase my skills and recent projects.',
          image: 'https://via.placeholder.com/300x200', // Replace with your actual project image
          link: '#', // Replace with actual project link
        },
        {
          id: 4,
          title: 'E-commerce Website',
          description: 'An online platform to buy and sell products with secure payment gateways.',
          image: 'https://via.placeholder.com/300x200', // Replace with your actual project image
          link: '#', // Replace with actual project link
        },
        {
          id: 5,
          title: 'POS System',
          description: 'A comprehensive point-of-sale system designed for small businesses.',
          image: 'https://via.placeholder.com/300x200', // Replace with your actual project image
          link: '#', // Replace with actual project link
        },
        {
          id: 6,
          title: 'Portfolio Website',
          description: 'A personal portfolio to showcase my skills and recent projects.',
          image: 'https://via.placeholder.com/300x200', // Replace with your actual project image
          link: '#', // Replace with actual project link
        },
      ],
    };
  },
  methods: {
    scrollToContact() {
      const contactSection = document.getElementById('contact');
      contactSection.scrollIntoView({ behavior: 'smooth' });
    },
  },
};
</script>

<style scoped>
.projects {
  padding: 20px;
}

h1 {
  color: #2c3e50;
}

h5 {
  color: #34495e;
}

p.lead {
  font-size: 1.1rem;
}

/* Card styles */
.card {
  border-radius: 8px;
  transition: transform 0.2s ease;
}

.card:hover {
  transform: translateY(-5px);
}

.card-body {
  padding: 20px;
}

.card-title {
  font-size: 1.25rem;
  font-weight: bold;
}

.card-text {
  font-size: 1rem;
}
</style>
