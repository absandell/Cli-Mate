<template>
    <div class="submit">
        <button v-on:click="GoApp">Login</button>
    </div>
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