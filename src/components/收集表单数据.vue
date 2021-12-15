<template>
  <form @submit="update">
    账号：<input type="text" id="name" v-model="account"/>
    密码：<input type="password" v-model="password"/>
    性别：
    男<input type="radio" name="sex" v-model="sex" value="男" />
    女<input type="radio" name="sex" v-model="sex" value="女" />
    爱好：
    学习<input type="checkbox" v-model="hobby" value="学习" />
    游戏<input type="checkbox" v-model="hobby" value="游戏" />
    音乐<input type="checkbox" v-model="hobby" value="音乐" />
    校区：
    <select v-model="city">
      <option value="" >请选择学校</option>
      <option value="北京"  >北京</option>
      <option value="上海" >上海</option>
      <option value="广州" >广州</option>
    </select>
    其他信息：
    <textarea v-model="other"></textarea>
    <button>提交</button>
  </form>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      account:"",
      password:"",
      sex:"",
      hobby:[],
      city:""
    }
  },
  methods: {
    update(){
      console.log(JSON.stringify(this._data))
    }
  },
  //过滤器
  filter(){

  }
}
</script>