// src/store/index.js
import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    posts: [],
    comments: [],
    users: [],
    todos: []
  },
  mutations: {
    SET_POSTS(state, posts) {
      state.posts = posts;
    },
    SET_COMMENTS(state, comments) {
      state.comments = comments;
    },
    SET_USERS(state, users) {
      state.users = users;
    },
    SET_TODOS(state, todos) {
      state.todos = todos;
    }
  },
  actions: {
    fetchPosts({ commit }) {
      axios.get('http://localhost:3000/posts')
        .then(response => {
          commit('SET_POSTS', response.data);
        });
    },
    fetchComments({ commit }) {
      axios.get('http://localhost:3000/comments')
        .then(response => {
          commit('SET_COMMENTS', response.data);
        });
    },
    fetchUsers({ commit }) {
      axios.get('http://localhost:3000/users')
        .then(response => {
          commit('SET_USERS', response.data);
        });
    },
    fetchTodos({ commit }) {
      axios.get('http://localhost:3000/todos')
        .then(response => {
          commit('SET_TODOS', response.data);
        });
    }
  },
  modules: {}
});
