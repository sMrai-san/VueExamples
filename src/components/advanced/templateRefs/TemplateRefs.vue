<template>
    <h2>Template Refs</h2>
    <div>
        <!--HOX! Mahdollinen lisätehtävä laittaa search -toiminto käyttöön!-->
        Search: <input type="text" ref="myInput" placeholder="autofocus on this input" />
    </div>
    <div>
        <PostList ref="postListRef"></PostList>
    </div>
</template>


<script>

    import PostList from '../requests/PostList.vue' //use ../ to go back in a directory structure

    export default {
        name: 'TemplateRefs',
        mounted() {
            //let's focus the cursor on pageload here:
            this.$refs.myInput.focus()
            console.log(this.$refs.postListRef)
        },
        components: {
            PostList
        },
    }
</script>

<style scoped>

</style>