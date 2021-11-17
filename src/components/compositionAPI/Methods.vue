<template>
    <div><h2>Methods</h2></div>
    <div>
        <!--The basic way-->
        <p>{{name}}</p>
        <button @click="setName">Change Name</button>
        <hr />
        <!--Using ref/reactive-->
        <p>{{count}}</p>
        <button @click="incrementCount">Increment Count</button>
        <hr />
        <p>{{fName}} {{lName}}</p>
        <button @click="changeName">Change Name</button>
        <hr />

    </div>
</template>

<script>
    import { ref, reactive, toRefs } from 'vue'

    export default {
        name: 'Methods',
        setup() {
            //defining variables/objects here:
            const count = ref(0)
            const person = reactive({
                fName: 'John',
                lName: 'Jackson,'
            })
            //we can replace methods here:
            function incrementCount() {
                count.value++
            }
            function changeName() {
                person.fName = 'Jack'
                person.lName = 'Johnson'
            }
            //returning the above for use:
            return {
                count, //ref -variable
                incrementCount,changeName, //functions
                ...toRefs(person) //reactive object
            }
        },
        data() {
            return {
                name: 'Teppo Testaaja'
            }
        },
        methods: {
            setName() {
                this.name = 'Taina Testaaja'
            }
        },
    }
</script>

<style scoped>

</style>