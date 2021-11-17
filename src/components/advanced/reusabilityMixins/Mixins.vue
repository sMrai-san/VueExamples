<template>
    <h2>Mixins</h2>
    <div>
        <p>We are using counter.js -file for incrementing, this file is reusable with Mixins</p>
        <button @click="incrementCount">Clicked {{count}} times</button>
        <hr />
        <h2 @mouseover="incrementHoverCount">Hovered over {{hoverCount}} times</h2>
    </div>
    <div>
        <hr />
        <h4 style="text-align:left;">counter.js content:</h4>
        <pre style="text-align:left;">
        export default {
            data() {
                return {
                    count: 0,
                    hoverCount: 0,
            }
        },
        methods: {
            incrementCount() {
                this.count += 1
        },
            incrementHoverCount() {
                this.hoverCount += 1
        },
    }
}
            
        </pre>
    </div>
</template>

<script>
    import CounterMixin from './counter.js'

    export default {
        name: 'Mixins',
        mixins: [CounterMixin],
        data() {
            return {
                //count: 100, //this overrides the MIXIN
            }
        },

    };
</script>

<style scoped>

</style>