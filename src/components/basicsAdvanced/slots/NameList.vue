<template>
    <h2>Namelist (Slots)</h2>
    <div>
        <h4 v-for="name in names" :key="name.firstName">
            <slot :firstName="name.firstName" :lastName="name.lastName"></slot>
        </h4>
        <h5 v-for="name in names" :key="name.firstName">
            <slot name="mySlot" :firstName="name.firstName" :lastName="name.lastName"></slot>
        </h5>
    </div>
    <p style="color:orange">//Check App.vue for more...</p>
</template>

<script>
    export default {
        name: 'NameList',
        data() {
            return {
                names: [
                    { firstName: "Kölvi", lastName: "Kölvinen" },
                    { firstName: "Kalvi", lastName: "Kalvinen" },
                    { firstName: "Mälvä", lastName: "Mälvänen" },
                    { firstName: "Moukari", lastName: "Moukarinen" },
                ],
            }
        },

    }
</script>

<style scoped>

</style>