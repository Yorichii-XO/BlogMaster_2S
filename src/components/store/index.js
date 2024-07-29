import { createStore } from 'vuex';
import axios from 'axios';

export default createStore({
  state() {
    return {
      posts: []
    };
  },
  mutations: {
    setPosts(state, posts) {
      state.posts = posts;
    }
  },
  actions: {
    async fetchPosts({ commit }) {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        commit('setPosts', response.data);
      } catch (error) {
        console.error('Failed to fetch posts:', error);
      }
    }
  },
  getters: {
    posts: (state) => state.posts
  }
});
