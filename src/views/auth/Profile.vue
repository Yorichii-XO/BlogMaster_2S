<template>
  <div class="bg-white min-h-screen flex justify-center items-center">
    <div class="grid gap-8 h-auto w-1/2">
      <div id="back-div" class="bg-gradient-to-r from-blue-500 to-purple-500 rounded-[26px] m-4">
        <div class="border-[20px] border-transparent rounded-[20px] dark:bg-gray-900 bg-white shadow-lg xl:p-10 2xl:p-10 lg:p-10 md:p-10 sm:p-2 m-2">
          <h1 class="pt-8 pb-6 font-bold dark:text-gray-400 text-5xl text-center cursor-default">Profile</h1>
          <button
            @click="logout"
            class="bg-gradient-to-r dark:text-gray-300 from-blue-500 to-purple-500 shadow-lg mt-6 p-2 text-white rounded-lg w-full hover:scale-105 hover:from-purple-500 hover:to-blue-500 transition duration-300 ease-in-out"
          >
            LOG OUT
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'profile-app',
  methods: {
    logout() {
      localStorage.removeItem('token');
      this.$router.push('/login');
    }
  }
};
</script>

<style scoped>
/* Add your scoped styles here */
</style>
