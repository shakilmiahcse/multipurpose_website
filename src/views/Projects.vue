<!-- src/views/Projects.vue -->
<template>
    <div class="projects">
      <h1>Our Projects</h1>
      <ul>
        <li v-for="project in projects" :key="project.id">
          {{ project.name }} - {{ project.description }}
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  
  export default {
    name: 'Projects',
    setup() {
      const projects = ref([
        { id: 1, name: 'Project Alpha', description: 'Description of Project Alpha' },
        { id: 2, name: 'Project Beta', description: 'Description of Project Beta' },
        { id: 3, name: 'Project Gamma', description: 'Description of Project Gamma' },
      ]);
  
      return { projects };
    },
  };
  </script>
  
  <style scoped>
  .projects {
    padding: 20px;
  }
  
  ul {
    list-style-type: none;
    padding: 0;
  }
  
  li {
    background: #f9f9f9;
    margin: 10px 0;
    padding: 10px;
    border-radius: 4px;
  }
  </style>
  