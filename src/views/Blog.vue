<!-- src/views/Blog.vue -->
<template>
    <div class="blog py-5">
        <div class="container">
            <h1 class="mb-4">Our Blog</h1>
            <p class="lead">Stay updated with the latest posts.</p>

            <!-- Blog Posts -->
            <div class="row">
                <div class="col-md-4" v-for="post in blogPosts" :key="post.id">
                    <div class="card mb-4">
                        <img :src="post.image" class="card-img-top" alt="Post image" />
                        <div class="card-body">
                            <h5 class="card-title">{{ post.title }}</h5>
                            <p class="card-text">{{ post.excerpt }}</p>
                            <router-link class="btn btn-primary" :to="{ name: 'Post', params: { id: post.id } }">Read
                                More</router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue';

export default {
    name: 'Blog',
    setup() {
        const blogPosts = ref([
            {
                id: 1,
                title: 'Understanding Vue.js',
                excerpt: 'A deep dive into the core concepts of Vue.js and how it works.',
                image: 'https://via.placeholder.com/300x200', // Replace with your actual post image
            },
            {
                id: 2,
                title: 'JavaScript Best Practices',
                excerpt: 'Explore some of the best practices in JavaScript for cleaner code.',
                image: 'https://via.placeholder.com/300x200', // Replace with your actual post image
            },
            {
                id: 3,
                title: 'Web Development Trends 2024',
                excerpt: 'An overview of the latest trends in web development for 2024.',
                image: 'https://via.placeholder.com/300x200', // Replace with your actual post image
            },
        ]);

        return { blogPosts };
    },
};
</script>

<style scoped>
.blog {
    padding: 20px;
}

.card {
    border: none;
    transition: transform 0.2s;
}

.card:hover {
    transform: scale(1.05);
}

.card-img-top {
    height: 200px;
    object-fit: cover;
}
</style>
