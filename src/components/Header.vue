<template>
    <div class="nav">
        <a href="#"> Home </a>
        <a href="#"> Dashboard </a>
        <a href="#"> Calendar </a>
        <a href="#"> Statistics </a>
        <a v-on:click="logout" href="#"> Logout </a>
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