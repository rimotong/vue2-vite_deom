<template>
    <section class="jumbotron">
        <h3 class="jumbotron-heading">搜素github用户名</h3>
        <div>
            <input type="text" placeholder="search" v-model="keyval"/>&nbsp;
            <button @click="getusers">搜素</button>
        </div>
    </section>
</template>

<script>
import axios from 'axios'
import pubsub from 'pubsub-js'
export default {
    data() {
        return {
            keyval:'',
            tabledata:[]
        }
    },
    methods: {
        getusers(){
            axios.get(`https://api.github.com/search/users?q=${this.keyval}`).then(
                (res) => {
                    this.tabledata = res.data.items
                    // console.log(this.tabledata)
                    pubsub.publish('dataTodo',this.tabledata)
                },
                error => {
                    console.log(error.message)
                }
            )
        }
    },
}
</script>

<style>

</style>