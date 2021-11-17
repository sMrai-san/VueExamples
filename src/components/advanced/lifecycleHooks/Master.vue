
<template>
    <h2>Lifecycle Hooks</h2>
    <div>
        <p>Master component</p>
        <button @click="showSlave = !showSlave">Toggle Slave</button>
        <p style="color: orange;">//chek console</p>
        <Slave v-if="showSlave" />
    </div>
</template>

<script>
    import Slave from './Slave.vue'

    export default {
        name: 'Master',
        components: {
            Slave,
        },
        data() {
            return {
                showSlave: true,
            }
        },
        beforeCreate() {
            console.log('Master beforeCreate()')
        },
        created() {
            console.log('Master created()')
        },
        beforeMount() {
            console.log('Master beforeMount()')
        },
        mounted() {
            console.log('Master mounted()')
        },
        beforeUpdate() {
            console.log('Master beforeUpdate()')
        },
        updated() {
            console.log('Master updated()')
        },
        beforeUnmount() {
            console.log('Master beforeUnmount()')
        },
        unmounted() {
            console.log('Master unmounted()')
        },
    }
</script>

<style scoped>

</style>