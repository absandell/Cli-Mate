<template>

    <img v-if="statusText == 'Very Bad'" class='planet' src="../assets/Earth1.png">
    <img v-if="statusText == 'Bad'" class='planet' src="../assets/Earth2.png">
    <img v-if="statusText == 'Neutral'" class='planet' src="../assets/Earth3.png">
    <img v-if="statusText == 'Good'" class='planet' src="../assets/Earth4.png">
    <img v-if="statusText == 'Very Good'" class='planet' src="../assets/Earth5.png">
    <h1 class='textLog'>Earth Status: {{fullText}} </h1>
    <h1 class='textLog'>Log new activity:</h1>

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
    <PrevLogButton />
</template>

<script>
import axios from "axios";
import PrevLogButton from './PrevLogButton'

export default {
    components: {
        PrevLogButton,
    },

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

    props: {
        statusText: {
            type: String,
            required: true,
            default: "Neutral",
        },
    },

    computed: {
        fullText() {
            return this.statusText;
        },
    },

    methods:{
        EnterInput(){
            var transport = document.getElementById('transport').value;
            var from = document.getElementById('from').value;
            var to = document.getElementById('to').value;
            console.log(transport);
            console.log(from);
            console.log(to);

            const averageCO2 = 411;
            let PIinThisTravel = 0;
            let distanceTravelled = 5;
            let fuelLiterPerMile = 1;

            let totalFuelInLiter = distanceTravelled * fuelLiterPerMile;
            let totalFuelInGalon = totalFuelInLiter/3.79;
            const CO2PerGalon = 8887;
            let totalCO2 = totalFuelInGalon * CO2PerGalon;
            let userCO2 = totalCO2 / distanceTravelled;

            if (userCO2 === averageCO2) {
                PIinThisTravel = 0;
            }
            else if (userCO2 > averageCO2) {
                PIinThisTravel = -1 * userCO2/averageCO2;
            }
            else {
                PIinThisTravel = Math.max(10, averageCO2/userCO2);
            }

            console.log(PIinThisTravel);
            
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