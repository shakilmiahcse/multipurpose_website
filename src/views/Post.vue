<!-- src/views/Post.vue -->
<template>
    <div class="post py-5">
        <div class="container">
            <h1>{{ post.title }}</h1>
            <img :src="post.image" class="img-fluid" alt="Post image" />
            <p class="mt-4">{{ post.content }}</p>
            <router-link to="/blog" class="btn btn-secondary">Back to Blog</router-link>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue';
import { useRoute } from 'vue-router';

export default {
    name: 'Post',
    setup() {
        const route = useRoute();
        const postId = route.params.id;

        // Mock data, replace with actual data fetching logic
        const posts = [
            {
                id: 1,
                title: 'Understanding Vue.js',
                content: 'Vue.js is a progressive framework for building user interfaces. It is designed from the ground up to be incrementally adoptable.',
                image: 'https://via.placeholder.com/600x400',
            },
            {
                id: 2,
                title: 'JavaScript Best Practices',
                content: 'Best practices in JavaScript help ensure that your code is clean, maintainable, and performant. Follow these guidelines to improve your code quality.',
                image: 'https://via.placeholder.com/600x400',
            },
            {
                id: 3,
                title: 'Web Development Trends 2024',
                content: 'Stay ahead of the curve by keeping an eye on the latest trends in web development, such as the rise of serverless architectures and the use of AI in web applications.',
                image: 'https://via.placeholder.com/600x400',
            },
        ];

        const post = ref(posts.find(p => p.id == postId) || {});

        return { post };
    },
};
</script>

<style scoped>
.post {
    padding: 20px;
}

h1 {
    color: #2c3e50;
}

.img-fluid {
    max-width: 100%;
    height: auto;
}
</style>
