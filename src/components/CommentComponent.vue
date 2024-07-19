<template>
    <div>
      <h2>Comments</h2>
      <ul>
        <li v-for="comment in comments" :key="comment.id">{{ comment.body }}</li>
      </ul>
    </div>
  </template>
  
  <script>
  import { mapState } from 'vuex';
  
  export default {
    name: 'CommentComponent',
    computed: {
      ...mapState(['comments'])
    },
    mounted() {
      this.$store.dispatch('fetchComments');
    }
  };
  </script>
  