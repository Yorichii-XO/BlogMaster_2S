<template>
    <div class="bg-white min-h-screen flex justify-center items-center mt-10">
      <div class="grid gap-8 h-auto w-1/2">
        <div id="back-div" class="bg-gradient-to-r from-blue-500 to-purple-500 rounded-[26px] m-4">
          <div class="border-[20px] border-transparent rounded-[20px] dark:bg-gray-900 bg-white shadow-lg xl:p-10 2xl:p-10 lg:p-10 md:p-10 sm:p-2 m-2">
            <h1 class="pt-8 pb-6 font-bold dark:text-gray-400 text-5xl text-center cursor-default">Register</h1>
            <form @submit.prevent="register" class="space-y-4">
              <div>
                <label for="email" class="mb-2 dark:text-gray-400 text-lg">Email</label>
                <input
                  v-model="email"
                  id="email"
                  class="border p-3 dark:bg-indigo-700 dark:text-gray-300 dark:border-gray-700 shadow-md placeholder:text-base focus:scale-105 ease-in-out duration-300 border-gray-300 rounded-lg w-full"
                  type="email"
                  placeholder="Email"
                  required
                />
              </div>
              <div>
                <label for="password" class="mb-2 dark:text-gray-400 text-lg">Password</label>
                <input
                  v-model="password"
                  id="password"
                  class="border p-3 shadow-md dark:bg-indigo-700 dark:text-gray-300 dark:border-gray-700 placeholder:text-base focus:scale-105 ease-in-out duration-300 border-gray-300 rounded-lg w-full"
                  type="password"
                  placeholder="Password"
                  required
                />
              </div>
              <div>
                <label for="confirmPassword" class="mb-2 dark:text-gray-400 text-lg">Confirm Password</label>
                <input
                  v-model="confirmPassword"
                  id="confirmPassword"
                  class="border p-3 shadow-md dark:bg-indigo-700 dark:text-gray-300 dark:border-gray-700 placeholder:text-base focus:scale-105 ease-in-out duration-300 border-gray-300 rounded-lg w-full"
                  type="password"
                  placeholder="Confirm Password"
                  required
                />
              </div>
              <button
                class="bg-gradient-to-r dark:text-gray-300 from-blue-500 to-purple-500 shadow-lg mt-6 p-2 text-white rounded-lg w-full hover:scale-105 hover:from-purple-500 hover:to-blue-500 transition duration-300 ease-in-out"
                type="submit"
              >
                REGISTER
              </button>
            </form>
            <div class="flex flex-col mt-4 items-center justify-center text-sm">
              <h3 class="dark:text-gray-300">
                Already have an account?
                <a class="group text-blue-400 transition-all duration-100 ease-in-out" href="/login">
                  <span class="bg-left-bottom bg-gradient-to-r from-blue-400 to-blue-400 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                    Log In
                  </span>
                </a>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    name: 'register-app',
    data() {
      return {
        email: '',
        password: '',
        confirmPassword: '',
        error: ''
      };
    },
    methods: {
      async register() {
        if (this.password !== this.confirmPassword) {
          this.error = 'Passwords do not match';
          return;
        }
  
        try {
          await axios.post('http://localhost:3004/users', {
            email: this.email,
            password: this.password
          });
  
          this.$router.push('/login');
        } catch (err) {
          this.error = 'An error occurred during registration';
        }
      }
    }
  };
  </script>
  
  <style scoped>
  /* Add your scoped styles here */
  </style>
  