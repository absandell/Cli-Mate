<template>
    <div class='bg'>
        <HomeButton class='btnHome'/>
        <h1 class='title'>Activities Log</h1>
        <h1 class='body'>Transportation | Distance | Performance</h1>
    </div>
</template>

<script>
import HomeButton from './components/HomeButton'

export default {
  name: 'How',
  components: {
    HomeButton,
  }
}
</script>


<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&display=swap');
@import './assets/styles/style.css';
</style>