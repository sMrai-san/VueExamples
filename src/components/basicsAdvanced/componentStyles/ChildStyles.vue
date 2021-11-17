<template>
    <div>
        <h4 class="myh4">ChildStyles.vue component text (scoped in ChildStyles.vue)</h4>
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: 'ChildStyles',
    }
</script>


<style scoped>
    .myh4 {
        color: darkgoldenrod;
    }
</style>