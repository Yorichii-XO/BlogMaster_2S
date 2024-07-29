<template>
    <div>
      <h1>Users</h1>
      <UserComponent />
    </div>
  </template>
  
  <script>
  import UserComponent from '../components/UserComponent.vue';
  
  export default {
    name: 'UsersView',
    components: {
      UserComponent
    }
  };
  </script>
  