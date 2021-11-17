<template>
    <div><h2>Lists</h2></div>
    <hr />
    <div>
        <!--Basic example using v-for in html element-->
        <strong>Basic example using v-for in html element:</strong>
        <p v-for="(name, index) in names" :key="index">{{name}}</p>
        <hr />
        <!--Basic example using v-for in vue <template> element and html element within-->
        <strong>Basic example using v-for in vue template element and html element within:</strong>
        <template v-for="name in names" :key="name">
            <p>{{name}}</p>
        </template>
        <hr />
        <!--Basic example using v-for in html element, but with 2 variables-->
        <strong>Basic example using v-for in html element, but with 2 variables:</strong>
        <p v-for="(name, index) in fullNames" :key="index">{{name.firstName}} {{name.lastName}}</p>
    </div>
    <hr />
    <!--Array within an array example-->
    <strong>Array within an array example:</strong>
    <div v-for="spec in infoNames" :key="spec.name">
        <p>{{spec.name}}</p>
        <p v-for="(s, index) in spec.info" :key="index">{{s}}</p>
    </div>
    <hr />
    <!--Object v-for example-->
    <strong>Object v-for example:</strong>
    <div>
        <p v-for="(value, key, index) in myInfo" :key="value">{{index}} {{key}}: {{value}}</p>
    </div>
    <hr />
    <!--Conditional Rendering within List v-for and v-if cannot be nested in the same element-->
    <strong>Conditional Rendering within List v-for and v-if cannot be nested in the same element:</strong>
    <template v-for="name in myNames" :key="name">
        <p v-if="name === 'Kepu' || name === 'Mopu'">{{name}}</p>
    </template>
    <hr />
</template>


<script>
    export default {
        name: 'Lists',
        data() {
            return {
                names: ["Kölvi", "Kolvi", "Moukkis", "Moukari"],
                fullNames: [
                    { firstName: "Kölvi", lastName: "Kölvinen" },
                    { firstName: "Kolvi", lastName: "Kolvinen" },
                    { firstName: "Moukkis", lastName: "Moukkinen" },
                    { firstName: "Moukari", lastName: "Moukarinen" },
                ],
                infoNames: [
                    {
                        name: "Jack Johnson",
                        info: ["Firstname: Jack", "Lastname: Johnson"]
                    },
                    {
                        name: "John Jackson",
                        info: ["Firstname: John", "Lastname: Jackson"]
                    }
                ],
                myInfo: {
                    name: "Makkaranpaistaja",
                    channel: "Makkara",
                    course: "Kuinka lämmitän makkaran",
                },
                myNames: ["Hepu", "Kepu", "Mopu", "Dopu"],
            };
        },
    };

</script>

<style scoped>

</style>