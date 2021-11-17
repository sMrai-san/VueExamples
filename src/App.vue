<!--This is the main/root VUE.js component containing all the other components-->
<template>
    <!--**********************************************************-->
    <!--NAVBAR STARTS HERE********(plain css)*********************-->
    <!--Navbar base code: https://codepen.io/andornagy/pen/RNeydj -->
    <!--**********************************************************-->
    <nav>
        <div id="logo">
            <!--By adding !important to bg-color we can disable hover effect | Centering vertically with line-height inside div-->
            <a style="line-height: 23px; background-color: #3397DE !important; " href="#" @click.prevent="gotoFrontPage()">
                <img alt="careeriaVueLogo" src="./images/careeriaLogo.png" style="width: 100px; padding: 2px;" />
            </a>
        </div>

        <label for="drop" class="toggle">&#9776;</label>
        <input type="checkbox" id="drop" />
        <ul class="menu">
            <!--<li><a href="#">VUE HOME</a></li>-->
            <li>
                <!-- VUE BASICS -->
                <label for="drop-1" class="toggle">Basics</label>
                <a href="#">Basics</a>
                <input type="checkbox" id="drop-1" />
                <ul>
                    <!--"For example, v-on:click.prevent automatically calls $event.preventDefault() for you. So the below app will have an <a> tag that does not redirect the user when clicked."-->
                    <!--https://masteringjs.io/tutorials/vue/click-->
                    <li><a href="#" @click.prevent="activePage ='Basics'">Basics</a></li>
                    <li><a href="#" @click.prevent="activePage ='Conditions'">Conditions</a></li>
                    <li><a href="#" @click.prevent="activePage ='Lists'">Lists</a></li>
                    <li><a href="#" @click.prevent="activePage ='Methods'">Methods</a></li>
                    <li><a href="#" @click.prevent="activePage ='Events'">Events</a></li>
                    <li><a href="#" @click.prevent="activePage ='Forms'">Forms</a></li>
                    <li><a href="#" @click.prevent="activePage ='Modifiers'">Modifiers</a></li>
                    <li><a href="#" @click.prevent="activePage ='BonusDirectives'">Bonus directives</a></li>
                    <li><a href="#" @click.prevent="activePage ='ComputedProperties'">Computed Properties</a></li>
                    <li><a href="#" @click.prevent="activePage ='Watchers'">Watchers</a></li>
                    <li><a href="#" @click.prevent="activePage ='ComponentProps'">Component props</a></li>
                </ul>

            </li>
            <li>
                <!-- BASICS ++ -->
                <label for="drop-2" class="toggle">Basics +</label>
                <a href="#">Basics +</a>
                <input type="checkbox" id="drop-2" />
                <ul>
                    <li><a href="#" @click.prevent="activePage ='ComponentA'">Passing Data</a></li>
                    <li><a href="#" @click.prevent="activePage ='ComponentEvents'">Component Events</a></li>
                    <li><a href="#" @click.prevent="activePage ='ComponentsVModel'">Components V-MODEL</a></li>
                    <li><a href="#" @click.prevent="activePage ='Slots'">Slots</a></li>
                    <li><a href="#" @click.prevent="activePage ='NameList'">NameList (slots)</a></li>
                    <li><a href="#" @click.prevent="activePage ='ChildStyles'">Component Styles</a></li>
                </ul>
            </li>
            <li>
                <!-- ADVANCED -->
                <label for="drop-3" class="toggle">Advanced</label>
                <a href="#">Advanced</a>
                <input type="checkbox" id="drop-3" />
                <ul>
                    <li><a href="#" @click.prevent="activePage ='DynamicComponents'">Dynamic Components</a></li>
                    <li><a href="#" @click.prevent="activePage ='Portal'">Teleporting</a></li>
                    <li><a href="#" @click.prevent="activePage ='HTTP'">HTTP</a></li>
                    <li><a href="#" @click.prevent="activePage ='LifeCycles'">Lifecycle Hooks</a></li>
                    <li><a href="#" @click.prevent="activePage ='TemplateRefs'">Template Refs</a></li>
                    <li><a href="#" @click.prevent="activePage ='Mixins'">Mixins</a></li>
                </ul>
            </li>
            <!-- COMPOSITION API -->
            <li>

                <a href="#" @click.prevent="activePage ='CompositionAPI'">Composition API</a>
                <input type="checkbox" id="drop-4" />
            </li>
            <!-- NORTHWIND CRUD -->
            <li>
                <a href="#" @click.prevent="activePage ='NW'">Northwind</a>
            </li>
            <li><a href="#"></a></li>
        </ul>
    </nav>


    <!--********************************************************-->
    <!--COMPONENTS STARTS HERE:-->
    <!--*****we need to use the basic way to achieve page change-->
    <!--*****better way explained in DynamicComponents**********-->
    <!--********************************************************-->
    <div class="components">
        <!--Default page:-->
        <div><Home v-if="activePage === 'Home'" /></div>
        <!--********************************************************-->
        <!--BASICS-->
        <div><Basics v-if="activePage === 'Basics'" /></div>
        <div v-if="activePage === 'Conditions'"><Conditions /></div>
        <div v-if="activePage === 'Lists'"><Lists /></div>
        <div v-if="activePage === 'Methods'"><Methods /></div>
        <div v-if="activePage === 'Events'"><Events /></div>
        <div v-if="activePage === 'Forms'"><Forms /></div>
        <div v-if="activePage === 'Modifiers'"><Modifiers /></div>
        <div v-if="activePage === 'BonusDirectives'"><BonusDirectives /></div>
        <div v-if="activePage === 'ComputedProperties'"><ComputedProperties /></div>
        <div v-if="activePage === 'Watchers'"><Watchers /></div>
        <div v-if="activePage === 'ComponentProps'">
            <ComponentProps name="John"
                            yourOwnProp="Jack"
                            anyPropCanBeNamedHere="testData from App.vue"
                            title="ObjectProp passed from root component App.vue"
                            :myNumber="1"
                            :myBool="true"
                            id="nonprop" /><!--You have to add : for vue to understand that there's a number within "" -->
        </div>
        <!--********************************************************-->
        <!--BASICS++-->
        <div v-if="activePage === 'ComponentA'">
            <h2>Passing Data</h2>
            <ComponentA />
            <p>
                From App.vue: The variable in provided -section {{username}} will not work,
                we need to make a new variable within data() in App.vue
                and pass that variable to provided section: {{usr}}
            </p>
        </div>
        <div v-if="activePage ==='ComponentEvents'"><ComponentEvents /></div>
        <div v-if="activePage === 'ComponentsVModel'"><ComponentsVModel /></div>
        <div v-if="activePage === 'Slots'">
            <h2>Slots</h2>
            <!--<CardSlots content="This is from App.vue" />-->
            <Slots>
                Card content from App.vue
            </Slots>
            <Slots>
                <template v-slot:header>
                    <h2>Header from App.vue</h2>
                </template>
                <template v-slot:default>
                    Content from App.vue
                </template>
                <template v-slot:footer>
                    Footer from App.vue
                </template>
            </Slots>
        </div>
        <div v-if="activePage === 'NameList'">
            <NameList>
                <template v-slot:default="myProps">
                    {{myProps.firstName}} {{myProps.lastName}}
                </template>
                <template v-slot:mySlot="myProps">
                    {{myProps.firstName}}
                </template>
            </NameList>
        </div>
        <div v-if="activePage === 'ChildStyles'">
            <h2>Component Styles</h2>
            <h4 class="myh4">App.vue component text</h4>
            <ChildStyles>
                <template v-slot:default>
                    <h4 class="myh4">ChildStyles.vue component text (in a slot, but using App.vue styles)</h4>
                </template>
            </ChildStyles>
        </div>
        <!--********************************************************-->
        <!--ADVANCED-->
        <div v-if="activePage === 'DynamicComponents'"><DynamicComponents /></div>
        <div v-if="activePage === 'Portal'">
            <div><h2>Teleporting</h2></div>
            <teleport to="#portalRoot">
                <Portal />
            </teleport>
        </div>
        <div v-if="activePage === 'HTTP'"><HTTP /></div>
        <div v-if="activePage === 'LifeCycles'"><LifeCycles /></div>
        <div v-if="activePage === 'TemplateRefs'"><TemplateRefs /></div>
        <div v-if="activePage === 'Mixins'"><Mixins /></div>
        <!--********************************************************-->
        <!--COMPOSITION API-->
        <div v-if="activePage === 'CompositionAPI'"><CompositionAPI /></div>
        <!--********************************************************-->
        <!--NORTHWIND CRUD-->
        <div v-if="activePage === 'NW'"><NW /></div>
    </div>
</template>

<script>
    /*Importing our components here:*/
    import Home from "./components/Home.vue";
    /*BASICS*/
    import Basics from "./components/basics/Basics.vue";
    import Conditions from "./components/basics/Conditions.vue";
    import Lists from "./components/basics/Lists.vue";
    import Methods from "./components/basics/Methods.vue";
    import Events from "./components/basics/Events.vue";
    import Forms from "./components/basics/Forms.vue";
    import Modifiers from "./components/basics/Modifiers.vue";
    import BonusDirectives from "./components/basics/BonusDirectives.vue";
    import ComputedProperties from "./components/basics/ComputedProperties.vue";
    import Watchers from "./components/basics/Watchers.vue";
    import ComponentProps from "./components/basics/ComponentProps.vue";
    /*BASIC++*/
    import ComponentA from "./components/basicsAdvanced/passingData/ComponentA.vue";
    import ComponentEvents from "./components/basicsAdvanced/componentEvents/ComponentEvents.vue";
    import ComponentsVModel from "./components/basicsAdvanced/componentEvents/ComponentsVModel.vue";
    import Slots from "./components/basicsAdvanced/slots/Card.vue";
    import NameList from "./components/basicsAdvanced/slots/NameList.vue";
    import ChildStyles from "./components/basicsAdvanced/componentStyles/ChildStyles.vue";
    /*ADVANCED*/
    import DynamicComponents from "./components/advanced/dynamicComponents/Main.vue";
    import Portal from "./components/advanced/teleporting/Portal.vue";
    import HTTP from "./components/advanced/requests/HTTP.vue";
    import LifeCycles from "./components/advanced/lifecycleHooks/Master.vue";
    import TemplateRefs from "./components/advanced/templateRefs/TemplateRefs.vue";
    import Mixins from "./components/advanced/reusabilityMixins/Mixins.vue";
    /*COMPOSITION API*/
    import CompositionAPI from "./components/compositionAPI/CompositionAPI.vue";
    /*NORTHWIND CRUD*/
    import NW from "./components/northwind/NWMain.vue";

    export default {
        name: 'App',
        /*Specifying the components we will use here:*/
        components: {
            Home,
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
            Slots,
            NameList,
            ChildStyles,
            DynamicComponents,
            Portal,
            HTTP,
            LifeCycles,
            TemplateRefs,
            Mixins,
            CompositionAPI,
            NW,
        },
        data() {
            return {
                testData: 'testdata string',
                usr: 'Teppo Testaaja',
                activePage: 'Home', //default for activePage
            };
        },
        methods: {
            gotoFrontPage() {
                location.reload(); //reset our single-page app
            },
        },

        //Passing data through multiple components:
        //You need to add inject: ['username'] to the component you want to use this in
        //provide: {
        //    username: "Teppo Testaaja",
        //}

        //If you need to show it in here and pass it to components you can do this:
        provide() {
            return {
                username: this.usr
            }
        },
    };
</script>

<style>
    /*GLOBAL styles*/
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }

    .myh4 {
        color: orange;
    }
    .components{
        margin: 20px 0 0 0;
    }
    h2{
        margin: 0 0 32px 0;
    }

    /*Navbar styles imported from css file */
    @import './assets/styles/navbar.css';
</style>
