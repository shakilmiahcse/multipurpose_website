<!-- src/views/Contact.vue -->
<template>
  <div class="contact py-5">
    <div class="container">
      <h1 class="mb-4">Contact Us</h1>
      <p class="lead">We'd love to hear from you! Please fill out the form below or contact us via email or phone.</p>

      <!-- Contact Information -->
      <div class="contact-info mb-4">
        <h2>Contact Information</h2>
        <p><strong>Email:</strong> <a href="mailto:youremail@example.com">youremail@example.com</a></p>
        <p><strong>Phone:</strong> <a href="tel:+1234567890">+1 (234) 567-890</a></p>
      </div>

      <!-- Contact Form -->
      <form @submit.prevent="handleSubmit" novalidate>
        <div class="form-group">
          <label for="name">Name:</label>
          <input type="text" id="name" v-model="name" required />
        </div>
        <div class="form-group">
          <label for="email">Email:</label>
          <input type="email" id="email" v-model="email" required />
        </div>
        <div class="form-group">
          <label for="message">Message:</label>
          <textarea id="message" v-model="message" required></textarea>
        </div>
        <button type="submit">Send</button>
      </form>

      <div v-if="submitted" class="thank-you-message mt-4">
        <h2>Thank you, {{ name }}!</h2>
        <p>Your message has been received. We will get back to you soon.</p>
      </div>

      <!-- Google Maps Embed -->
      <div class="map mt-5">
        <h2>Our Location</h2>
        <iframe width="100%" height="400"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345090256!2d144.9537353153186!3d-37.81627997975138!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11f72f%3A0x5045675218ceed2!2sYour%20Company!5e0!3m2!1sen!2sus!4v1615298273004!5m2!1sen!2sus"
          frameborder="0" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
      </div>
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
      // Simulate form submission (replace with actual API call)
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
  max-width: 800px;
  margin: 0 auto;
}

h1 {
  color: #2c3e50;
}

.lead {
  font-size: 1.2rem;
  margin-bottom: 20px;
}

.contact-info {
  margin-bottom: 20px;
}

.contact-info a {
  color: #42b983;
  text-decoration: none;
}

.contact-info a:hover {
  text-decoration: underline;
}

.form-group {
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
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  transition: border-color 0.3s;
}

input:focus,
textarea:focus {
  border-color: #42b983;
  outline: none;
}

button {
  padding: 10px 20px;
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
}

button:hover {
  background-color: #369870;
}

.thank-you-message {
  margin-top: 20px;
  padding: 15px;
  background-color: #f0f8f0;
  border: 1px solid #d0e0d0;
  border-radius: 4px;
}

.map {
  margin-top: 40px;
}
</style>
