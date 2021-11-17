<template>
    <div>
        <p>From component C</p>
        <p>Username variable from App.vue: {{username}}</p>
    </div>
</template>



<script>
    export default {
        name: "ComponentC",
        data() {
            return {

            }
        },
        inject: ['username']
    };
</script>



<style scoped>
</style>