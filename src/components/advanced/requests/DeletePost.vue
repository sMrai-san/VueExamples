
<template>
    <div>
        <h4>Delete Post</h4>
        <!--@submit.prevents the form from refreshin on button click-->
        <form @submit.prevent="deletePost">
            <div>
                <label for="id">Post ID:</label>
                <input type="text" id="id" v-model="id" />
            </div>
            <button>Delete Post</button>
            <h5 style="color: green;" v-if="successMsg">{{successMsg}}</h5>
            <h5 style="color: red;" v-if="errorMsg">{{errorMsg}}</h5>
        </form>
    </div>
</template>

<script>
    /*In our example we use axios*/
    /* https://vuejs.org/v2/cookbook/using-axios-to-consume-apis.html */
    import axios from 'axios';

    export default {
        name: 'DeletePost',
        data() {
            return {
                id: '',
                successMsg: '',
                errorMsg: '',
            }
        },    
        methods: {
            deletePost() {
                axios.delete('https://jsonplaceholder.typicode.com/posts/' + this.id)
                    .then(response => {
                        console.log(response) //dev purposes
                        this.successMsg = "Succesfully deleted: " + this.id
                        this.errorMsg = ""
                    })
                    .catch(error => {
                        console.log(error) //dev purposes
                        this.errorMsg = "Error occurred while deleting: " + this.id + " " + error
                        this.successMsg = ""
                    })
            }
        },
    }
</script>

<style scoped>
</style>