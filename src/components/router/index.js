// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import PostsView from '@/views/PostsView.vue';
import CommentsView from '@/views/CommentsView.vue';
import UsersView from '@/views/UsersView.vue';
import TodosView from '@/views/TodosView.vue';
import CreatePostComponent from '@/views/CreatePostComponent.vue';
import EditPostComponent from '@/views/EditPostComponent.vue';
import UserList from '@/views/UserList.vue';
import TodoList from '@/views/TodoList.vue';

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/posts', name: 'Posts', component: PostsView },
  { path: '/comments', name: 'Comments', component: CommentsView },
  {
    path: '/users',
    name: 'Users',
    component: UsersView,
    children: [
      { path: '', component: UserList },  // Display UserList component inside UsersView
    ],
  },
  {
    path: '/todos',
    name: 'Todos',
    component: TodosView,
    children: [
      { path: '', component: TodoList },  // Display TodoList component inside TodosView
    ],
  },
  {
    path: '/create',
    name: 'CreatePost',
    component: CreatePostComponent,
  },
  {
    path: '/edit/:id',
    name: 'EditPost',
    component: EditPostComponent,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
