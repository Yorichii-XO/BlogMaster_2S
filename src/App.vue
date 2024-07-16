<template>
  <div id="app">
   
 
    <div class="bg-black w-auto h-screen flex">
      <div class="sidebar w-64 fixed h-full text-white"> <!-- Adjust width here -->
      <sidebar-app />
    </div>
    <section class="flex ml-80 w-full overflow-auto"> <!-- Adjust margin-left accordingly -->
      <div class="main flex-grow">
        <main-app />
      </div>
      <div class="right w-/2">
        <rightside-app />
      </div>
    </section>

    </div>
  </div>
</template>

<script>
import SidebarComponent from './components/Sidebar.vue';
import Main from './components/Main.vue';
import RightSide from './components/RightSide.vue';
export default {
  name: 'App',
  components: {
 
    'sidebar-app':SidebarComponent,
    'main-app':Main,
'rightside-app':RightSide,

  }
};
</script>

<style>
.sidebar{

}

#app {
  font-family: 'Arial', sans-serif;
}

</style>
