import { createApp } from 'vue';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router';
import Home from './views/HomePage.vue';
import SignIn from './components/SignIn.vue';
import SignUp from './components/SignUp.vue';

// Define your routes
const routes = [
  { path: '/', component: Home },
  { path: '/SignIn', component: SignIn },
  { path: '/SignIn', component: SignUp },
];

// Create the router instance
const router = createRouter({
  history: createWebHistory(),
  routes,
});

// Create the Vue app instance and mount it
createApp(App)
  .use(router)
  .mount('#app');
