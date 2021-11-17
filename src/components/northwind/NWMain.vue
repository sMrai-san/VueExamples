
<template>
    <h3>Northwind Products</h3>
    <div style="width: 50%; margin: auto;">
        <NWProductList />
    </div>
</template>

<script>
    import NWProductList from "./NWProductList.vue"

    export default {
        name: 'NWMain',
        components: {
            NWProductList
        },
        data() {
            return {

            }
        },
    }
</script>

<style scoped>
    div {
        text-align: left;
        border-radius: 5px;
        background-color: #f2f2f2;
        padding: 2px;
    }
    h3{
        background-color:azure;
    }

</style>