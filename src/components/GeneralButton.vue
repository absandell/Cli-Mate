<template>
    <div class="popup" id="popup-2">
        <div class="overlay"></div>
        <div class="content">
            <div class="close-btn" v-on:click="togglePopup()">&times;</div>
            <div>
                <h1 class='popupTitle'>General Information</h1>
                <h1 class='popupBody'>Climate change and in the increase of carbon emissions is a growing threat due to the rising of technology today.</h1>
            </div>
        </div>
    </div>

    <button class="btnGeneral" v-on:click="togglePopup()">General Information</button>
</template>

<script>
export default {
    name: 'GeneralButton',
    methods:{
    togglePopup(){
        document.getElementById("popup-2").classList.toggle("active");
        }
    }
}
</script>