
<template>
    <h2>HTTP requests</h2>
    <div style="width: 50%; margin: auto;">
        <p>Examples using: <a href="https://jsonplaceholder.typicode.com/">https://jsonplaceholder.typicode.com/</a></p>
        <CreatePost />
        <p style="color: orange">//check console</p>
        <hr />
        <UpdatePost />
        <p style="color: orange">//check console</p>
        <hr />
        <DeletePost />
        <p style="color: orange">//check console</p>
        <hr />
        <PostList />

    </div>
</template>

<script>
    import PostList from './PostList.vue';
    import CreatePost from './CreatePost.vue';
    import UpdatePost from './UpdatePost.vue';
    import DeletePost from './DeletePost.vue';

    export default {
        name: 'HTTP',
        components: {
            PostList,
            CreatePost,
            UpdatePost,
            DeletePost,
        },
        data() {
            return {

            }
        }
    }
</script>

<style scoped>
    /* https://www.w3schools.com/css/css_form.asp */
    input[type=text], select {
        width: 100%;
        padding: 12px 20px;
        margin: 8px 0;
        display: inline-block;
        border: 1px solid #ccc;
        border-radius: 4px;
        box-sizing: border-box;
    }

    input[type=submit] {
        width: 100%;
        background-color: #4CAF50;
        color: white;
        padding: 14px 20px;
        margin: 8px 0;
        border: none;
        border-radius: 4px;
        cursor: pointer;
    }

        input[type=submit]:hover {
            background-color: #45a049;
        }
    div {
        text-align: left;
        border-radius: 5px;
        background-color: #f2f2f2;
        padding: 2px;
    }
    label{
        font-weight: bold;
    }
</style>