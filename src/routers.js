import Home from './components/Home.vue'
import SignUp from './components/SignUp.vue'
import Login from './components/Login.vue'
import Statistics from './components/Statistics.vue'
import Dashboard from './components/Dashboard.vue'
import Calendar from './components/Calendar.vue'

import { createRouter, createWebHistory } from 'vue-router'

const routes=[
    {
        name: 'Home',
        component:Home,
        path:'/Home'
    },
    {
        name: 'SignUp',
        component:SignUp,
        path:'/SignUp'
    },
    {
        name: 'Login',
        component:Login,
        path:'/'
    },
    {
        name: 'Dashboard',
        component:Dashboard,
        path:'/Dashboard'
    },
    {
        name: 'Calendar',
        component:Calendar,
        path:'/Calendar'
    },
    {
        name: 'Statistics',
        component:Statistics,
        path:'/Statistics'
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
  });

export default router;
