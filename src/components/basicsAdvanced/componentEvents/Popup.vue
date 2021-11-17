<template>
    <div>
        <hr />
        <p>This is a popup</p>
        <input type="text" v-model="name" />
        <button @click="$emit('closePopup', name)">Close Popup</button>
        <hr />
    </div>
</template>

<script>
    export default {
        name: 'Popup',
        //emits: ['closePopup'],
        //adding validation:
        emits: {
            closePopup: (name) => {
                if (!name) {
                    alert("Write a name!")
                    return false
                }
                else {
                    return true
                }
            }
        },
        data() {
            return{
                name: '',
            }
        }
    }
</script>

<style scoped>

</style>