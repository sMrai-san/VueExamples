<template>
    <!--WE ARE USING THIS COMPONENT FOR ADDING AND EDITING PRODUCT-->

    <!--Edit Product-->
    <div v-if="addingProduct === false">
        <h4>Edit Product: {{sProduct.productName}}</h4>

        <!--@submit.prevents the form from refreshin on button click-->
        <form @submit.prevent="updateProduct">
            <div>
                <label for="productId">ProductID:</label>
                <input disabled type="text" id="productId" v-model.number="formDataEdit.productId" />
            </div>
            <div>
                <label for="productName">Name:</label>
                <input type="text" id="productName" v-model="formDataEdit.productName" />
            </div>
            <div>
                <label for="unitPrice">Price:</label>
                <input type="text" id="unitPrice" v-model.number="formDataEdit.unitPrice" />
            </div>
            <button v-if="notUpdated" class="updateBtn">Update Product</button>
        </form>
        <button class="closeBtn" ref="updateOnUpdate" @click="$emit('closeEdit')">Close Edit</button>
        <h5 v-if="!notUpdated" class="updateSuccess">{{msg}}</h5>
    </div>

    <!--Add Product-->
    <div v-else>
        <h4>Add Product:</h4>
        <!--@submit.prevents the form from refreshin on button click-->
        <form @submit.prevent="addProduct">
            <div>
                <label for="productNameAdd">Name:</label>
                <input type="text" id="productNameAdd" v-model="formDataAdd.productName" :disabled="!notAdded" />
            </div>
            <div>
                <label for="unitPriceAdd">Price:</label>
                <input type="text" id="unitPriceAdd" v-model.number="formDataAdd.unitPrice" :disabled="!notAdded" />
            </div>
            <button v-if="notAdded" class="addProduct">Add Product</button>
        </form>
        <button class="closeBtn" ref="updateOnUpdate" @click="$emit('closeEdit')">Close</button>
        <h5 v-if="!notAdded" class="updateSuccess">{{msg}}</h5>
    </div>
</template>

<script>
    import axios from 'axios';

    export default {
        name: 'NWProduct',
        props: {
            sProduct: {
                type: Object
            },
            addingProduct: {
                type: Boolean
            },
        },
        mounted() {
            this.fillProduct();
        },
        data() {
            return {
                formDataEdit: {
                    productId: '',
                    productName: '',
                    unitPrice: 0,
                },
                formDataAdd: {
                    productName: '',
                    unitPrice: 0,
                },
                msg: '',
                notUpdated: true,
                notAdded: true,
            }
        },
        emits: ['closeEdit'],
        methods: {
            updateProduct() {
                axios.put('https://yourazureapi.azurewebsites.net/nw/products/' + this.formDataEdit.productId, this.formDataEdit)
                    //.then(response => console.log(response))
                    .catch(error => console.log(error))
                this.msg = "Product " + this.formDataEdit.productName + " updated succesfully!";
                this.notUpdated = false;
            },
            addProduct() {
                axios.post('https://yourazureapi.azurewebsites.net/nw/products/', this.formDataAdd)
                    //.then(response => console.log(response))
                    .catch(error => console.log(error))
                this.msg = "Product " + this.formDataAdd.productName + " added succesfully!";
                this.notAdded = false;
            },
            fillProduct() {
                //product info from NWProductList.vue for edit
                if (this.addingProduct === false) {
                    this.formDataEdit.productId = this.sProduct.productId;
                    this.formDataEdit.productName = this.sProduct.productName;
                    this.formDataEdit.unitPrice = this.sProduct.unitPrice;
                }

            },
        },

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

    label {
        font-weight: bold;
    }

    button{
        margin-top: 4px;
    }

    /*BUTTONS*/
    .updateBtn {
        border-radius: 12px;
        background-color: cornflowerblue;
        border-color: black;
    }
    .closeBtn {
        border-radius: 12px;
        background-color: orangered;
        border-color: black;
    }
    .updateSuccess {
        background-color: azure;
        margin-top: 4px;
        padding: 4px;
        color: forestgreen;
        border-color: black;
    }
    .addProduct {
        border-radius: 12px;
        background-color: forestgreen;
        color: white;
        border-color: black;
    }
</style>