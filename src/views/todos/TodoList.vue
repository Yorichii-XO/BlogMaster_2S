<template>
  <div class=" bg-white min-h-screen mt-20" >

    <div class="relative">
      <!-- Gradient Overlay -->
      <div class="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-50"></div>

      <!-- Image -->
      <img
        src="https://st2.depositphotos.com/7865540/10656/i/450/depositphotos_106568572-stock-photo-laptop-with-learning-text-on.jpg"
        alt="Todo List" class="w-full h-48 object-cover" />

      <!-- Title -->
      <h2
        class="absolute top-0 left-0 w-full text-white text-3xl font-bold text-center pt-4 pb-2 bg-gradient-to-b from-transparent to-black opacity-75">
        Todo List
      </h2>
    </div>
    <div class="flex justify-end mb-8 mt-6 mr-4">
      <router-link to="/add-todo">
        <button class="px-4 py-2 bg-green-500 text-white rounded">+ Add Todo</button>

      </router-link>
    </div>
    <div class="flex flex-wrap gap-4 mt-8">
      <div v-for="todo in todos" :key="todo.id" class="p-4 bg-white border border-gray-200 rounded-lg shadow-md">

        <span class="sticky flex items-center">
          <p>
            <svg xmlns="http://www.w3.org/2000/svg" width="42px" height="30px" viewBox="0 0 512 512">
              <path
                d="M448 160l-128 0 0-32 128 0 0 32zM48 64C21.5 64 0 85.5 0 112l0 64c0 26.5 21.5 48 48 48l416 0c26.5 0 48-21.5 48-48l0-64c0-26.5-21.5-48-48-48L48 64zM448 352l0 32-256 0 0-32 256 0zM48 288c-26.5 0-48 21.5-48 48l0 64c0 26.5 21.5 48 48 48l416 0c26.5 0 48-21.5 48-48l0-64c0-26.5-21.5-48-48-48L48 288z" />
            </svg>
          </p>

          <h3 class="text-xl font-semibold mb-2 ml-2">{{ todo.title }}</h3>
        </span>

        <p class="text-gray-700 mb-2 ml-12">Due Date: {{ todo.dueDate }}</p>


        <!-- Status Display as Clickable -->
        <div class="mb-2 ">
          <p class="text-gray-700 mb-2 ml-12">Status:</p>
          <div v-for="statusOption in statusOptions" :key="statusOption" @click="updateStatus(todo, statusOption)"
            :class="['status-button', { 'bg-black': todo.status === statusOption }]">
            {{ statusOption }}
          </div>
        </div>

        <div>
          <!-- Edit Button with Icon -->
          <router-link :to="{ name: 'EditTodo', params: { id: todo.id } }"
            class="icon-button text-green-500 hover:bg-green-200">
            <svg xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" fill="currentColor"
              viewBox="0 0 512 512">
              <path
                d="M441 58.9L453.1 71c9.4 9.4 9.4 24.6 0 33.9L424 134.1 377.9 88 407 58.9c9.4-9.4 24.6-9.4 33.9 0zM209.8 256.2L344 121.9 390.1 168 255.8 302.2c-2.9 2.9-6.5 5-10.4 6.1l-58.5 16.7 16.7-58.5c1.1-3.9 3.2-7.5 6.1-10.4zM373.1 25L175.8 222.2c-8.7 8.7-15 19.4-18.3 31.1l-28.6 100c-2.4 8.4-.1 17.4 6.1 23.6s15.2 8.5 23.6 6.1l100-28.6c11.8-3.4 22.5-9.7 31.1-18.3L487 138.9c28.1-28.1 28.1-73.7 0-101.8L474.9 25C446.8-3.1 401.2-3.1 373.1 25zM88 64C39.4 64 0 103.4 0 152L0 424c0 48.6 39.4 88 88 88l272 0c48.6 0 88-39.4 88-88l0-112c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 112c0 22.1-17.9 40-40 40L88 464c-22.1 0-40-17.9-40-40l0-272c0-22.1 17.9-40 40-40l112 0c13.3 0 24-10.7 24-24s-10.7-24-24-24L88 64z" />
            </svg>
          </router-link>
          <!-- Delete Button with Icon -->
          <button @click="deleteTodo(todo.id)" class="icon-button text-red-500 hover:bg-red-200">
            <svg xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" fill="currentColor"
              viewBox="0 0 448 512">
              <path
                d="M170.5 51.6L151.5 80l145 0-19-28.4c-1.5-2.2-4-3.6-6.7-3.6l-93.7 0c-2.7 0-5.2 1.3-6.7 3.6zm147-26.6L354.2 80 368 80l48 0 8 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-8 0 0 304c0 44.2-35.8 80-80 80l-224 0c-44.2 0-80-35.8-80-80l0-304-8 0c-13.3 0-24-10.7-24-24S10.7 80 24 80l8 0 48 0 13.8 0 36.7-55.1C140.9 9.4 158.4 0 177.1 0l93.7 0c18.7 0 36.2 9.4 46.6 24.9zM80 128l0 304c0 17.7 14.3 32 32 32l224 0c17.7 0 32-14.3 32-32l0-304L80 128zm80 64l0 208c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-208c0-8.8 7.2-16 16-16s16 7.2 16 16zm80 0l0 208c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-208c0-8.8 7.2-16 16-16s16 7.2 16 16zm80 0l0 208c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-208c0-8.8 7.2-16 16-16s16 7.2 16 16z" />
            </svg>
          </button>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import axios from 'axios';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import FontAwesome CSS

export default {
  name: 'TodoList',
  data() {
    return {
      todos: [],
      statusOptions: ['To Do', 'In Progress', 'Done'] // Status options
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
    updateStatus(todo, status) {
      todo.status = status;
      axios.put(`http://localhost:3001/todos/${todo.id}`, todo)
        .then(() => {
          console.log("Todo status updated");
        })
        .catch(error => {
          console.error("There was an error updating the todo status:", error);
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
    }
  }
};
</script>

<style scoped>
.status-button {
  display: inline-block;
  font-size: 12px;
  width: 100px;
  height: 35px;
  padding: 0.5rem 1rem;
  font-weight: 500;
  margin: 0.2rem;
  background-color: #cfcfcf;
  /* Light background color by default */
  color: #000;
  /* Text color */
  border-radius: 0.375rem;
  /* Rounded corners */
  cursor: pointer;
  text-align: center;
  transition: background-color 0.2s ease, transform 0.2s ease;
}

.status-button:hover {
  background-color: #e5e7eb;
  /* Darker background on hover */
  transform: scale(1.05);
  /* Slightly scale up on hover */
}

.bg-black {

  background-color: black;
  color: white;
  /* Text color for black background */
}

/* Icon Button Styles */
.icon-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  border-radius: 0.375rem;
  font-size: 1.25rem;
  cursor: pointer;
}

.text-green-500 {
  color: #10b981;
}

.text-red-500 {
  color: #ef4444;
}

.sticky p {
  background-color: rgb(165, 145, 208);
  width: 42px;
  height: 33px;
  border-radius: 10px;
}

.sticky svg {
  fill: rgb(255, 255, 255);
}
</style>
