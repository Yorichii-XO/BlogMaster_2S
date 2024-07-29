<template>
    <div class="p-6 bg-white border border-gray-200 rounded-lg shadow-md">
      <h2 class="text-xl font-bold mb-4">Edit Todo</h2>
      <form @submit.prevent="handleSubmit">
        <div class="mb-4">
          <label for="title" class="block text-lg font-medium mb-2">Title:</label>
          <input v-model="localTodo.title" type="text" id="title" class="p-2 border rounded w-full" required />
        </div>
  
        <div class="mb-4">
          <label for="category" class="block text-lg font-medium mb-2">Category:</label>
          <select v-model="localTodo.categoryId" id="category" class="p-2 border rounded w-full" required>
            <option value="">Select a Category</option>
            <option v-for="category in categories" :key="category.id" :value="category.id">
              {{ category.name }}
            </option>
          </select>
        </div>
  
        <div class="mb-4">
          <label for="dueDate" class="block text-lg font-medium mb-2">Due Date:</label>
          <input v-model="localTodo.dueDate" type="date" id="dueDate" class="p-2 border rounded w-full" />
        </div>
  
        <div class="mb-4">
          <label for="status" class="block text-lg font-medium mb-2">Status:</label>
          <select v-model="localTodo.status" id="status" class="p-2 border rounded w-full">
            <option value="">Select Status</option>
            <option value="Pending">Pending</option>
            <option value="In Progress">In Progress</option>
            <option value="Completed">Completed</option>
          </select>
        </div>
  
        <div>
          <button type="submit" class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Save</button>
          <router-link to="/todos" class="ml-2 px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600">Cancel</router-link>
        </div>
      </form>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        localTodo: { title: '', categoryId: '', dueDate: '', status: '' },
        categories: []
      };
    },
    created() {
      this.fetchCategories();
      this.fetchTodo();
    },
    methods: {
      fetchCategories() {
        axios.get('http://localhost:3002/categories')
          .then(response => {
            this.categories = response.data;
          })
          .catch(error => {
            console.error("There was an error fetching the categories:", error);
          });
      },
      fetchTodo() {
        const id = this.$route.params.id;
        axios.get(`http://localhost:3001/todos/${id}`)
          .then(response => {
            this.localTodo = response.data;
          })
          .catch(error => {
            console.error("There was an error fetching the todo:", error);
          });
      },
      handleSubmit() {
        const id = this.$route.params.id;
        axios.put(`http://localhost:3001/todos/${id}`, this.localTodo)
          .then(() => {
            this.$router.push('/todos');
          })
          .catch(error => {
            console.error("There was an error updating the todo:", error);
          });
      }
    }
  };
  </script>
  
  <style scoped>
  /* Additional scoped styles if needed */
  </style>
  