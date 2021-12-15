<template>
    <div>
        <div class="todo-container">
            <div class="todo-wrap">
                <!-- 通过父组件给子组件绑定自定义事件，实现子给父传达数据  v-on:at="some"或ref="top"-->
                <top @redata="redata" @at="some"></top>  <!-- 传送函数至子组件 -->
                <list :todos="todos" :checktodo="checktodo" /> <!-- :shanchu="shanchu" -->
                <bot :todos='todos' @checkAlltodo='checkAlltodo' @clearAlltodo='clearAlltodo'/>
            </div>
        </div>
    </div>
</template>

<script>
import pubsub from 'pubsub-js'
import top from './top.vue'
import bot from './bot.vue'
import list from './list.vue'
import item from './item.vue'

export default {
    components:{
        top,bot,list,item
    },
    data() {
        return {
            todos:JSON.parse(localStorage.getItem('todos')) || []
            // [ 
            //     {id:'001',title:'抽烟',done:true},
            //     {id:'002',title:'喝酒',done:false},
            //     {id:'003',title:'烫头',done:true}
            // ]
        }
    },
    mounted() {
        this.pubId = pubsub.subscribe('deleteTodo',this.shanchu)
        this.pubId1 = pubsub.subscribe('blurTodo',this.blurTodo)
    },
    beforeDestroy() {
        pubsub.unsubscribe(this.pubId)
        pubsub.unsubscribe(this.pubId1)
    },
    methods:{
        some(name){
            console.log('收到了数据',name)
        },
        redata(val){
            this.todos.unshift(val) //数组前方添加数据
        },
        //勾选或取消勾选
        checktodo(id){
            this.todos.forEach((todo)=>{
                if(todo.id === id) todo.done = !todo.done
            })
        },
        //修改内容
        blurTodo(_,id,title){
            this.todos.forEach((todo)=>{
                if(todo.id === id) todo.title = title
            })
        },
        shanchu(_,id){
            this.todos = this.todos.filter((todo)=>{  //filter筛选，不改变原数组
                return todo.id !== id
            })
        },
        //全选
        checkAlltodo(done){
            this.todos.forEach((todo)=>{
                todo.done = done
            })            
        },
        //清除所有已完成
        clearAlltodo(){
            this.todos = this.todos.filter((todo)=>{  //filter筛选，不改变原数组
                return todo.done !== true
            })            
        }
    },
    // mounted() {
    //     this.$refs.top.$on('at',this.some)
    // },
    watch:{
        todos:{
            deep:true,
            handler(value){
                localStorage.setItem('todos',JSON.stringify(value))
            }
        }
        // todos(val){
        //     localStorage.setItem('todos',JSON.stringify(val))
        // }
    }
}
</script>

<style>
    body{
        background: seashell;
    }
    .btn{
        display: inline-block;
        padding: 4px 12px;
        margin-bottom: 0;
        font-size: 14px;
        line-height: 20px;
        text-align: center;
        vertical-align: middle;
        cursor: pointer;
        box-shadow: inset 0 1px slategray 0 1px 2px black;
        border-radius: 4px;
    }
    .btn-danger{
        color: #fff;
        background-color: #da4f49;
        border: 1px solid #bd362f;
    }
    .btn-edit{
        color: #fff;
        background-color: #47c2fc;
        border: 1px solid #35ade6;
        margin-right: 5px;
    }
    .btn-danger:hover{
        color: #fff;
        background-color: #bd362f;
    }
    .btn:focus{
        outline: none;
    }
    .todo-container{
        width: 600px;
        margin: 0 auto;
    }
    .todo-container .todo-wrap{
        padding: 10px;
        border: 1px solid #ddd;
        border-radius: 5px;
    }
</style>