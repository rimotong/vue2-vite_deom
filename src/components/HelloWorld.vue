<template>
  <!-- <h1>{{ msg }}</h1> -->
  <button @click="count++">count is: {{ count }}</button>
  <div>{{hi}}</div>
  <!-- 单项绑定：<v-bind></v-bind>
  双向绑定：<v-model></v-model> -->
</template>

<script>
export default {
  name: 'HelloWorld',
  // props: {
  //   msg: String
  // },
  data() {
    return {
      count: 0,
      hi:"helloword"
    }
  },
  sun(){
  let number = 10;
  let list = {
    name:'',
    sex:'',
  }

  Object.defineProperty(list,'age',{
    get(){
      return number  //读取，number值
    },
    set(val){
      val = number //修改，随list.number改变而改变
    }
  })
  }
}
</script>
