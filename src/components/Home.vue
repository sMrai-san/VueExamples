<template>
    <div>
        <div class="codeContainer">
            <h3 style="background-color:#3397DE; border-radius: 4px; padding: 12px; color: #FFF;">Careeria VUE.js examples</h3>
            <div class="myCode">
                <p style="font-weight: bold;">Basic Vue page structure</p>
                <pre><code>{{codeTemplate}}</code></pre>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Home',
        data() {
            return {
                codeTemplate:
`<template>
    <div>
        <h2>Hello Maailma<h2>
        <p class="myStyle">{{exampleString}}</p>
    </div>
</template>

<script>
export default {
    name: 'Home',
    data() {
        return {
            exampleString: 'Moro Maailma'
            }
        },
    }
<//script>

<style scoped>
    .myStyle{
        margin: 30px 0 0 0;
    }
</style>
`,
            }
        },
    }
</script>

<style scoped>
    .codeContainer {
        margin: 0 auto;
        width: 450px;
    }
    .myCode {
        margin: 20px 0 0 0;
        padding: 12px;
        text-align: left;
        border-left: 1px solid;
    }
</style>