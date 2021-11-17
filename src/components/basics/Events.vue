<template>
    <div><h2>Events</h2></div>
    <div>
        <!--Event to console-->
        <div>
            <button @click="consoleEvent($event)">Check console!</button>
        </div>
        <!--Basic events-->
        <div>
            <strong>Basic events:</strong>
            <p>{{myText}}</p>
            <button v-on:click="myText = 'Mäggärä'">Change text (button attributes)</button>
            <button @click="changeText()">Change text (from method)</button>
            <!--Multiple events-->
            <button @click="changeTextPar('ISO VIITONE'), up(1)">Change text and +1 (from method)</button>

            <p>{{count}}</p>
            <div>
                <!-- +/- count -->
                <button v-on:click="count = count + 1">+</button>
                <button v-on:click="count = count - 1">-</button>
            </div>
            <div>
                <!--...same with methods-->
                <button v-on:click="up(1)">+</button>
                <button @click="up(5)">+5</button>
                <button v-on:click="down()">-</button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Events",
        data() {
            return {
                myText: "Makkara",
                count: 0,
            }
        },
        methods: {
            consoleEvent(event) {
                console.log(event);
            },
            up(num) {
                this.count = this.count + num
            },
            down() {
                this.count = this.count - 1
            },
            changeText() {
                this.myText = 'Mäggärä Makkara';
            },
            changeTextPar(text) {
                this.myText = text;
            },
        },
    }
</script>

<style scoped>

</style>