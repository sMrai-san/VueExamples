<template>
    <div>
        <!--Basic conditions-->
        <div><h2>Conditions</h2></div>
        <p v-if="con === true">If condition is true this will be shown</p>
        <p v-else>The condition is not true</p>
        <p v-if="num < 0">The number is negative ({{num}})</p>
        <p v-else-if="num > 0">The number is positive ({{num}})</p>
        <p v-else-if="num === 0">The number is zero ({{num}})</p>
        <p v-else>The number is not a number ({{num}})</p>
        <template v-if="1 === 1">
            <p>Template tag is a hidden wrapper in Vue.js, but it must have something inside!</p>
        </template>

        <!--HOX! v-show will always be rendered in the DOM. v-if will not be rendered if condition not met-->
        <p v-show="showElement">This is using v-show</p> <!--If you have to hide and show elements a lot in the same page, use this-->
        <p v-if="showElement">This is the same as above using v-if</p>
    </div>
</template>


<script>
    export default {
        name: 'Conditions',
        data() {
            return {
                con: true,
                num: 12,
                showElement: true,
            };
        },
    };
</script>


<style scoped>

</style>