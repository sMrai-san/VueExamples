<template>
    <div><h2>DemoOne.vue</h2></div>
    <div>{{name}} <i>//this will update in 2 sec</i></div>
</template>

<script>
    import { ref } from 'vue'

    export default {
        name: 'DemoOne',
        setup() {
            //we need to use ref for this to update from timeout:
            const name = ref("Teppo Testaaja")

            setTimeout(() => {
                name.value = "Timeout Testaaja"
            }, 2000)

            return {
                name
            }
        },
    }
</script>