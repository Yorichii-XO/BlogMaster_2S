<template>
  <div id="app" class="bg-dark min-h-screen ">
    <leftMenu-app />
    <main>
      <!-- Contenu principal de votre application -->
    </main>
  </div>
</template>

<script>
import LeftMenu from './components/LeftAside.vue';

export default {
  components: {
   'leftMenu-app': LeftMenu
  }
};
</script>

<style>
#app{
   background-color: #15202b;
}
</style>