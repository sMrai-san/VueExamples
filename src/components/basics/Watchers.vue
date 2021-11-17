<template>
    <div><h2>Watchers</h2></div>
    <h5>Volume Tracker (0-20)</h5>
    <p>Current Volume {{volume}}</p>
    <div>
        <button @click="volume +=1">Increase</button>
        <button @click="volume -=1">Decrease</button>
        <p style="color: orange;">Watcher will invoke when increasing to 10 not when decreasing</p>
    </div>

    <h5>Watcher binding using immediate and deep</h5>
    <input type="text" v-model="movie" />
    <input type="text" v-model="movieInfo.title" />
    <input type="text" v-model="movieInfo.actor" />
    <div><button @click="movieList.push(movie)">Add Movie</button></div>
    <p style="color: orange;">Add custom movie to array //check console</p>

</template>

<script>
    export default {
        name: 'Watchers',
        data() {
            return {
                volume: 0,
                movie: 'Bad Taste',
                movieInfo: {
                    title: '',
                    actor: '',
                },
                movieList:["Robocop","Street fighter"]
            };
        },
        methods: {

        },
        computed: {

        },
        /*Adding watcher here*/
        watch: {
            volume(newValue, oldValue) {
                /*we are able to check the newvalue and oldvalue, these values are automatically brought to watcher*/
                if (newValue > oldValue && newValue == 10) {
                    alert("Whoops that's loud. Volume is now: " + this.volume)
                }
            },

            /*This will not run initially, but dynamically*/
            //movie(newValue) {
            //    console.log(`Calling watcher movie() with movie name = ${newValue}`)
            //}
            movie: {
                handler(newValue) {
                    console.log(`Calling watcher immediate with movie name = ${newValue}`)
                },
                immediate: true /*immediate runs initially*/
            },
            movieInfo: {
                handler(newValue) {
                    console.log(`Calling watcher with movie info title = ${newValue.title} and actor = ${newValue.actor}`)
                },
                deep: true, /*This reaches within an object or array*/
            },
            movieList: {
                handler(newValue) {
                    console.log(`Updated array ${newValue}`)
                },
                deep: true,/*This reaches within an object or array*/
            },
        }
    };
</script>

<style scoped>

</style>