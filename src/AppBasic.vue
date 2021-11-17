<!--This is the main/root component containing all the other components (Basic way to switch components with v-if)-->
<template>
    <teleport to="#portalRoot">
        <TopNav />
    </teleport>
    <!--Some basic vue if-else to show the wanted components-->
    <div v-if="showBasics"><Basics /></div>
    <div v-if="showConditions"><Conditions /></div>
    <div v-if="showLists"><Lists /></div>
    <div v-if="showMethods"><Methods /></div>
    <div v-if="showEvents"><Events /></div>
    <div v-if="showForms"><Forms /></div>
    <div v-if="showModifiers"><Modifiers /></div>
    <div v-if="showBonusDirectives"><BonusDirectives /></div>
    <div v-if="showComputedProperties"><ComputedProperties /></div>
    <div v-if="showWatchers"><Watchers /></div>
    <div v-if="showComponentProps">
        <ComponentProps name="John"
                        yourOwnProp="Jack"
                        :anyPropCanBeNamedHere="testData"
                        title="ObjectProp passed from root component"
                        :myNumber="1"
                        :myBool="true"
                        id="nonprop" /><!--You have to add : for vue to understand that its a number within ""-->
    </div>
    <div v-if="showPassingData">
        <ComponentA />
        <p>
            From App.vue the variable in provided-section {{username}} will not work,
            we need to make a new variable within data() in App.vue
            and pass that value to provided section...': {{usr}}
        </p>
    </div>
    <div v-if="showComponentEvents"><ComponentEvents /></div>
    <div v-if="showComponentsVModel"><ComponentsVModel /></div>
    <div v-if="showSlots">
        <!--<CardSlots content="This is from App.vue" />-->
        <CardSlots>
            Card content from App.vue
        </CardSlots>
        <CardSlots>
            <template v-slot:header>
                <h2>Header from App.vue</h2>
            </template>
            <template v-slot:default>
                Content from App.vue
            </template>
            <template v-slot:footer>
                Footer from App.vue
            </template>
        </CardSlots>
    </div>
    <div v-if="showNameListSlots">
        <NameList>
            <template v-slot:default="myProps">
                {{myProps.firstName}} {{myProps.lastName}}
            </template>
            <template v-slot:mySlot="myProps">
                {{myProps.firstName}}
            </template>
        </NameList>
    </div>
    <div v-if="showChildStyles">
        <h3 class="myh4">App.vue component text</h3>
        <ChildStyles>
            <template v-slot:default>
                <h4 class="myh4">ChildStyles.vue component text (in a slot, but using App.vue styles)</h4>
            </template>
        </ChildStyles>
    </div>
    <div v-if="showMainTab"><MainTab /></div>
    <div v-if="showPortal">
        <teleport to="#portalRoot">
            <Portal />
        </teleport>
    </div>
    <div v-if="showHTTP"><HTTP /></div>
    <div v-if="showMaster"><Master /></div>
    <div v-if="showTemplateRefs"><TemplateRefs /></div>
    <div v-if="showMixins"><Mixins /></div>
    <div v-if="showCompositionAPI"><CompositionAPI /></div>
    <div v-if="showTemplateRefsComp"><TemplateRefsComp /></div>
</template>

<script>
    import TopNav from "./components/teleporting/TopNav.vue";
    /*We have to import our components here:*/
    import Conditions from "./components/basics/Conditions.vue";
    import Basics from "./components/basics/Basics.vue";
    import Lists from "./components/basics/Lists.vue";
    import Methods from "./components/basics/Methods.vue";
    import Events from "./components/basics/Events.vue";
    import Forms from "./components/basics/Forms.vue";
    import Modifiers from "./components/basics/Modifiers.vue";
    import BonusDirectives from "./components/basics/BonusDirectives.vue";
    import ComputedProperties from "./components/basics/ComputedProperties.vue";
    import Watchers from "./components/basics/Watchers.vue";
    import ComponentProps from "./components/basics/ComponentProps.vue";
    import ComponentA from "./components/passingData/ComponentA.vue";
    import ComponentEvents from "./components/componentEvents/ComponentEvents.vue";
    import ComponentsVModel from "./components/componentEvents/ComponentsVModel.vue";
    import CardSlots from "./components/slots/Card.vue";
    import NameList from "./components/slots/NameList.vue";
    import ChildStyles from "./components/componentStyles/ChildStyles.vue";
    import MainTab from "./components/dynamicComponents/Main.vue";
    import Portal from "./components/teleporting/Portal.vue";
    import HTTP from "./components/requests/HTTP.vue";
    import Master from "./components/lifecycleHooks/Master.vue";
    import TemplateRefs from "./components/templateRefs/TemplateRefs.vue";
    import Mixins from "./components/reusabilityMixins/Mixins.vue";
    import CompositionAPI from "./components/compositionAPI/CompositionAPI.vue";
    import TemplateRefsComp from "./components/templateRefs/TemplateRefsComp.vue";


    export default {
        name: 'App',
        /*Specifying the components we will use here:*/
        components: {
            Basics,
            Conditions,
            Lists,
            Methods,
            Events,
            Forms,
            Modifiers,
            BonusDirectives,
            ComputedProperties,
            Watchers,
            ComponentProps,
            ComponentA,
            ComponentEvents,
            ComponentsVModel,
            CardSlots,
            NameList,
            ChildStyles,
            MainTab,
            Portal,
            HTTP,
            Master,
            TemplateRefs,
            Mixins,
            CompositionAPI,
            TemplateRefsComp,
            TopNav,
        },
        data() {
            return {
                testData: 'testdata string',
                usr: 'Teppo Testaaja',

                showBasics: false,
                showConditions: false,
                showLists: false,
                showMethods: false,
                showEvents: false,
                showForms: false,
                showModifiers: false,
                showBonusDirectives: false,
                showComputedProperties: false,
                showWatchers: false,
                showComponentProps: false,
                showPassingData: false,
                showComponentEvents: false,
                showComponentsVModel: false,
                showSlots: false,
                showNameListSlots: false,
                showChildStyles: false,
                showMainTab: false,
                showPortal: false,
                showHTTP: false,
                showMaster: false,
                showTemplateRefs: false,
                showMixins: false,
                showCompositionAPI: true,
                showTemplateRefsComp: false,
            };
        },
        //Passing data through multiple components, not able to use it here
        //You need to add inject: ['username'] to the component you want to use this in
        //provide: {
        //    username: "Teppo Testaaja",
        //}
        //If you need to show it in here and pass it to components you do this:
        provide() {
            return {
                username: this.usr
            }
        }
    };
</script>

<style>
    /*These are GLOBAL*/
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }

    .myh4 {
        color: orange;
    }
</style>
