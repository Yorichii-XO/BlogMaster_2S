<template>
    <div class="p-6 bg-gray-100">
      <h2 class="text-2xl font-bold mb-4">Create Todo</h2>
      <form @submit.prevent="createTodo">
        <label class="block mb-4">
          Title:
          <input v-model="title" class="mt-1 p-2 border border-gray-300 rounded w-full" required />
        </label>
        <button type="submit" class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Create</button>
      </form>
    </div>
  </template>
  
  <script>
    import axios from 'axios';

  export default {
    name: 'TodoForm',
    data() {
      return {
        title: '',
      };
    },
    methods: {
      createTodo() {
        axios.post('http://localhost:3001/todos', {
          title: this.title,
          completed: false,
        })
          .then(() => {
            this.$emit('todoCreated');
            this.title = '';
          })
          .catch(error => {
            console.error("There was an error creating the todo:", error);
          });
      },
    },
  };
  </script>
  