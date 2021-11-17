<template>
    <div class="card">
        <!--<p>{{content}}</p>-->
        <!--<slot>Default content in Card.vue</slot>-->
        <div id="card-header">
            <slot name="header"></slot>
        </div>
        <div id="card-content">
            <slot></slot>
        </div>
        <div id="card-footer">
            <slot name="footer"></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Card',
        props: ['content'],

    }
</script>

<style scoped>
    /*https://www.w3schools.com/howto/howto_css_cards.asp*/
    .card {
        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
        transition: 0.3s;
        width: 50%;
        margin: auto;
        margin-top: 12px;
        z-index: -1;
    }

        .card:hover {
            box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
        }

</style>