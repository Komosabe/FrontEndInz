<template>
    <div class="nav">
        <router-link to="/Home"> Home </router-link>
        <router-link to="/Dashboard"> Dashboard </router-link>
        <router-link to="/Calendar"> Calendar </router-link>
        <router-link to="/Statistics"> Statistics </router-link>
        <a v-on:click="logout" href="/"> Logout </a>
    </div>
</template>

<script>
import '@/assets/styles.css';
export default {
    name:'Header',
    methods:{
        logout()
        {
            this.$router.push({name: 'Login'})
        }
    }
}
</script>