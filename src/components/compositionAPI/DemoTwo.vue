<template>
    <div><h2>DemoTwo.vue</h2></div>
    <div>
        {{fName}} {{lName}} //this will update in 2 sec
    </div>
</template>

<script>
    import { reactive, toRefs } from 'vue'

    export default {
        name: 'DemoTwo',
        setup() {

            const person = reactive({
                fName: 'Chuck',
                lName: 'Norris',
            })

            setTimeout(() => {
                person.fName = 'Bruce'
                person.lName = 'Lee'
            }, 2000)

            //using toRefs, the state can be updated!
            return toRefs(person)
        },
    }
</script>