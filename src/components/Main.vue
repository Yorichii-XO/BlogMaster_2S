<template>
    <div>
        <div class="relative">
          <!-- Gradient Overlay -->
          
                   <div class="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-50"></div>

          
          <!-- Title -->
          <h2 class="absolute  left-0 w-full text-white text-3xl font-bold text-center pt-4 pb-2 bg-gradient-to-b from-transparent to-black opacity-75">
            Posts List
          </h2>
        </div><br/><br/><br/><br/><br/>
      <div class="bg-white ">
   
        <div class="grid gap-8 sm:grid-cols-3 sm:gap-12 lg:grid-cols-3 xl:grid-cols-3 xl:gap-16 ml-9 top-20 ">
            <div v-for="post in posts" :key="post.id" class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 w-80 h-auto">
          <a :href="'/post/' + post.id">
            <img :src="post.image" alt="Post Image" class="rounded-t-lg" />
          </a>
          <div class="p-5">
            <a :href="'/post/' + post.id">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{{ post.title }}</h5>
            </a>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{{ post.body }}</p>
           
           
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
        posts: [],
        isAuthenticated: false
      };
    },
 
    mounted() {
      this.checkAuthentication();
      this.fetchPosts();
    },
    methods: {
      checkAuthentication() {
        // Check if the user is authenticated
        const token = localStorage.getItem('token');
        this.isAuthenticated = !!token; // Update isAuthenticated based on token presence
      },
      async fetchPosts() {
        if (this.isAuthenticated) {
          try {
            const response = await axios.get('http://localhost:3000/posts');
            this.posts = response.data;
          } catch (error) {
            console.error('Error fetching posts:', error);
          }
        }
      },
      async deletePost(postId) {
        if (this.isAuthenticated) {
          try {
            await axios.delete(`http://localhost:3000/posts/${postId}`);
            this.posts = this.posts.filter(post => post.id !== postId);
          } catch (error) {
            console.error('Error deleting post:', error);
          }
        }
      }
    }
  };
  </script>
  