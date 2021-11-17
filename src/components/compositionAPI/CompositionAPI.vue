<template>
    <div><h2>Composition API (cAPI)</h2></div>
    <div style="margin-top: 20px;">
        <button @click="activeComp = 'Data'">Data</button>
        <button @click="activeComp = 'DemoOne'">Updating with ref</button>
        <button @click="activeComp = 'DemoTwo'">Updating with reactive</button>
        <button @click="activeComp = 'Methods'">Methods</button>
        <button @click="activeComp = 'VModel'">VModel</button>
        <button @click="activeComp = 'TemplateRefsComp'">Template refs</button>
        <br />
        <button @click="activeComp = 'ProvideInject'">Provide / Inject</button>
        <button @click="activeComp = 'ComponentPropsComp'">Component Props</button>
        <button @click="activeComp = 'ClickCounterComp'">Click Counter</button>
    </div>
    <div style="margin-top: 20px;">
        <component :is="activeComp"></component>
    </div>


</template>

<script>
    import Data from './Data.vue'
    import DemoOne from './DemoOne.vue'
    import DemoTwo from './DemoTwo.vue'
    import Methods from './Methods.vue'
    import VModel from './VModel.vue'
    import ProvideInject from './ProvideInject.vue'
    import ComponentPropsComp from './ComponentPropsComp.vue'
    import ClickCounterComp from './ClickCounterComp.vue'
    import TemplateRefsComp from "../advanced/templateRefs/TemplateRefsComp.vue";


    export default {
        name: 'CompositionAPI',
        components: {
            Data,
            DemoOne,
            DemoTwo,
            Methods,
            VModel,
            ProvideInject,
            ComponentPropsComp,
            ClickCounterComp,
            TemplateRefsComp,
        },
        data() {
            return {
                activeComp: 'Data',
            }
        }
    }
</script>