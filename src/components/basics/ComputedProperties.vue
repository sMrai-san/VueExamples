<template>
    <div><h2>Computed Properties</h2></div>
    <p>Non computed</p>
    <h4>{{firstName}} {{lastName}}</h4>
    <hr />
    <p>Computed</p>
    <h4>{{fullName}}</h4>
    <hr />
    <p>Non computed total price of items</p>
    <h4>{{items.reduce((total, curr) => (total = total + curr.price), 0)}} €</h4>
    <hr />
    <p>Computed total price of items and adding one to array</p>
    <h4>{{totalSum}} €</h4>
    <button @click="items.push({id: 4, title: 'Vanhanajan nakit', price: 3.25})">Add item</button>
    <p>{{items}}</p>
    <hr />
    <p>Computed total from method method will be called everytime user interacts, but computed will be cached and updated only when needed</p>
    <h4>{{getTotal()}} €</h4>
    <hr />
    <p>Type in something and look at the console! You will be able to see that the computed value will not be rendered again, but methods/functions are</p>
    <input type="text" v-model="country" />
    <hr />
    <p>Using v-if non computed for showing items with price >= 2.50</p>
    <template v-for="item in items" :key="item.id">
        <h5 v-if="item.price >= 2.50">{{item.title}} {{item.price}}</h5>
    </template>
    <hr />
    <p>Using computed for the above</p>
    <template v-for="item in expensiveItems" :key="item.id">
        <h5>{{item.title}} {{item.price}}</h5>
    </template>
    <hr />
    <p>Computed property read and write</p>
    <h4>{{fullNameObj}}</h4>
    <button @click="changeFullName">Change the name</button>
</template>

<script>
    export default {
        name: 'ComputedProperties',
        data() {
            return {
                firstName: "John",
                lastName: "Doe",
                items: [
                    {
                        id: 1,
                        title: "Huiluntuhti",
                        price: 2.50
                    },
                    {
                        id: 2,
                        title: "Löylylenkki",
                        price: 2.60
                    },
                    {
                        id: 3,
                        title: "Grilleri",
                        price: 2.15
                    },
                ],
                country: "Finland",
            };
        },
        /*Methods/functions starts here*/
        methods: {
            getTotal() {
                console.log("getTotal() called!")
                return this.items.reduce((total, curr) => (total = total + curr.price), 0)
            },
            changeFullName() {
                this.fullNameObj = "Jane Doe"
            }

        },
        /*Computed values start here*/
        computed: {
            fullNameObj: {
                get() { return `${this.firstName} ${this.lastName}` },
                set(value) {
                    const names = value.split(' ')
                    this.firstName = names[0]
                    this.lastName = names[1]
                }

            },

            fullName() {
                return `${this.firstName} ${this.lastName}`
            },
            totalSum() {
                console.log("totalSum() called!")
                return this.items.reduce((total, curr) => (total = total + curr.price), 0)
            },
            expensiveItems() {
                return this.items.filter( item => item.price >= 2.50)
            },
        }
    };
</script>

<style scoped>

</style>