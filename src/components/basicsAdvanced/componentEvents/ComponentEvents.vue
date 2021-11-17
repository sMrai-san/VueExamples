<template>
    <h2>Component Events</h2>
    <div>
        <button @click="showPopup = true">Show popup</button>
        <Popup v-show="showPopup" @closePopup="closeThePopup" />
        <p v-show="!showPopup">This is a passed value from Popup.vue: {{passedValue}}</p>
    </div>
</template>



<script>
    import Popup from './Popup.vue'

    export default {
        name: "ComponentEvents",
        data() {
            return {
                showPopup: false,
                passedValue: '',
            }
        },
        components: {
            Popup,
        },
        methods: {
            closeThePopup(myPassedValue) {
                this.showPopup = false
                this.passedValue = myPassedValue
            }
        }
    };
</script>



<style scoped>

</style>