<template>
    <select v-model="selected" class='TransportSelect' id='transport'>
    <option disabled value="">Please select one</option>
    <option>Automobile</option>
    <option>Walk</option>
    <option>Bike</option>
    </select>

    <form class='DestinationEntry'>
      <label for="fname">From:</label><br>
      <input type="text" id="from" name="From" ref='From'><br>
      <label for="lname">To:</label><br>
      <input type="text" id="to" name="To" ref='To'>
    </form>

    <button class='btnActivity' v-on:click="EnterInput">Enter Activity</button>
</template>

<script>
export default {
    name: 'UserInput',

    methods:{
        EnterInput(){
            var transport = document.getElementById('transport').value;
            var from = document.getElementById('from').value;
            var to = document.getElementById('to').value;
            console.log(transport);
            console.log(from);
            console.log(to);
        }
    }
}
</script>