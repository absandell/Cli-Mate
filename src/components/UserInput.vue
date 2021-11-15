<template>
    <select v-model="score.type" class='TransportSelect' id='transport'>
    <option disabled value="">Please select one</option>
    <option>Automobile</option>
    <option>Walk</option>
    <option>Bike</option>
    </select>

    <form class='DestinationEntry'>
      <label for="fname">From:</label><br>
      <input type="text" v-model="score.fromAddress" id="from" name="From" ref='From'><br>
      <label for="lname">To:</label><br>
      <input type="text" v-model="score.toAddress" id="to" name="To" ref='To'>
    </form>

    <button class='btnActivity' v-on:click="EnterInput">Enter Activity</button>
</template>

<script>
import axios from "axios";
//import { googleVar } from "../config/passport-setup";

export default {
    data() {
        return {
            score: {
                type: '',
                fromAddress: '',
                toAddress: '',
                performanceIndex: 0,
            }
        }
    },

    name: 'UserInput',

    methods:{
        EnterInput(){
            var transport = document.getElementById('transport').value;
            var from = document.getElementById('from').value;
            var to = document.getElementById('to').value;
            console.log(transport);
            console.log(from);
            console.log(to);
            
            let apiURL = 'http://localhost:8080/api/insert';
                //calculate distance here
                //cross-reference w/ vehicle emissions
                //calculate CPI
                axios.post(apiURL, this.score).then(() => {
                  this.$router.push('/')
                  this.score = {
                    type: '',
                    fromAddress: '',
                    toAddress: '',
                    performanceIndex: 0,
                  }
                }).catch(error => {
                    console.log(error)
                });

        }
    }
}
</script>