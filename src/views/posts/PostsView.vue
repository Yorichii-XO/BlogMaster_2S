<template>
  <div class="mt-14">
    <div v-if="isAuthenticated" class="bg-white min-h-screen top-20">
      <!-- text - start -->
      <div class="relative">
        <!-- Gradient Overlay -->
        <div class="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-50"></div>
        
        <!-- Image -->
        <img
          src="https://www.shutterstock.com/image-photo/bloggingblog-concepts-ideas-white-worktable-260nw-1029506242.jpg"
          alt="Posts List"
          class="w-full h-48 object-cover"
        />
        
        <!-- Title -->
        <h2 class="absolute top-0 left-0 w-full text-white text-3xl font-bold text-center pt-4 pb-2 bg-gradient-to-b from-transparent to-black opacity-75">
          Posts List
        </h2>
      </div>
      <!-- text - end -->

      <div class="flex justify-end mb-8 mt-6 mr-6">
        <router-link to="/add-post">
          <button class="px-4 py-2 bg-green-500 text-white rounded"> + Create New Post</button>
        </router-link>
      </div>

      <div class="grid gap-8 sm:grid-cols-2 sm:gap-12 lg:grid-cols-2 xl:grid-cols-2 xl:gap-16 ml-9">
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
                <button class="px-4 py-2  text-green-500 rounded">
                  <!-- SVG icon -->
                </button>
              </router-link>
              <button @click="deletePost(post.id)" class=" py-2 text-red-600 rounded">
                <!-- SVG icon -->
              </button>
            </div>

            <!-- Pass the post ID as a prop to AddComment and CommentsALL components -->
            <comment-add :post-id="post.id" />
            <comments-all :post-id="post.id" />
          </div>
        </div>
      </div>
    </div>
    <div v-else class="text-center mt-10">
      <p>Please log in to view posts.</p>
      <router-link to="/login">
        <button class="px-4 py-2 bg-blue-500 text-white rounded">Login</button>
      </router-link>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import CommentsADD from '../comments/CommentsADD.vue';
import CommentView from '../comments/CommentView.vue';

export default {
  name: 'PostComponent',
  data() {
    return {
      posts: [],
      isAuthenticated: false
    };
  },
  components: {
    "comment-add": CommentsADD,
    "comments-all": CommentView
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
