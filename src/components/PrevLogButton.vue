<template>
    <div class="popup" id="popup-3">
        <div class="overlay"></div>
        <div class="content">
            <div class="close-btn" v-on:click="togglePopup()">&times;</div>
            <div>
                <h1 class='popupTitle'>Activity Log</h1>
            </div>
        </div>
    </div>

    <button class="btnPrev" v-on:click="togglePopup()">Activity Log</button>
</template>

<script>
export default {
    name: 'PrevLogButton',
    methods:{
    togglePopup(){
        document.getElementById("popup-3").classList.toggle("active");
        }
    }
}
</script>