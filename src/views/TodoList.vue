<template>
    <div class="p-6 bg-gray-100 min-h-screen">
      <h2 class="text-2xl font-bold mb-4">Todo List</h2>
      <ul class="list-disc pl-5">
        <li v-for="todo in todos" :key="todo.id" class="mb-2 flex justify-between items-center text-gray-700">
          {{ todo.title }}
          <div>
            <button @click="editTodo(todo)" class="px-2 py-1 bg-blue-500 text-white rounded mr-2 hover:bg-blue-600">Edit</button>
            <button @click="deleteTodo(todo.id)" class="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600">Delete</button>
          </div>
        </li>
      </ul>
      <button @click="showCreateForm = true" class="mt-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">Add Todo</button>
      <TodoForm v-if="showCreateForm" @todoCreated="fetchTodos" />
    </div>
  </template>
  
  <script>
  import TodoForm from './TodoForm.vue';
  import axios from 'axios';

  export default {
    name: 'TodoList',
    components: { TodoForm },
    data() {
      return {
        todos: [],
        showCreateForm: false,
      };
    },
    created() {
      this.fetchTodos();
    },
    methods: {
      fetchTodos() {
        axios.get('http://localhost:3001/todos')
          .then(response => {
            this.todos = response.data;
          })
          .catch(error => {
            console.error("There was an error fetching the todos:", error);
          });
      },
      deleteTodo(id) {
        axios.delete(`http://localhost:3001/todos/${id}`)
          .then(() => {
            this.fetchTodos();
          })
          .catch(error => {
            console.error("There was an error deleting the todo:", error);
          });
      },
      editTodo(todo) {
        // Handle the editing logic here
      },
    },
  };
  </script>
  