<template>
    <div class="mt-8 mx-auto max-w-screen-md px-4">
      <h2 class="mb-4 text-center text-2xl font-bold text-gray-800">Create a New Post</h2>
      <form @submit.prevent="createPost">
        <div class="mb-4">
          <label for="title" class="block text-gray-700">Title:</label>
          <input v-model="newPost.title" id="title" class="w-full px-3 py-2 border rounded" type="text" required />
        </div>
        <div class="mb-4">
          <label for="body" class="block text-gray-700">Body:</label>
          <textarea v-model="newPost.body" id="body" class="w-full px-3 py-2 border rounded" required></textarea>
        </div>
        <div class="mb-4">
          <label for="image" class="block text-gray-700">Image URL:</label>
          <input v-model="newPost.image" id="image" class="w-full px-3 py-2 border rounded" type="url" required />
        </div>
        <button type="submit" class="px-4 py-2 bg-blue-500 text-white rounded">Create Post</button>
      </form>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    name: 'CreatePostComponent',
    data() {
      return {
        newPost: {
          title: '',
          body: '',
          image: ''
        }
      };
    },
    methods: {
      async createPost() {
        try {
          await axios.post('http://localhost:3000/posts', this.newPost);
          this.$router.push('/');
        } catch (error) {
          console.error('Error creating post:', error);
        }
      }
    }
  };
  </script>
  