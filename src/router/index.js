import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/components/Home.vue';
import PostsView from '@/views/posts/PostsView.vue';
import CommentsView from '@/views/comments/CommentView.vue'; 
import EditPostComponent from '@/views/posts/EditPostComponent.vue';
import CreatePostComponent from '@/views/posts/CreatePostComponent.vue';
import TodoList from '@/views/todos/TodoList.vue';
import TodoForm from '@/views/todos/TodoForm.vue';
import Login from '@/views/auth/Login.vue';
import Register from '@/views/auth/Register.vue';
import Profile from '@/views/auth/Profile.vue';

const routes = [
    { path: '/', name: 'Home', component: Home },
    { path: '/posts', name: 'Posts', component: PostsView },
    { path: '/comments', name: 'Comments', component: CommentsView },
    {
        path: '/todos',
        name: 'Todos',
        component: TodoList,
        children: [
            { path: '', component: TodoList },  // Display TodoList component inside TodosView
        ],
    },
    {
        path: '/add-post',
        name: 'CreatePostComponent',
        component: CreatePostComponent,
        children: [
            { path: '', component: CreatePostComponent },  // Display TodoList component inside TodosView
        ],
    },
    {
        path: '/edit/:id',
        name: 'EditPost',
        component: EditPostComponent,
    },
    {
        path: '/add-todo',
        name: 'AddTodo',
        component: TodoForm,
        props: { isEdit: false }
    },
    {
        path: '/edit-todo/:id',
        name: 'EditTodo',
        component: TodoForm,
        props: route => ({ isEdit: true, todoId: Number(route.params.id) })
    },
    {
        path: '/login',
        name: 'Login',
        component: Login,
    },
    {
        path: '/register',
        name: 'Register',
        component: Register,
    },
    {
        path: '/profile',
        name: 'Profile',
        component: Profile,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

// Navigation guard to check authentication
router.beforeEach((to, from, next) => {
    const token = localStorage.getItem('token');

    // Check if the route requires authentication
    if (to.name !== 'Login' && to.name !== 'Register' && !token) {
        // If user is not authenticated, redirect to login page
        next({ name: 'Login' });
    } else if (to.name === 'Login' && token) {
        // If user is already authenticated and trying to access login page, redirect to home
        next({ name: 'Home' });
    } else {
        // Allow navigation to the route
        next();
    }
});

export default router;
