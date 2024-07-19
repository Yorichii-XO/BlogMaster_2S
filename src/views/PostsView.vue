<template>
  <div>
    <div class="bg-white py-6 sm:py-8 lg:py-12">
      <div class="mx-auto max-w-screen-xl px-4 md:px-8">
        <!-- text - start -->
        <div class="mb-10 md:mb-16">
          <h2 class="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">Blog</h2>
          <p class="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">
            This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text but is random or otherwise generated.
          </p>
        </div>
        <!-- text - end -->

        <div class="flex justify-end mb-4">
          <router-link to="/create">
            <button class="px-4 py-2 bg-green-500 text-white rounded">Create New Post</button>
          </router-link>
        </div>

        <div class="grid gap-8 sm:grid-cols-2 sm:gap-12 lg:grid-cols-2 xl:grid-cols-2 xl:gap-16">
          <div v-for="post in posts" :key="post.id" class="flex flex-col items-center gap-4 md:flex-row lg:gap-6">
            <div class="group relative block h-56 w-full shrink-0 self-start overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-24 md:w-24 lg:h-40 lg:w-40">
              <img
                :src="post.image"
                loading="lazy"
                alt="Post Image"
                class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
              />
            </div>

            <div class="flex flex-col gap-2">
              <span class="text-sm text-gray-400">July 19, 2021</span>

              <h2 class="text-xl font-bold text-gray-800">
                <router-link :to="{ name: 'EditPost', params: { id: post.id } }">
                  {{ post.title }}
                </router-link>
              </h2>

              <p class="text-gray-500">{{ post.body }}</p>

              <div class="flex gap-2">
                <router-link :to="{ name: 'EditPost', params: { id: post.id } }">
                  <button class="px-4 py-2 bg-blue-500 text-white rounded">Edit</button>
                </router-link>
                <button @click="deletePost(post.id)" class="px-4 py-2 bg-red-500 text-white rounded">Delete</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'PostComponent',
  data() {
    return {
      posts: []
    };
  },
  mounted() {
    this.fetchPosts();
  },
  methods: {
    async fetchPosts() {
      try {
        const response = await axios.get('http://localhost:3000/posts');
        this.posts = response.data;
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    },
    async deletePost(postId) {
      try {
        await axios.delete(`http://localhost:3000/posts/${postId}`);
        this.posts = this.posts.filter(post => post.id !== postId);
      } catch (error) {
        console.error('Error deleting post:', error);
      }
    }
  }
};
</script>
