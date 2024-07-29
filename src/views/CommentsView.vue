<template>
    <div>
      <h1>Comments</h1>
      <CommentComponent />
    </div>
  </template>
  
  <script>
  import CommentComponent from '../components/CommentComponent.vue';
  
  export default {
    name: 'CommentsView',
    components: {
      CommentComponent
    }
  };
  </script>
  