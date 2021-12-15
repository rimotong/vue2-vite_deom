<template>
    <div class="todo-header">
        <input type="text" placeholder="输入您的任务名称" @keyup.enter="add" v-model="text"/>
    </div>
    <button @click="com">数据传递至app</button>
    <!-- <button @click="unbind">解绑事件</button> -->
</template>

<script>
import {nanoid}  from 'nanoid'
import pubsub from 'pubsub-js'  //订阅与发布
export default {
    name:"top",
    data() {
        return {
            text:'',
            name:'wudi'
        }
    },
    // props:['redata'],

    methods:{
        // add(e){
        //     //将用户输入包装
        //     const dataobj = {id:nanoid(),title:e.target.value,done:false};
        //     this.redata(dataobj)
        //     e.target.value = ''
        // }
        com(){
            pubsub.publish('name',this.name)
        },
        add(){
            //校验数据
            if(!this.text.trim()) return
            const dataobj = {id:nanoid(),title:this.text,done:false};
            this.$emit('redata',dataobj)
            
            //通知组件添加一个对象
            // this.redata(dataobj)
            //清空输入
            this.text = ''
            console.log(this.x)
        },
        dome(){
            this.$emit('at',this.name)
        },
        unbind(){
            // this.$off('at')
        }
    }
}
</script>

<style scoped>
    .todo-header input{
        width: 560px;
        height: 28px;
        font-size: 14px;
        border: 1px solid #ccc;
        border-radius: 4px;
        padding: 4px 7px;
    }
    .todo-header input:focus{
        outline: none;
        border-color: antiquewhite;
        box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(82, 168, 236, 0.6)
    }
</style>