<template>
<<<<<<< HEAD
  <nav class="fixed bg-white shadow shadow-gray-300 w-full px-8 md:px-auto space-x-8 text-dark z-40">
=======
  <nav class="bg-white shadow shadow-gray-300 w-full px-8 md:px-auto space-x-8 text-dark">
>>>>>>> 4adb40ee0c3c63acc307694f79b6d14059e0ed14
    <div class="md:h-16 h-28 mx-auto md:px-4 container flex items-center justify-between flex-wrap md:flex-nowrap">
      <!-- Logo -->
      <div class="text-indigo-500 md:order-1">
        <!-- Heroicon - Chip Outline -->
        <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
        </svg>
      </div>
      <div class="text-gray-500 order-3 w-full md:w-auto md:order-2">
        <ul class="flex font-semibold justify-between space-x-4">
<<<<<<< HEAD

          <li v-if="isAuthenticated">
            <router-link to="/" class="text-gray-500 hover:text-indigo-500">Home</router-link>
          </li>
          <li v-if="isAuthenticated">
            <router-link to="/profile" class="text-gray-500 hover:text-indigo-500">Profile</router-link>
          </li>
          <li v-if="isAuthenticated">
            <router-link to="/posts" class="text-gray-500 hover:text-indigo-500">Posts</router-link>
          </li>
          <li v-if="isAuthenticated">
            <router-link to="/users" class="text-gray-500 hover:text-indigo-500">Users</router-link>
          </li>
          <li v-if="isAuthenticated">
=======
          <!-- Active Link = text-indigo-500
               Inactive Link = hover:text-indigo-500 -->
          <li>
            <router-link to="/" class="text-gray-500 hover:text-indigo-500">Home</router-link>
          </li>
          <li>
            <router-link to="/profile" class="text-gray-500 hover:text-indigo-500">Profile</router-link>
          </li>
          <li>
            <router-link to="/posts" class="text-gray-500 hover:text-indigo-500">Posts</router-link>
          </li>
          <li>
            <router-link to="/users" class="text-gray-500 hover:text-indigo-500">Users</router-link>
          </li>
          <li>
>>>>>>> 4adb40ee0c3c63acc307694f79b6d14059e0ed14
            <router-link to="/todos" class="text-gray-500 hover:text-indigo-500">Todos</router-link>
          </li>
        </ul>
      </div>
<<<<<<< HEAD
      <div class="sticky flex gap-2 order-2 md:order-3">
        <!-- Conditionally render login or logout based on authentication status -->
        <router-link v-if="!isAuthenticated" to="/login"
          class="px-4 py-2 bg-indigo-500 hover:bg-indigo-600 text-gray-50 rounded-xl flex items-center gap-2">
          <!-- Heroicons - Login Solid -->
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd"
              d="M3 3a1 1 0 011 1v12a1 1 0 11-2 0V4a1 1 0 011-1zm7.707 3.293a1 1 0 010 1.414L9.414 9H17a1 1 0 110 2H9.414l1.293 1.293a1 1 0 01-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0z"
              clip-rule="evenodd" />
          </svg>
          Login
        </router-link>
        <router-link v-if="!isAuthenticated" to="/register"
          class="px-4 py-2 bg-indigo-500 hover:bg-indigo-600 text-gray-50 rounded-xl flex items-center gap-2">
          <!-- Heroicons - Register Solid -->
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd"
              d="M3 3a1 1 0 011 1v12a1 1 0 11-2 0V4a1 1 0 011-1zm7.707 3.293a1 1 0 010 1.414L9.414 9H17a1 1 0 110 2H9.414l1.293 1.293a1 1 0 01-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0z"
              clip-rule="evenodd" />
          </svg>
          Register
        </router-link>
        <button v-if="isAuthenticated" @click="logout"
          class="px-4 py-2 text-white hover:bg-indigo-100 bg-indigo-500 rounded-xl flex items-center gap-2">
          <!-- Heroicons - Logout Solid -->
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd"
              d="M3 3a1 1 0 011 1v12a1 1 0 11-2 0V4a1 1 0 011-1zm7.707 3.293a1 1 0 010 1.414L9.414 9H17a1 1 0 110 2H9.414l1.293 1.293a1 1 0 01-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0z"
              clip-rule="evenodd" />
          </svg>
          Logout
        </button>
      </div>
    </div>
  </nav>
  <hr class="bg-gray-200" />
=======
      <div class="order-2 md:order-3">
        <router-link to="/login" class="px-4 py-2 bg-indigo-500 hover:bg-indigo-600 text-gray-50 rounded-xl flex items-center gap-2">
          <!-- Heroicons - Login Solid -->
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M3 3a1 1 0 011 1v12a1 1 0 11-2 0V4a1 1 0 011-1zm7.707 3.293a1 1 0 010 1.414L9.414 9H17a1 1 0 110 2H9.414l1.293 1.293a1 1 0 01-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0z" clip-rule="evenodd" />
          </svg>
          Login
        </router-link>
      </div>
    </div>
  </nav>
  <hr class="bg-gray-200"/>
>>>>>>> 4adb40ee0c3c63acc307694f79b6d14059e0ed14
</template>

<script>
export default {
  name: 'NavbarApp',
<<<<<<< HEAD
  data() {
    return {
      isAuthenticated: false
    };
  },
  mounted() {
    this.checkAuthStatus();
  },
  methods: {
    checkAuthStatus() {

      const token = localStorage.getItem('token');
      this.isAuthenticated = !!token;
    },
    logout() {

      localStorage.removeItem('token');
      this.isAuthenticated = false;
      this.$router.push('/');
    }
  }
};
</script>
=======
};
</script>

<style scoped>
/* Additional scoped styles if needed */
</style>
>>>>>>> 4adb40ee0c3c63acc307694f79b6d14059e0ed14
