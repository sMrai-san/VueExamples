
<template>
    <div>
        <h4>Update Post</h4>
        <!--@submit.prevents the form from refreshin on button click-->
        <form @submit.prevent="updatePost">
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
            <button>Update Post</button>
        </form>
    </div>
</template>

<script>
    /*In our example we use axios*/
    /* https://vuejs.org/v2/cookbook/using-axios-to-consume-apis.html */
    import axios from 'axios';

    export default {
        name: 'UpdatePost',
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
            updatePost() {
                axios.put('https://jsonplaceholder.typicode.com/posts/1', this.formData)
                    .then(response => console.log(response))
                    .catch(error => console.log(error))
            }
        }
    }
</script>

<style scoped>
</style>