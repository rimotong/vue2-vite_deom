<template>
    <li>
        <label>
            <input type="checkbox" :checked="todo.done" @click="handle(todo.id)"/> <!-- :checked="todor.done"动态决定标签加不加 -->
            <!-- <input type="checkbox" v-model="todo.done"/>此代码也能实现功能，但不推荐使用，因为会修改props内容 -->
            <span v-show="!todo.isEdit">{{todo.title}}</span>
            <input type="text" v-show="todo.isEdit" value="todo.title" @blur="editBlur(todo,$event)" ref="title"/>
        </label>
        <button class="btn btn-danger" @click="strike(todo.id)">删除</button>
        <button v-show="!todo.isEdit" class="btn btn-edit" @click="edit(todo)">编辑</button>
    </li>
</template>

<script>
import pubsub from 'pubsub-js'
export default {
    name:"ltem",
    props:['todo','checktodo',],//'shanchu'
    methods:{
        handle(id){
            //组件将对应值的done值修改
            this.checktodo(id)
            console.log(this.todo.done)
        },
        strike(id){
            //confirm,根据用户交互决定为真为假
            if(confirm('确定删除吗？')){
                // this.shanchu(id)
                pubsub.publish('deleteTodo',id)
            }
        },
        //编辑
        edit(todo){
            if(Reflect.has(todo,'isEdit')){
                todo.isEdit = true
            }else{
                // this.$set(todo,'isEdit',true); vue2
            }
            this.$nextTick(function(){
                this.$refs.title.focus()
            })        
            // let vm = this
            // this.$set(todo,'isEdit',true); vue2
        },
        //失去焦点
        editBlur(todo,e){
            todo.isEdit = false
            if(!e.target.value.trim()) return
            pubsub.publish('blurTodo',todo.id,e.target.value)
        }
    },
}
</script>

<style scoped>
    li{
        list-style: none;
        height: 36px;
        line-height: 36px;
        padding: 0 5px;
        border-bottom: 1px solid #ddd;
    }
    li label{
        float: left;
        cursor: pointer;
    }
    li label li input{
        vertical-align: middle;
        margin-right: 6px;
        position: relative;
        top:-1px;
    }
    li button{
        float: right;
        display: none;
        margin-top: 3px;
    }
    li:before{
        content: initial;
    }
    li:last-child{
        border-bottom: none;
    }
    li:hover{
        background-color: #ddd;
    }
    li:hover button{
        display: block;
    }
</style>