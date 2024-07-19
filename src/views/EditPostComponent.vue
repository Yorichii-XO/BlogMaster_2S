<template>
    <div class="mt-8 mx-auto max-w-screen-md px-4">
      <h2 class="mb-4 text-center text-2xl font-bold text-gray-800">Edit Post</h2>
      <form @submit.prevent="updatePost">
        <div class="mb-4">
          <label for="title" class="block text-gray-700">Title:</label>
          <input v-model="post.title" id="title" class="w-full px-3 py-2 border rounded" type="text" required />
        </div>
        <div class="mb-4">
          <label for="body" class="block text-gray-700">Body:</label>
          <textarea v-model="post.body" id="body" class="w-full px-3 py-2 border rounded" required></textarea>
        </div>
        <div class="mb-4">
          <label for="image" class="block text-gray-700">Image URL:</label>
          <input v-model="post.image" id="image" class="w-full px-3 py-2 border rounded" type="url" required />
        </div>
        <button type="submit" class="px-4 py-2 bg-blue-500 text-white rounded">Update Post</button>
      </form>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    name: 'EditPostComponent',
    data() {
      return {
        post: {
          title: '',
          body: '',
          image: ''
        }
      };
    },
    created() {
      this.fetchPost();
    },
    methods: {
      async fetchPost() {
        try {
          const response = await axios.get(`http://localhost:3000/posts/${this.$route.params.id}`);
          this.post = response.data;
        } catch (error) {
          console.error('Error fetching post:', error);
        }
      },
      async updatePost() {
        try {
          await axios.put(`http://localhost:3000/posts/${this.$route.params.id}`, this.post);
          this.$router.push('/');
        } catch (error) {
          console.error('Error updating post:', error);
        }
      }
    }
  };
  </script>
  