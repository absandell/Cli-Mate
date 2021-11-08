<template>
    <div class='bg'>
        <h1 class='title'>Welcome to Cli-Mate</h1>
        <LoginEntry class='LoginEntry'/>
        <LoginButton class='LoginButton' />
    </div>
</template>

<script>
import LoginEntry from './components/LoginEntry'
import LoginButton from './components/LoginButton'

export default {
  name: 'Login',
  components: {
    LoginEntry,
    LoginButton,
  }
}
</script>


<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&display=swap');
@import './assets/styles/style.css';
</style>