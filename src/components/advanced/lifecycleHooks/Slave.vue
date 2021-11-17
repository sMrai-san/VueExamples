
<template>
    <div>
        <p>Slave component</p>
    </div>
</template>

<script>

    export default {
        name: 'Slave',
        beforeCreate() {
            console.log('Slave beforeCreate()')
        },
        created() {
            console.log('Slave created()')
        },
        beforeMount() {
            console.log('Slave beforeMount()')
        },
        mounted() {
            console.log('Slave mounted()')
        },
        beforeUpdate() {
            console.log('Slave beforeUpdate()')
        },
        updated() {
            console.log('Slave updated()')
        },
        beforeUnmount() {
            console.log('Slave beforeUnmount()')
        },
        unmounted() {
            console.log('Slave unmounted()')
        },

    }
</script>

<style scoped>

</style>