<template>
    <div style="background-color: darkgray;">
        <p>Slave C component</p>
        <p style="color: lawngreen">//We are using inject here</p>
        <p><i>userName</i> from ProvideInject.vue: {{userName}}</p>
        <p><i>compUser</i> from ProvideInject.vue: {{slaveUser}}</p>
        <p><i>compUser</i> from ProvideInject.vue: {{slaveCount}}</p>
        <button @click="countAdd">Add++</button>
        <p style="color: lawngreen">//You can use SlaveC.vue or ProvideInject.vue button to increase counter</p>
        <p><i>compUser</i> from ProvideInject.vue: {{fName}} {{lName}}</p>
    </div>
</template>

<script>
    import {inject, toRefs} from 'vue'
    export default {
        name: 'SlaveC',
        setup() {
            const slaveUser = inject('compUser', 'DefaultString') //here we use the provided stuff
            const slaveCount = inject('counter', 0) //here we use the provided stuff
            const slavePerson = inject('person', {}) //here we use the provided stuff
            const countAdd = inject('addOne') //here we use the provided stuff

            return {
                slaveUser,
                slaveCount,
                ...toRefs(slavePerson),
                countAdd
            }
        },
        inject: ['userName'],
    }
</script>

<style scoped>
</style>