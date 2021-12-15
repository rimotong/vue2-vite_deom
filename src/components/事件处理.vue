<template>
  <button @click = "info(66,$event)"></button> <!-- $event占位，没有的话会取不到event  -->
  //修饰符，可以连续使用
  @click.prevent //阻止默认行为 stop //阻止事件冒泡 once //事件只触发一次 self //只操作当前元素时才触发
  @scroll //滚动条滚动 @wheel //鼠标滚动轮的滚动
</template>

<script>
export default {
  name: 'HelloWorld',
  // props: {
  //   msg: String
  // },
  data() {
    return {
      
    }
  },
  methods: {
    info(event){
      console.log(event.target)  //获取绑定函数的标签
    }
  }
}
</script>