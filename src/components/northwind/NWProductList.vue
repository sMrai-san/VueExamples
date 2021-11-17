<template>
    <div v-if="isAdding === false && isEditing === false">
        <button class="addProduct" @click="addProduct">Add Product</button>
        <hr />
    </div>
    <div v-show="isLoading">Loading products...</div>
    <div v-if="isEditing === false">
        <h3 v-if="errorMsg">{{errorMsg}}</h3>
        <div v-for="product in products" :key="product.productId">
            <h3>{{product.productId}} {{product.productName}}</h3>
            <p>{{product.unitPrice.toFixed(2)}} €</p>
            <button class="editProduct" href="#" @click=editProduct(product)>Edit</button>
            <button class="deleteProduct" href="#" @click=deleteProduct(product)>Delete</button>
            <hr />
        </div>
    </div>
    <div v-else>
        <NWProduct @closeEdit="closeTheEdit" :sProduct="selectedProduct" :addingProduct="isAdding" />
    </div>


</template>

<script>
    import axios from 'axios'
    import NWProduct from "./NWProduct.vue"

    export default {
        name: 'NWProductList',
        components: {
            NWProduct,
        },
        mounted() {
            this.loadProducts();
        },
        updated() {
            this.isLoading = false;
        },
        data() {
            return {
                isLoading: true,
                products: [],
                selectedProduct: {},
                errorMsg: '',
                isEditing: false,
                isAdding: false,
            }
        },
        methods: {
            loadProducts() {
                axios.get('https://yourazureapi.azurewebsites.net/nw/products/')
                    .then((response) => {
                        //console.log(response.data)
                        this.products = response.data; //populatin products 'array'
                    })
                    .catch((error) => {
                        //console.log(error)
                        this.errorMsg = 'Error retrieving data' + error
                    })
            },
            addProduct() {
                this.isEditing = true;
                this.isAdding = true;
            },
            editProduct(product) {
                this.selectedProduct = product;
                //console.log(this.selectedProduct);
                this.isEditing = true;
                this.isAdding = false;
            },
            deleteProduct(product) {
                //fast confirmation
                if (confirm('Are you sure you want to delete product: ' + product.productName + '?')) {
                    axios.delete('https://yourazureapi.azurewebsites.net/nw/products/' + product.productId)
                        .then(response => console.log(response))
                        .catch(error => console.log(error))
                    //filter the productlist to 'refresh' the list after delete
                    this.products = this.products.filter(p => p.productId != product.productId)
                }

            },
            closeTheEdit() {
                this.isEditing = false;
                this.loadProducts();
                this.isAdding = false;
            },
        },
    }
</script>

<style scoped>
    .addProduct {
        border-radius: 12px;
        background-color: forestgreen;
        color: white;
        padding: 0 16px 0 16px;
        margin: 12px 0 0 0;
        border-color: black;
    }

        .addProduct:hover {
            opacity: 0.6;
        }

    .editProduct {
        border-radius: 12px;
        background-color: cornflowerblue;
        width: 86px;
        border-color: black;
    }

        .editProduct:hover {
            opacity: 0.6;
        }

    .deleteProduct {
        border-radius: 12px;
        background-color: orangered;
        width: 86px;
        margin: 0 0 0 12px;
        border-color: black;
    }

        .deleteProduct:hover {
            opacity: 0.6;
        }
</style>