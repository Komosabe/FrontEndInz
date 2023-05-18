<template>
    <div>
      <img class="logo" src="../assets/default.png" alt="image" />
      <h1>Sign Up</h1>
      <div class="SignUp">
        <input type="text" placeholder="Enter Name" />
        <input type="text" placeholder="Enter Email" />
        <input type="password" placeholder="Enter Password" />
        <button class="buttonSignUp" @click="goToHome">Sign Up</button>
        <p>
            <router-link to="/"> Login </router-link>
        </p>
      </div>
    </div>
  </template>
  
  <script>
  import { useRouter } from 'vue-router';
  import '@/assets/styles.css';
  export default {
    name: 'SignUp',
    setup() {
      const router = useRouter();
  
      const goToHome = () => {
        router.push({ name: 'Home' });
      };
  
      return { goToHome };
    },
  };
  </script>
  