<template>
    <div class="w-full h-12">
      <!-- Right menu -->
      <div><search-app /></div>
  
      <!-- Trending topics section -->
      <div class="max-w-sm rounded-lg bg-black border border-gray-600 overflow-hidden shadow-lg m-4 mr-20">
        <div class="flex">
          <div class="flex-1 m-2">
            <h2 class="px-4 py-2 text-xl w-48 font-semibold text-white">Trends for you</h2>
          </div>
          <div class="flex-1 px-4 py-2 m-2">
            <a href="#" class="text-2xl rounded-full text-white hover:bg-blue-800 hover:text-blue-300 float-right">
              <svg class="m-2 h-6 w-6" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
                <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
              </svg>
            </a>
          </div>
        </div>
        <hr class="border-gray-600">
        
        <!-- Trending topics fetched from json-server -->
        <div v-for="trend in trends" :key="trend.id" class="flex border-b border-gray-600">
          <div class="flex-1">
            <p class="px-4 ml-2 mt-3 w-48 text-xs text-gray-400">{{ trend.id }}. {{ trend.category }}</p>
            <h2 class="px-4 ml-2 w-48 font-bold text-white">{{ trend.hashtag }}</h2>
            <p class="px-4 ml-2 mb-3 w-48 text-xs text-gray-400">{{ trend.tweets }} Tweets</p>
          </div>
          <div class="flex-1 px-4 py-2 m-2">
            <a href="#" class="text-2xl rounded-full text-gray-400 hover:bg-blue-800 hover:text-blue-300 float-right">
              <svg class="m-2 h-5 w-5" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M19 9l-7 7-7-7"></path>
              </svg>
            </a>
          </div>
        </div>
        
        <hr class="border-gray-600">
        
        <!-- Show more -->
        <div class="flex">
          <div class="flex-1 p-4">
            <h2 class="px-4 ml-2 w-48 font-bold text-blue-400">Show more</h2>
          </div>
        </div>
      </div>
  
      <!-- Third-people suggestion to follow section -->
      <div><follower-app /></div>
    </div>
  </template>
  
  <script>
  import ShowFollows from './ShowFollows.vue';
  import Search from './Search.vue';
  
  export default {
    name: 'mon-composant',
    components: {
      'follower-app': ShowFollows,
      'search-app': Search,
    },
    data() {
      return {
        trends: [] // Initialize an empty array to store trends
      };
    },
    mounted() {
      // Fetch data from json-server when the component is mounted
      fetch('http://localhost:3001/trends')
        .then(response => response.json())
        .then(data => {
          console.log('Fetched data:', data);
          // Check if data contains trends array
          if (Array.isArray(data)) {
            this.trends = data;
          } else {
            this.trends = data.trends;
          }
        })
        .catch(error => console.error('Error fetching trends:', error));
    }
  };
  </script>
  
  <style scoped>
  /* Add any styles you need here */
  </style>
  