<template>
    <div><h2>V-Model</h2></div>
    <div style="margin-top: 20px;">
        <h3>Basic</h3>
        <input type="text" placeholder="First Name" v-model="fName" />
        <input type="text" placeholder="Last Name" v-model="lName" />
        <p>{{fName}} {{lName}}</p>
        <hr />
        <h3>Composition ref and reactive</h3>
        <input type="text" placeholder="First Name" v-model="firstName" />
        <input type="text" placeholder="Last Name" v-model="lastName" />
        <input type="text" placeholder="Occupation" v-model="occupation" />
        <p>{{firstName}} {{lastName}} {{occupation}}</p>

        <h3>Basic with computed</h3>
        <input type="text" placeholder="First Name" v-model="fiName" />
        <input type="text" placeholder="Last Name" v-model="laName" />
        <p>{{fullName}}</p>

        <h3>Composition ref</h3>
        <input type="text" placeholder="First Name" v-model="refFirst" />
        <input type="text" placeholder="Last Name" v-model="refLast" />
        <p>{{refFullName}}</p>

        <h3>Composition reactive</h3>
        <input type="text" placeholder="First Name" v-model="reactiveFirstName" />
        <input type="text" placeholder="Last Name" v-model="reactiveLastName" />
        <p>{{reactiveFullName}}</p>

        <h3>Watchers</h3>
        <span style="color:orange">//check console</span>
        <h4>Basic</h4>
        <input type="number" placeholder="0" v-model="myNumber" />
        <p>{{myNumber}}</p>

        <h4>Replacacing watcher to setup()</h4>
        <input type="number" placeholder="0" v-model="myNumberRef" />
        <p>{{myNumberRef}}</p>

        <h4>Using watcher for both</h4>
        <input type="number" placeholder="0" v-model="myNumberRef" />
        <p>{{myNumberRef}}</p>
        <input type="number" placeholder="0" v-model="myLuckyNumberRef" />
        <p>{{myLuckyNumberRef}}</p>

        <h4>Reactive</h4>
        <input type="text" placeholder="Title" v-model="title" />
        <p>{{title}}</p>
        <input type="text" placeholder="Content" v-model="content" />
        <p>{{content}}</p>
        Is done: <input type="checkbox" v-model="options.status" />
        <p>{{content}}</p>
    </div>
</template>

<script>
    import { ref, reactive, toRefs, computed, watch } from 'vue'
    import _ from 'lodash'

    export default {
        name: 'VModel',
        setup() {
            //reactive
            const person = reactive({
                firstName: '',
                lastName: '',
            })
            //ref
            const occupation = ref('')

            //ref and computed within setup():
            const refFirst = ref('')
            const refLast = ref('')
            const refFullName = computed(function () {
                return `${refFirst.value} ${refLast.value}`
            })

            //using reactive
            const personReactive = reactive({
                reactiveFirstName: '',
                reactiveLastName: '',
            })
            const reactiveFullName = computed(function () {
                return `${personReactive.reactiveFirstName} ${personReactive.reactiveLastName}`
            })

            //**************************
            //Adding watcher to setup()
            //**************************
            const myNumberRef = ref('')
            const myLuckyNumberRef = ref(7)

            //watcher can watch multiple arrays at the same time!
            watch([myNumberRef, myLuckyNumberRef], (newValue, oldValue) => {
                console.log('Number oldRef: ' + oldValue[0])
                console.log('Number newRef: ' + newValue[0])
                console.log('LuckyNumber oldRef: ' + oldValue[1])
                console.log('LuckyNumber newRef: ' + newValue[1])
            }, {immediate: true}) //immediate will be executed when page loads

            //**************************
            //
            //**************************
            const toDo = reactive({
                title: '',
                content: '',
                options: {
                    status: false,
                }
            })
            //If you pass the reactive objecto to watch, new and old value is the same:
            //watch(toDo, function (newValue, oldValue) {
            //  console.log(oldValue.title)
            //  console.log(newValue.title)
            //  console.log(oldValue.content)
            //  console.log(newValue.content)
            //})
            //If you want it to change the way as above examples use arrow function:
            //watch(() => {
            //    return {...toDo}
            //}, function (newValue, oldValue) {
            //    console.log(oldValue.title)
            //    console.log(newValue.title)
            //    console.log(oldValue.content)
            //    console.log(newValue.content)
            //})
            //watcher for one property in reactive object
            //watch(
            //    () => toDo.title,
            //    function (newValue, oldValue) {
            //    console.log(oldValue)
            //    console.log(newValue)
            //    })
            watch(
                () => _.cloneDeep(toDo.options), //old -and newValue hack
                function (newValue, oldValue) {
                    console.log(oldValue)
                    console.log(newValue)
                }, {deep: true}) //when accessing nested objects

            //returning above for usage:
            return {
                ...toRefs(person),occupation,
                refFirst, refLast, refFullName,
                ...toRefs(personReactive), reactiveFullName,
                myNumberRef, myLuckyNumberRef,
                ...toRefs(toDo)
            }
        },
        data() {
            return {
                //basic without computed
                fName: '', lName: '',
                //basic computed
                fiName: '', laName: '',
                myNumber: 0,
            }
        },
        //basic computed
        computed: {
            fullName() {
                return `${this.fiName} ${this.laName}`
            }
        },
        //Adding watcher
        watch: {
            myNumber(newValue, oldValue) {
                console.log('Number old: ' + oldValue)
                console.log('Number new: ' + newValue)
            }
        },
    }
</script>

<style scoped>

</style>