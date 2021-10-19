<template>
    <select v-model="selected">
    <option disabled value="">Please select one</option>
    <option>Automobile</option>
    <option>Walk</option>
    <option>Bike</option>
    </select>
</template>

<script>
export default {
    name: 'TransportSelect',
}
</script>