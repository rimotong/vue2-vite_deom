<template>
  <div>
    <div class="one" :class="mod" @click="chang">{{name}}</div> //:class绑定动态数据
    <div class="one" :style="{fontSize: fsize+'px'}">
  </div>
</template>

<script>
export default {
  data () {
    return {
      name:'123456',
      mod:"yangshi",
      fsize:40,
      // mod:['yangshi1','yangshi2','yangshi3'] 应用场景绑定样式个数不确定，名字不确定
      // mod:{
      // yangshi1:false,yangshi2:false,    应用场景绑定样式个数确定，名字确定,动态决定用不用
      // }
    }
  },
  methods: {
    chang(){
      // this.mod = 'yangshi2'
      let arr = ['yangshi1','yangshi2','yangshi3'];
      let index = werwer;
      this.mod = arr[index]
    }
  }
}
</script>