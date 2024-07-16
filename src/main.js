import { createApp } from 'vue';
import App from './App.vue';
// import UserProfile from './components/UserProfile.vue';

const app = createApp(App);

// Enregistrer le composant globalement
// app.component('mon-profile', UserProfile);
app.mount('#app');