<template>
    <div>
        <h1>年龄：{{age}}</h1>
        <h1>姓名：{{name}}</h1>        
        <h1>性别：{{sex}}</h1>
    </div>
</template>

<script>
export default {
    data() {
        return {
            
        }
    },
    // props:['sex','name','age'], //简单接收
    // props:{
    //     name:String,
    //     age:Number,
    //     sex:String,
    // },
    props:{
        name:{
            type:String,
            required:true //必须要传
        },
        age:{
            type:Number,
            default:99, //默认值
        },
        sex:{
            type:String,
            required:true //必须要传
        }
    },
    methods: {
        
    },
}
</script>