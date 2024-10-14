<!-- src/views/Home.vue -->
<template>
  <div class="home py-5">
    <div class="container text-center">
      <!-- Hero Section -->
      <h1 class="mb-4">Welcome to My Developer Portfolio</h1>
      <p class="lead">
        I'm a passionate Web Developer skilled in creating modern and efficient web applications.
        Explore my projects and feel free to reach out!
      </p>
      <button class="btn btn-primary mt-3" @click="scrollToContact">Get Started</button>
    </div>

    <!-- Skills Section -->
    <div class="skills-section py-5 bg-light mt-5">
      <div class="container">
        <h2 class="mb-4 text-center">Skills</h2>
        <div class="row text-center">
          <div class="col-md-4">
            <i class="fas fa-code fa-3x mb-3"></i>
            <h5>Frontend Development</h5>
            <p>Expertise in HTML, CSS, JavaScript, Vue.js, and React.</p>
          </div>
          <div class="col-md-4">
            <i class="fas fa-server fa-3x mb-3"></i>
            <h5>Backend Development</h5>
            <p>Proficient in Laravel, Node.js, Express, and API Development.</p>
          </div>
          <div class="col-md-4">
            <i class="fas fa-database fa-3x mb-3"></i>
            <h5>Database Management</h5>
            <p>Experience with MySQL, PostgreSQL, MongoDB, and SQLite.</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Recent Projects Section -->
    <div class="projects-section py-5">
      <div class="container">
        <h2 class="mb-4 text-center">Recent Projects</h2>
        <div class="row">
          <div class="col-md-4 mb-4" v-for="project in recentProjects" :key="project.id">
            <div class="card h-100">
              <img :src="project.image" class="card-img-top" alt="Project Image">
              <div class="card-body">
                <h5 class="card-title">{{ project.title }}</h5>
                <p class="card-text">{{ project.description }}</p>
              </div>
              <div class="card-footer text-center">
                <a :href="project.link" target="_blank" class="btn btn-outline-primary">View Project</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Blog Section -->
    <div class="blog-section py-5 bg-light">
      <div class="container">
        <h2 class="mb-4 text-center">Latest Blog Posts</h2>
        <div class="row">
          <div class="col-md-4 mb-4" v-for="post in recentPosts" :key="post.id">
            <div class="card h-100">
              <img :src="post.image" class="card-img-top" alt="Blog Post Image">
              <div class="card-body">
                <h5 class="card-title">{{ post.title }}</h5>
                <p class="card-text">{{ post.description }}</p>
              </div>
              <div class="card-footer text-center">
                <router-link :to="{ name: 'Post', params: { id: post.id } }" class="btn btn-outline-primary">Read
                  More</router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Contact Section -->
    <div class="contact-section py-5 bg-light" id="contact">
      <div class="container text-center">
        <h2 class="mb-4">Contact Me</h2>
        <p>Interested in working together or have any questions? Feel free to reach out!</p>
        <a href="mailto:your-email@example.com" class="btn btn-primary">Send a Message</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      recentProjects: [
        {
          id: 1,
          title: 'E-commerce Website',
          description: 'An online platform to buy and sell products with secure payment gateways.',
          image: 'https://via.placeholder.com/300x200', // Replace with your actual project image
          link: '#',
        },
        {
          id: 2,
          title: 'POS System',
          description: 'A comprehensive point-of-sale system designed for small businesses.',
          image: 'https://via.placeholder.com/300x200', // Replace with your actual project image
          link: '#',
        },
        {
          id: 3,
          title: 'Portfolio Website',
          description: 'A personal portfolio to showcase my skills and recent projects.',
          image: 'https://via.placeholder.com/300x200', // Replace with your actual project image
          link: '#',
        },
      ],
      recentPosts: [
        {
          id: 1,
          title: 'Understanding Vue.js Lifecycle Hooks',
          description: 'A deep dive into the lifecycle hooks of Vue.js and how to use them effectively.',
          image: 'https://via.placeholder.com/300x200', // Replace with your actual blog post image
        },
        {
          id: 2,
          title: 'Building REST APIs with Laravel',
          description: 'Learn how to build RESTful APIs using Laravel for your web applications.',
          image: 'https://via.placeholder.com/300x200', // Replace with your actual blog post image
        },
        {
          id: 3,
          title: 'CSS Grid Layout: A Comprehensive Guide',
          description: 'A detailed guide on using CSS Grid Layout to create responsive web designs.',
          image: 'https://via.placeholder.com/300x200', // Replace with your actual blog post image
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
/* Optional: Custom styles specific to Home.vue */
.skills-section {
  background-color: #f8f9fa;
}

.skills-section h5 {
  margin-top: 1rem;
}

.projects-section img,
.blog-section img {
  object-fit: cover;
  height: 200px;
}

.card-footer {
  background: none;
  border-top: none;
}
</style>
