<template>
    <div class="p-6 bg-gray-100 min-h-screen">
      <h2 class="text-2xl font-bold mb-4">User List</h2>
      <ul class="list-disc pl-5">
        <li v-for="user in users" :key="user.id" class="mb-2 text-gray-700">
          {{ user.name }} ({{ user.email }})
        </li>
      </ul>
    </div>
  </template>
  
  <script>
    import axios from 'axios';

  export default {
    name: 'UserList',
    data() {
      return {
        users: [],
      };
    },
    created() {
      this.fetchUsers();
    },
    methods: {
      fetchUsers() {
        axios.get('http://localhost:3004/users')
          .then(response => {
            this.users = response.data;
          })
          .catch(error => {
            console.error("There was an error fetching the users:", error);
          });
      },
    },
  };
  </script>
  