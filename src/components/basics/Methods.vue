<template>
    <div>
        <div><h2>Methods</h2></div>
    </div>
    
    <div>
        <!--Hardcoded-->
        <strong>Hardcoded</strong>
        <p>{{2 + 3 + 5}}</p>
        <!--Simple methods-->
        <strong>Simple methods</strong>
        <p>{{add(2, 3, 5)}}</p>
        <p>{{multiply(2)}}</p>
        <p>{{multiply(baseValue)}}</p>
    </div>
</template>

<script>
    export default {
        name: "Methods",
        data() {
            return {
                baseMultiplier: 5,
                baseValue: 2,
            }
        },
        methods: {
            add(a, b, c) {
                return a + b + c
            },
            /*If you use arrow functions here, you cannot use anything from data()*/
            multiply(num) {
                return num * this.baseMultiplier
            },
        }
    }
</script>

<style scoped>

</style>