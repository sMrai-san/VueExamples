<template>
    <div>
        <div><h2>Data</h2></div>
        <h4>firstName: {{firstName}}</h4>
        <h4>composition firstName: {{firstName}}</h4>
        <h4>greeting: {{greeting}}</h4>
        <hr />
        <h2>Reactive function:</h2>
        <h4>fName: {{fName}}</h4>
        <h4>lName: {{lName}}</h4>
        <h4>occupation: {{occupation}}</h4>
        <p>{{greet}}</p>
        <h3>{{state.fName}} {{state.lName}} {{state.occupation}}</h3>
        <h4>{{reactiveGreet}}</h4>
        <hr />
    </div>
</template>

<script>
    import { ref, reactive } from 'vue'

    export default {
        name: 'Data',
        setup() {
             //this ref is different from the html ref -attribute
            const firstName = ref('Johnny')
            firstName.value = 'John'
            const greeting = `Hello ${firstName.value}`
            const fName = ref("John")
            const lName = ref("Jackson")
            const occupation = ref("Police")
            const greet = `Hello ${fName.value} ${lName.value} the ${occupation.value}!`

            //reactive state way:
            const state = reactive({
                fName: 'Bruce',
                lName: 'Dickinson',
                occupation: "Sing me a song you're a singer",
            })

            const reactiveGreet = `Hello ${state.fName} ${state.lName} ${state.occupation}`

            return {
                firstName,
                greeting,
                /////////
                fName, lName, occupation, greet,
                state, reactiveGreet
            }
        },
        data() {
            return {
                //The basic way:
                //firstName: 'Jack',
                //lName: 'Johnson',
                //occupation: 'Working man',
            }
        },
    }
</script>

<style scoped>

</style>