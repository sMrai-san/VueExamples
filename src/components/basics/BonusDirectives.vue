<template>
    <div><h2>Bonus Directives</h2></div>

    <p>This will change on button click once</p>
    <h4>{{name}}</h4>
    <button @click="name='John Doe'">Change Name</button>
    <hr />
    <p>This will not change on button click, because we are using v-once</p>
    <h4 v-once>{{nameOnce}}</h4>
    <button @click="nameOnce='John Doe'">Change Name</button>
    <hr />
    <p>HTML tag with v-pre attribute will not be compiled</p>
    <h4 v-pre>{{nameAgain}}</h4>
</template>

<script>
    export default {
        name: 'BonusDirectives',
        data() {
            return {
                name: "Teppo Testaaja",
                nameOnce: "Tiina Testaaja",
                nameAgain: "Pekka Puupää",
            };
        },
    };
</script>

<style scoped>

</style>