<template>
    <div>
        <!--<button @click="loadPosts">Load Posts</button>-->
        <h3 v-if="errorMsg">{{errorMsg}}</h3>
        <div v-for="post in posts" :key="post.id">
        <h3>{{post.id}} {{post.title}}</h3>
        <p>{{post.body}}</p>
        <hr/>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'

    export default {
        name: 'PostList',
        components: {
        },
        created() {
            //loading the posts here!
            this.loadPosts()
        },
        data() {
            return {
                posts: [],
                errorMsg: '',
            }
        },
        methods: {
            loadPosts() {
                axios.get('https://jsonplaceholder.typicode.com/posts')
                    .then((response) => {
                        //console.log(response.data) //dev purposes
                        this.posts = response.data //let's populate the posts -array
                    })
                    .catch((error) => {
                        //console.log(error) //dev purposes
                        this.errorMsg = 'Error retrieving data' + error
                    })

            }
        },
    }
</script>

<style scoped>
</style>