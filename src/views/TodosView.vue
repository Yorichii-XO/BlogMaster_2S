<template>
    <div>
      <h1>Todos</h1>
      <TodoComponent />
    </div>
  </template>
  
  <script>
  import TodoComponent from '../components/TodoComponent.vue';
  
  export default {
    name: 'TodosView',
    components: {
      TodoComponent
    }
  };
  </script>
  