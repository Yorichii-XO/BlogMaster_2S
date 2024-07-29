<template>
  <div class="max-w-md mx-auto p-6 bg-white border border-gray-200 rounded-lg shadow-md mt-20">
    <h2 class="text-xl font-bold mb-4">Add Todo</h2>
    <form @submit.prevent="handleSubmit">
      <!-- Title -->
      <div class="relative z-0 w-full mb-5 group">
        <input v-model="localTodo.title" type="text" id="title" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
        <label for="title" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Title</label>
      </div>

    

      <!-- Due Date -->
      <div class="relative z-0 w-full mb-5 group">
        <input v-model="localTodo.dueDate" type="date" id="dueDate" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
        <label for="dueDate" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Due Date</label>
      </div>

      <!-- Status -->
      <div class="relative z-0 w-full mb-5 group">
        <select v-model="localTodo.status" id="status" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer">
          <option value="">Select Status</option>
          <option value="To Do">To Do</option>
          <option value="In Progress">In Progress</option>
          <option value="Done">Done</option>
        </select>
        <label for="status" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Status</label>
      </div>

      <!-- Buttons -->
      <div class="flex gap-4">
        <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Save</button>
        <router-link to="/todos" class="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600">Cancel</router-link>
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
    handleSubmit() {
      axios.post('http://localhost:3001/todos', this.localTodo)
        .then(() => {
          this.$router.push('/todos');
        })
        .catch(error => {
          console.error("There was an error creating the todo:", error);
        });
    }
  }
};
</script>

<style scoped>
/* Additional scoped styles if needed */
</style>
