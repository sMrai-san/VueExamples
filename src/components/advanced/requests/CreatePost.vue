
<template>
    <div>
        <h4>Create Post</h4>
        <!--@submit.prevents the form from refreshin on button click-->
        <form @submit.prevent="createPost">
            <div>
                <label for="userId">User ID:</label>
                <input type="text" id="userId" v-model="formData.userId" />
            </div>
            <div>
                <label for="title">Title:</label>
                <input type="text" id="title" v-model="formData.title" />
            </div>
            <div>
                <label for="body">Body:</label>
                <input type="text" id="body" v-model="formData.body" />
            </div>
            <button>Create Post</button>
        </form>
    </div>
</template>

<script>
    /*In our example we use axios*/
    /* https://vuejs.org/v2/cookbook/using-axios-to-consume-apis.html */
    import axios from 'axios';

    export default {
        name: 'CreatePost',
        data() {
            return {
                formData: {
                    userId: '',
                    title: '',
                    body: '',

                }
            }
        },
        methods: {
            createPost() {
                axios.post('https://jsonplaceholder.typicode.com/posts', this.formData)
                    .then(response => console.log(response))
                    .catch(error => console.log(error))
            }
        }
    }
</script>

<style scoped>

</style>