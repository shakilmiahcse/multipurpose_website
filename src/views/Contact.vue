<!-- src/views/Contact.vue -->
<template>
    <div class="contact">
      <h1>Contact Us</h1>
      <form @submit.prevent="handleSubmit">
        <div>
          <label for="name">Name:</label>
          <input type="text" id="name" v-model="name" required />
        </div>
        <div>
          <label for="email">Email:</label>
          <input type="email" id="email" v-model="email" required />
        </div>
        <div>
          <label for="message">Message:</label>
          <textarea id="message" v-model="message" required></textarea>
        </div>
        <button type="submit">Send</button>
      </form>
      <div v-if="submitted">
        <h2>Thank you, {{ name }}!</h2>
        <p>Your message has been received.</p>
      </div>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  
  export default {
    name: 'Contact',
    setup() {
      const name = ref('');
      const email = ref('');
      const message = ref('');
      const submitted = ref(false);
  
      const handleSubmit = () => {
        // For learning purposes, we'll just simulate a form submission
        console.log({ name: name.value, email: email.value, message: message.value });
        submitted.value = true;
        // Reset form fields
        name.value = '';
        email.value = '';
        message.value = '';
      };
  
      return { name, email, message, submitted, handleSubmit };
    },
  };
  </script>
  
  <style scoped>
  .contact {
    padding: 20px;
    max-width: 600px;
    margin: 0 auto;
  }
  
  form div {
    margin-bottom: 15px;
  }
  
  label {
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
  }
  
  input,
  textarea {
    width: 100%;
    padding: 8px;
    box-sizing: border-box;
  }
  
  button {
    padding: 10px 20px;
    background-color: #42b983;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #369870;
  }
  </style>
  