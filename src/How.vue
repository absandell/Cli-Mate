<template>
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
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.title {
    text-align: center;
    font-size: 100px;
}
.welcome {
    text-align: center;
    font-size: 50px;
    padding: 25px;
}
body {
  font-family: 'Poppins', sans-serif;
  text-align: center;
}
.container {
  max-width: 1500px;
  margin: 30px auto;
  overflow: auto;
  min-height: 600px;
  border: 1px solid steelblue;
  padding: 30px;
  border-radius: 5px;
}
.btnHow {
  position: relative;
  display: inline-block;
  background: #000;
  color: #fff;
  border: none;
  padding: 10px 20px;
  margin: 5px;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  font-size: 30px;
  font-family: inherit;
  left: 0.5%;
}
.btnPrev {
  position: relative;
  display: inline-block;
  background: #000;
  color: #fff;
  border: none;
  padding: 10px 20px;
  margin: 5px;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  font-size: 30px;
  font-family: inherit;
  left: 62%;
}
.btnLogout {
  position: relative;
  display: inline-block;
  background: red;
  color: #fff;
  border: none;
  padding: 10px 20px;
  margin: 5px;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  font-size: 30px;
  font-family: inherit;
  left: 90%;
}
.btn:focus {
  outline: none;
}
.btn:active {
  transform: scale(0.98);
}
.btn-block {
  display: block;
  width: 100%;
}
.imgExample {
    position: relative;
    text-align: center;
    left: 7%;
}
.textLog {
    position: relative;
    text-align: center;
    font-size: 30px;
    top: 100px;
    left: 0px;
}
.TransportSelect {
    position: relative;
    text-align: center;
    left: 45%;
    top: 100px;
    width: 150px;
    height: 30px;
}
.DestinationEntry {
    position: relative;
    top: 100px;
    left: 45%;
}
.btnActivity {
  position: relative;
  display: inline-block;
  background: #000;
  color: #fff;
  border: none;
  padding: 10px 20px;
  margin: 5px;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  font-size: 20px;
  font-family: inherit;
  top: 110px;
  left: 44.1%;
}
.LoginEntry {
    position: relative;
    top: 50px;
    left: 45%;
    width: 100%;
}
.LoginButton {
    position: relative;
    top: 60px;
    left: 45%;
}
.btnHome {
  position: relative;
  display: inline-block;
  background: #000;
  color: #fff;
  border: none;
  padding: 10px 20px;
  margin: 10px;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  font-size: 30px;
  font-family: inherit;
  top: 0%;
  left: 45%;
}
</style>