<template>
    <div style="margin-left: 36px;">
        <h2>Portal Component</h2>
        <p>This component is teleporting to ~/public/index.html</p>
        <div>
        <h5>index.html:</h5>
            <p>
            &lt;div id="portalRoot"&gt;&lt;/div&gt;
            </p>
        </div>
        <div>
            <h5>App.vue:</h5>
            <p>
                &lt;teleport to="#portalRoot"&gt;<br />&nbsp;&nbsp;&nbsp;&nbsp;&lt;Portal /&gt;<br />&lt;/teleport&gt;
            </p>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Portal',
        components: {
        },
        data() {
            return {

            }
        }
    }
</script>

<style scoped>
</style>