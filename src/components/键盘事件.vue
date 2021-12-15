<template>
  <input type="text" placeholder="默认内容" @keyup.enter="up" > //鼠标点击触发,keyup可以添加常见按键（.enter），tap必须配合keydown使用
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
    up(e){
      // if(e.keyCode !== 13) return
      console.log(e.target.value)  //打印输入内容，e.key可以输出键的原有名称
    }
  }
}
</script>