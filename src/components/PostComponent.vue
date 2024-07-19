<template>
  <div>
    <h2>Posts</h2>
    <ul>
      <li v-for="post in posts" :key="post.id">{{ post.title }}</li>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'PostComponent',
  computed: {
    ...mapState(['posts'])
  },
  mounted() {
    this.$store.dispatch('fetchPosts');
  }
};
</script>
