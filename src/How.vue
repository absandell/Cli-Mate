<template>
    <div class='bg'>
        <HomeButton class='btnHome'/>
        <h1 class='title'>How to Use Cli-Mate</h1>
        <h1 class='body'>The purpose of the application is to teach you how to decrease carbon emissions and keep track of their progress.</h1>
        <br>
        <h1 class='body'>Throughout the day, log your transportation activities by:</h1>
        <h1 class='body'>1. Specifying the mode of transportation</h1>
        <h1 class='body'>2. Entering where "from" and "to" you traveled</h1>
        <h1 class='body'>3. Submitting the activity</h1>
        <br>
        <h1 class='body'>Based off your activity history, we will calculate your performance and show how you have impacted the planet.</h1>
        <h1 class='body'>Your status will be displayed visually as the Earth, where the health-state of the Earth will reflect your performance.</h1>
        <h1 class='body'>More transportation using automobiles will negatively affect the Earth, lowering your performance and showing a more sickly Earth.</h1>
        <h1 class='body'>Whereas transportation by walking/biking will positively affect the Earth, increasing your performance and showing a more healthy Earth.</h1>
        <br>
        <h1 class='body'>You can view the "General Information" section to view tips and other ways to help the environment.</h1>
        <br>
        <h1 class='body'>Hope you enjoy the app and lets save the Earth together!</h1>
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