<template>
    <!--Just a placeholder component for this example-->
    <div style="background-color: cornflowerblue">
        <p>Slave B component</p>
    </div>
    <SlaveC />
</template>

<script>
    import SlaveC from './SlaveC.vue'

    export default {
        name: 'SlaveB',
        components: {
            SlaveC,
        },

    }
</script>

<style scoped>
</style>