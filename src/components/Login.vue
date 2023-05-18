<template>
    <div>
      <img class="logo" src="../assets/default.png" alt="image" />
      <h1>Login</h1>
      <div class="login">
        <input type="text" placeholder="Enter Name" />
        <input type="password" placeholder="Enter Password" />
        <button class="buttonLogin" @click="goToHome">Login</button>
        <p>
            <router-link to="/SignUp"> Sign Up </router-link>
        </p>
      </div>
    </div>
  </template>
  
  <script>
  import { useRouter } from 'vue-router';
  import '@/assets/styles.css';
  
  export default {
    name: 'Login',
    setup() {
      const router = useRouter();
  
      const goToHome = () => {
        router.push({ name: 'Home' });
      };
  
      return { goToHome };
    },
  };
  </script>

