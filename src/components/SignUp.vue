<template>
    <img class="logo" src="../assets/default.png" alt="image" />
    <h1> Sign Up</h1>
    <div class="register">
        <input type="text" placeholder="Enter Name" />
        <input type="text" placeholder="Enter Email" />
        <input type="password" placeholder="Enter Password" />
        <button> Sign Up</button>
    </div>
</template>

<script>
export default {
    name: 'SignUp'
}
</script>

<style>
.logo {
  width: 35%; /* Przykładowa wartość - do dostosowania*/
  height: 35; /* Aby wysokość była proporcjonalna */
}
.register input {
    width: 300px;
    height: 40px;
    padding-left: 20px;
    display: block;
    margin-bottom: 30px;
    margin-right: auto;
    margin-left: auto;
    border: 1px solid skyblue;
}
.register button {
    width: 320px;
    height: 40px;
    border: 1px solid skyblue;
    background: skyblue;
    color: #fff;
    font-size: large;
    cursor: pointer;
}
</style>