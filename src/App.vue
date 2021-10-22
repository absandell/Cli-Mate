<template>
  <Header />
  <div id="nav">
    <router-link to="/">Login</router-link>
  </div>
  <router-view/>
</template>

<script>
import Header from './components/Header'

export default {
  name: 'App',
  components: {
    Header
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
</style>