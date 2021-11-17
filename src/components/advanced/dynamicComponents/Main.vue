<template>
    <h2>Dynamic Components</h2>
    <button @click="activeTab = 'Tab1'">Tab1</button>
    <button @click="activeTab = 'Tab2'">Tab2</button>
    <button @click="activeTab = 'Tab3'">Tab3</button>

    <!--The basic way to achieve this-->
    <!--HOX! This technique is also used in navbar in App.vue-->
    <!--<Tab1 v-if="activeTab === 'Tab1'"></Tab1>
    <Tab2 v-if="activeTab === 'Tab2'"></Tab2>
    <Tab3 v-if="activeTab === 'Tab3'"></Tab3>-->
    <!--A better way-->
    <!--<component :is="activeTab"></component>-->
    <!--To keep element alive cached-->
    <keep-alive>
        <component :is="activeTab"></component>
    </keep-alive>


</template>

<script>
    import Tab1 from './Tab1.vue'
    import Tab2 from './Tab2.vue'
    import Tab3 from './Tab3.vue'

    export default {
        name: 'Main',
        components: {
            Tab1,
            Tab2,
            Tab3,
        },
        data() {
            return {
                activeTab: 'Tab1',
            }
        }
    }
</script>

<style scoped>
</style>