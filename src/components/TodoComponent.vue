<template>
    <div>
      <h2>Todos</h2>
      <ul>
        <li v-for="todo in todos" :key="todo.id">{{ todo.title }}</li>
      </ul>
    </div>
  </template>
  
  <script>
  import { mapState } from 'vuex';
  
  export default {
    name: 'TodoComponent',
    computed: {
      ...mapState(['todos'])
    },
    mounted() {
      this.$store.dispatch('fetchTodos');
    }
  };
  </script>
  