<template>
XING：<input type="text" v-model="firstName">
ming：<input type="text" v-model="lstaName">
quan:<span></span>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      firstName:"张",
      lstaName:"三",
    }
  },
  methods: {

  },
  computed: {
    fullName:{
      get(){
        return this.firstName + '-' + this.lstaName
      }
    }
  },
  watch: {
    firstName:{
      immediate:true, //初始化时执行一次handler
      deep:true, //深度监控（多层结构开启）
      handler(){
        console.log("firstName改变了")
      }
    }
  }
}
</script>