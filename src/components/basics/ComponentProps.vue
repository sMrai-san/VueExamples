<template>
    <div>
        <h2>Component props</h2>
        <p>Hello {{name}} and {{yourOwnProp}}</p>
        <p style="font-weight: bold">{{anyPropCanBeNamedHere}}</p>
        <h5>{{title}}</h5>
        <p>
            My bool is {{myBool}}
            <br />
            My bool is set to {{myBool ? 'to true' : 'to false'}}
        </p>
        <p>My number is: {{myNumber}}</p>
        <hr>
        <p style="color:orange;">Required {{requiredProp}} //check console</p>
        <p>Default if prop not passed: {{defaultNoProp}}</p>
        <hr>
        <p>Non-prop attributes:</p>
        <h2 v-bind="$attrs">id is applied to this h2 //inspect element!</h2>
    </div>
</template>

<script>
    export default {
        name: 'ComponentProps',
        //props: ['name', 'yourOwnProp', 'anyPropCanBeNamedHere'], //props array non-specific (ei tyypitetyt)
        props: {
            name: String,
            yourOwnProp: String,
            anyPropCanBeNamedHere: Number, //this will invoke type check error because we are passing string not a number
            title: String,
            myNumber: Number,
            myBool: Boolean,
            requiredProp: { required: true }, //this will invoke required prop error because we are not passing requiredProp -prop.
            defaultNoProp: { default: "This is default value" }, //you can add a default value if there is no prop
        },//props specified
        inheritAttrs: false, //non-props are able to be used where v-bind is given
        //without this the default is true and the non-prop will be used in the most outer div too!
    };
</script>

<style scoped>
</style>