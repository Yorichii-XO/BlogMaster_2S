<template>
  <div id="app">
   
    
    <div class="bg-black w-auto">
      <div class="flex">

      <sidebar-app />
      <main-app />
      <div class="right"><rightside-app/></div>
     
    </div>
   
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

.flex{
  margin-right: 5%;
}
#app {
  font-family: 'Arial', sans-serif;
}

.container {
  display: flex;
  min-height: 100vh;
}

main {
  flex: 1;
  padding: 20px;
}
</style>
