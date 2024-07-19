<template>
    <div>
      <h2>Users</h2>
      <ul>
        <li v-for="user in users" :key="user.id">{{ user.name }}</li>
      </ul>
    </div>
  </template>
  
  <script>
  import { mapState } from 'vuex';
  
  export default {
    name: 'UserComponent',
    computed: {
      ...mapState(['users'])
    },
    mounted() {
      this.$store.dispatch('fetchUsers');
    }
  };
  </script>
  