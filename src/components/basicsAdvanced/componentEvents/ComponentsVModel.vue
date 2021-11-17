<template>
    <h2>Components VModel</h2>
    <div>
        <Input v-model="name" />
        <p>{{name}}</p>
    </div>
</template>

<script>
    import Input from './Input.vue'

    export default {
        name: "ComponentsVModel",
        components: {
            Input,
        },
        data() {
            return {
                name: '',
            }
        },
        methods: {

        },

    }
</script>

<style scoped>

</style>