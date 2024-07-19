<!-- src/App.vue -->
<template>
  <div id="app">
    <navbar-routers />
    <router-view></router-view>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';

export default {
  name: 'App',
  components: {
    'navbar-routers':Navbar
  },
};
</script>
