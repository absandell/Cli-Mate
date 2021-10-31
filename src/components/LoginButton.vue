<template>
        <button class='btnLogin' v-on:click="GoApp">Login</button>
</template>

<script>
export default {
    name: 'LoginButton',
    methods:{
    GoApp(){
        window.location.href = '/google';
        }
    }
}
</script>