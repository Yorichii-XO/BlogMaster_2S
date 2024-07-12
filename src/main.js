import { createApp } from 'vue';
import App from './App.vue';
import MonComposant from './components/MyTest.vue';
// import UserProfile from './components/UserProfile.vue';

const app = createApp(App);

// Enregistrer le composant globalement
app.component('mon-composant', MonComposant);
// app.component('mon-profile', UserProfile);
app.mount('#app');