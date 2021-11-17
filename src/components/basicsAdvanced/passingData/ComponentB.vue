<template>
    <div>
        <ComponentC />
    </div>
</template>



<script>
    import ComponentC from './ComponentC.vue'
    export default {
        name: "ComponentB",
        data() {
            return {

            }
        },
        components: {
            ComponentC,
        }
    };
</script>



<style scoped>
</style>