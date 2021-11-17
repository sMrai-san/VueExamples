<template>
    <div><h2>Click Counter</h2></div>
    <div>
        <button @click="incrementCount">Clicked {{count}} times</button>
    </div>
</template>

<script>
    //import CounterMixin from '../reusabilityMixins/counter.js' //let's reuse counter.js
    import useCounter from './composables/useCounter' //useCounter composable
    export default {
        name: 'ClickCounterComp',
        setup() {
            const { count, incrementCount } = useCounter(0, 1) //passing values to useCounter.js
            return {
                count, incrementCount
            }
        }
        //mixins: [CounterMixin], //count and incrementCount
    }
</script>