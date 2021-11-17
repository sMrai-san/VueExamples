<template>
    <div><h2>Provide / Inject</h2></div>
    <div>
        <!--Main component for Provide / Inject-->
        <h4>Master component ProvideInject.vue</h4>
        <p style="color:orange">//We are defining provide here</p>
        <button @click="addOne">Counter ++</button>
        <p style="color:orange">//This will add +1 in SlaveC.vue</p>
        <SlaveA />
    </div>
</template>

<script>
    import { provide, ref, reactive, toRefs } from 'vue'
    import SlaveA from './SlaveA.vue'
    export default {
        name: 'ProvideInject',
        setup() {
            provide('compUser', 'my static string') //we are providing this to another components

            const counter = ref(100) //default value 100 for the counter

            const person = reactive({
                fName: 'Teppo',
                lName: 'Testaaja'
            })

            provide('counter', counter) //we are providing this to another components
            provide('person', person) //we are providing this to another components
            provide('addOne', addOne) //we are providing this to another components

            function addOne() {
                counter.value += 1 //+1 to counter
            }

            return {
                counter, ...toRefs(person), addOne
            }

        },
        components: { SlaveA },
        data() {
            return {
                user: 'Teppo Testaaja'
            }
        },
        provide() {
            return {
                userName: this.user
            }
        },

    }
</script>

<style scoped>


</style>