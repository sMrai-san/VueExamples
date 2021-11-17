<template>
    <div>
        <p>Tab3 Content</p>
        <input type="text" v-model="name"/>
    </div>
</template>

<script>
    export default {
        name: 'Tab3',
        data() {
            return {
                name: '',
            }
        }
    }
</script>

<style scoped>
</style>