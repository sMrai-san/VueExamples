<template>
    <div><h1 class="underline">Basics</h1></div>
    <!--TEXT BINDING-->
    <div>{{greet}}{{name}}</div>
    <div v-text="channel" class="boldered"></div>

    <!--HTML BINDING-->
    <div v-html="htmltags"></div>

    <!--ATTRIBUTE BINDING-->
    <h2 :id="headingId">Heading</h2>
    <button :disabled="isDisabled">Bind</button>

    <!--CLASS BINDING-->
    <h4 :class="status" class="underline">Underlined text with static and dynamic class combined</h4>
    <h4 :class="isPromoted && 'promoted'" class="underline">Underlined text. If isPromoted is true text is italic</h4>
    <h2 :class="isSoldout ? 'soldOut' : 'new'">If isSoldout is true this is red</h2>
    <h4 :class="['new', 'promoted']">Classes added in array!</h4>
    <h4 :class="[isPromoted && 'promoted', isSoldout ? 'soldOut' : 'new' ]">Conditional array classes!</h4>
    <h5 :class="{
        promoted: isPromoted,
        new: !isSoldout,
        'soldOut': isSoldout,
        }">
        Conditional
    </h5>

    <!--STYLES BINDING-->
    <h4 :style="{
        'color': highlightColor,
        'font-size': headerSize + 'px'
        }">
        Binding color and font-size to this tag
    </h4>
    <h4 :style="headerStyleObject">Same but built in data return. </h4>
    <div :style="[baseStyleObject, successStyleObject]">Array of Style objects used here</div>
    <div :style="[baseStyleObject, dangerStyleObject]">Array of Style objects used here</div>
</template>

<script>
    export default {
        name: 'Basics',
        data() {
            return {
                greet: "This is ",
                name: "my text",
                channel: "Careeria (using static class)",
                htmltags: "<i>Italic text from data() using i-tag!</i>",
                headingId: "heading",
                isDisabled: true,
                status: "danger",
                isPromoted: true,
                isSoldout: true,
                highlightColor: 'orange',
                headerSize: 32,
                headerStyleObject: { 'color': 'orange', 'font-size': '32px', 'margin-top': '12px' },
                baseStyleObject: { 'font-size': '32px', 'padding': '12px' },
                successStyleObject: { 'color': 'green', 'border': '1px solid green', 'background-color': 'lightgreen' },
                dangerStyleObject: { 'color': 'white', 'border': '1px solid green', 'background-color': 'red' },
            };
        },
    };
</script>

<style scoped>
    .boldered {
        font-weight: bold;
        margin-top: 12px;
    }

    .underline {
        text-decoration: underline;
    }

    .danger {
        color: orangered;
    }

    .success {
        color: forestgreen;
    }

    .promoted {
        font-style: italic;
    }

    .new {
        color: blue;
    }

    .soldOut {
        color: red;
    }
</style>