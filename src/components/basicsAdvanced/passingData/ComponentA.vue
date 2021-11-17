<template>
    <div>
        <ComponentB />
    </div>
</template>



<script>
    import ComponentB from './ComponentB.vue'

    export default {
        name: "ComponentA",
        data() {
            return {

            }
        },
        components: {
            ComponentB
        },
    };
</script>



<style scoped>

</style>