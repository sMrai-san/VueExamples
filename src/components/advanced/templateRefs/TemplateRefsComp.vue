<template>
    <div><h2>Template Refs (cAPI)</h2></div>
    <!--HOX! Tämä kuuluu composition API:in, mutta vertailun helpottamiseksi samassa kansiossa kuin perus templateRefs-->
    <p>Demonstrating focus() with ref! from ~/advanced/templateRefs/TemplateRefsComp.vue</p>
    <p style="color: orange;">Compare TemplateRefsComp.vue to ~/advanced/templateRefs/TemplateRefs.vue</p>
    <div>
        <input type="text" ref="myInput" />
    </div>
    <div>
        <input type="text" ref="inputRef" />
    </div>
</template>


<script>
    import { ref, onMounted } from 'vue'

    export default {
        name: 'TemplateRefsComp',
        //Composition focus:
        setup() {
            onMounted(() => {
                inputRef.value.focus() //focusing on inputRef when mounted
            })
            const inputRef = ref(null)
            return {
                inputRef
            }
        },

        //Basic focus:
        //mounted() {
        //    //let's focus the cursor on pageload here:
        //    this.$refs.myInput.focus()
        //    console.log(this.$refs.postListRef)
        //},
    }
</script>

<style scoped>
</style>