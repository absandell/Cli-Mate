<template>
    <img class='planet' src="../assets/Earth4.png" id='earth'>
    <h1 class='textLog' id='status'>Earth Status: Neutral</h1>
    <h1 class='textLog'>Log new activity:</h1>

    <select v-model="score.type" class='TransportSelect' id='transport'>
    <option disabled value="">Please select one</option>
    <option>Automobile</option>
    <option>Walk</option>
    <option>Bike</option>
    </select>

    <form class='DestinationEntry'>
      <label for="fname">Distance:</label><br>
      <input type="text" v-model="score.fromAddress" id="distance" name="Distance" ref='Distance'><br>
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
            }
        }
    },

    name: 'UserInput',

    props: {

    },

    computed: {

    },

    methods:{
        EnterInput(){
            var transport = document.getElementById('transport').value;
            var distance = document.getElementById('distance').value;
            var status = document.getElementById('status').value;
            var image = "";
            console.log(transport);
            console.log(distance);

            const averageCO2 = 411;
            let PIinThisTravel = 0;
            let distanceTravelled = parseInt(distance);
            let fuelLiterPerMile = 1;

            let totalFuelInLiter = distanceTravelled * fuelLiterPerMile;
            let totalFuelInGalon = totalFuelInLiter/3.79;
            const CO2PerGalon = 8887;
            let totalCO2 = totalFuelInGalon * CO2PerGalon;
            let userCO2 = totalCO2 * distanceTravelled;

            if (transport == "Automobile") {
                PIinThisTravel = -1 * userCO2/averageCO2;
            }
            else {
                PIinThisTravel = 1 * userCO2/averageCO2;
            }

            if (PIinThisTravel < -500) {
                status = "Earth Status: Very Bad";
                image = '../assets/Earth1.png';
            }
            else if (PIinThisTravel < -100) {
                status = "Earth Status: Bad";
                image = "../assets/Earth2.png";
            }
            else if (PIinThisTravel < 0 && PIinThisTravel < 100)
            {
                status = "Earth Status: Neutral";
                image = "../assets/Earth3.png";
            }
            else if (PIinThisTravel > 500) {
                status = "Earth Status: Very Good";
                image = "../assets/Earth5.png";
            }
            else {
                status = "Earth Status: Good";
                image = "../assets/Earth4.png";
            }

            //document.getElementById('earth').src = image;
            document.getElementById('status').innerHTML = status;
            console.log(status);
            console.log(image);

            console.log(PIinThisTravel);
            
            let apiURL = 'http://localhost:8080/api/insert';
                
                axios.post(apiURL, this.score).then(() => {
                  this.$router.push('/')
                  this.score = {
                    type: '',
                    fromAddress: '',
                    toAddress: '',
                  }
                }).catch(error => {
                    console.log(error)
                });

        }
    }
}
</script>