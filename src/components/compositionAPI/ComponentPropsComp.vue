<template>
    <div><h2>Component Props</h2></div>
    <div>
        <input type="text" placeholder="First Name" v-model="fName" />
        <input type="text" placeholder="Last Name" v-model="lName" />
        <Greeting :fName="fName" :lName="lName" @checkNames="checkNames"></Greeting>
    </div>
</template>

<script>
    import { ref } from 'vue'
    import Greeting from './ComponentPropsCompGreeting.vue'
    export default {
        name: 'ComponentPropsComp',
        components: {
            Greeting,
        },
        setup() {
            const fName = ref('')
            const lName = ref('')

            function checkNames(person) {
                alert('Hello ' + person)
            }

            return {
                fName, lName,
                checkNames
            }
        },


    };
</script>

<style scoped>
</style>
