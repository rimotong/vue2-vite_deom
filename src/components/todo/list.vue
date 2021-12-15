<template>
    <ul class="todo-main">
        <item v-for="todo in todos" 
            :key="todo.id" 
            :todo="todo" 
            :checktodo="checktodo"
            ></item><!-- :shanchu="shanchu" -->
    </ul>
</template>

<script>
import item from './item.vue';

export default {
    name:"list",
    components:{item},
    // data() {
    //     return {
    //         todos:[
    //             {id:'001',title:'抽烟',done:true},
    //             {id:'002',title:'喝酒',done:false},
    //             {id:'003',title:'烫头',done:true}
    //         ]
    //     }
    // },
    props:['todos','checktodo',] //'shanchu'
}
</script>

<style scoped>
    .todo-main{
        margin-left: 0px;
        border: 1px solid #ddd;
        border-radius: 2px;
        padding: 0px;
    }
    .tode-empty{
        height: 40px;
        line-height: 40px;
        border: 1px solid #ddd;
        border-radius: 2px;
        padding-left: 5px;
        margin-top: 10px;
    }
</style>