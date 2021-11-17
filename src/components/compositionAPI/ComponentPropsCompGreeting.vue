<template>
    <div><p>Hello {{fullName}} from Slave component</p></div>
    <button @click="sendEvent">Check Names</button>
</template>

<script>
    import {computed} from 'vue'
    export default {
        name: 'ComponentPropsCompGreeting',
        //Composition API way:
        setup(props, context) {
            //console.log(context) //dev purposes
            const fullName = computed(() => {
                return `${props.fName} ${props.lName}`
            })

            function sendEvent() {
                context.emit('checkNames', fullName.value)
            }

            return {
                fullName,
                sendEvent
            }
        },
        //Passed props
        props: ['fName', 'lName'],
        emits: ['checkNames'],

        //Non-CompositionAPI way:
        //computed: {
        //    fullName() {
        //        return `${this.fName} ${this.lName}`
        //    }
        //},
    }
</script>