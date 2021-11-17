<template>
    <!--Just a placeholder component for this example-->
    <div style="background-color:antiquewhite">
        <p>Slave A component</p>
    </div>
    <SlaveB />
</template>

<script>
    import SlaveB from './SlaveB.vue'

    export default {
        name: 'SlaveA',
        components: {
            SlaveB
        },
    }
</script>

<style scoped>
</style>