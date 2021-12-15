<template>
    <div class="todo-footer" v-show="todos.length">
        <label>
            <!-- <input type="checkbox" :checked="isAll" @click="checkAll"/> -->
            <input type="checkbox" v-model="isAll"/>
        </label>
        <span>
            <span>已完成{{total}}</span> / 全部{{todos.length}}
        </span>
        <button class="btn btn-danger" @click="remove">清除已完成任务</button>
    </div>
</template>

<script>
import pubsub from 'pubsub-js'
export default {
    name:"bot",
    props:['todos',
    // 'checkAlltodo','clearAlltodo'
    ],
    mounted() {
        this.pubId = pubsub.subscribe('name',(msgname,data)=>{
            console.log('收到了消息',msgname,data)
        })
    },
    methods:{
        // checkAll(e){
        //     this.checkAlltodo(e.target.checked)
        // },
        remove(){
            this.$emit('clearAlltodo')
        },
    },
    computed:{
        // isAll(){
        //     return this.total === this.todos.length && this.todos.length > 0
        // },
        isAll:{
            get(){
                return this.total === this.todos.length && this.todos.length > 0
            },
            set(val){
                this.$emit('checkAlltodo',val)
            }
        },
        //计算方法1
        total(){
            let i = 0;
            this.todos.forEach((todo) => {  //forEach循环
                if(todo.done) i++
            })
            return i
        }
        // totol(){
        //     //reduce方法
        //     this.todos.reduce((pre,current)=>{
        //         // console.log('@',pre,current)
        //         return pre + (current.done ? 1 : 0)
        //     },0)
        // }
    },
    beforeDestroy() {
        pubsub.unsubscribe(this.pubId)
    },
}
</script>

<style scoped>
    .todo-footer{
        height: 40px;
        line-height: 40px;
        padding-left: 6px;
        margin-top: 5px;
    }
    .todo-footer label{
        display: inline-block;
        margin-right: 20px;
        cursor: pointer;
    }
    .todo-footer label input{
        position: relative;
        top: -1px;
        vertical-align: middle;
        margin-right: 5px;
    }
    .todo-footer button{
        float: right;
        margin-top: 5px;
    }
</style>