<template>
  <ul>
    //响应式添加，修改数据 使用Vue.set,vm.$set(地址，key，val),只能在data内数据使用
    //v-for可遍历数组、对象、字符串等等   //使用index为key不要做破坏顺序的操作
    //使用7个api变动数据：push(),pop()、shift()、unshift()、splice()、sort()、reverse().
    <input type="text" placeholder="输入信息" v-model="keyWrod"/>
    <button @click="sorttype">排序</button>
    <button @click="sex">添加一个属性</button>
    <button @click="update">修改一个属性</button>
    <li v-for="p in filPersons" :key="p.id"> //v-for="(p,index) in persons",:key="index"
      {{p.name}}--{{p.age}}
    </li>
  </ul>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      sorttype:"", //排序
      keyWord:"",
      hobby:"抽烟,喝酒,烫头",
      persons:[
        {id:'1',name:'马冬梅',age:12,sex:'女'},
        {id:'2',name:'周冬雨',age:23,sex:'女'},
        {id:'3',name:'周杰伦',age:34,sex:'男'},
      ],
      filPersons:[]
    }
  },
  methods: {
    sex(){
      this.$set(this.persons,"sex","男")
    },
    update(){
      //this.hobby.splice(0,1,'开车') 修改字典
      this.$set(this.hobby,0,'开车')
    }
  },
  //watch实现列表过滤
  watch: {
    // keyWord(val){
    //   this.filPersons = this.persons.filters((p) =>{
    //     return p.name.indexof(val) !== -1
    //   })
    //   }
    keyWord:{
      immediate:true,  //不匹配一次的话不显示数据
      handler(val){
        this.filPersons = this.persons.filters((p) =>{
          return p.name.indexof(val) !== -1
        })
      }
    }
    },
    //computed实现列表过滤
    computed: {
      filPersons(){
        return this.persons.filters((p) =>{
          return p.name.indexof(this.keyWord) !== -1
        })
        //列表排序
        if(this.sorttype){
          arr.sort((a,b)=>{
            return this.sorttype === 1 ? a.age-b.age : b.age-a.age
          })
        }
        return arr    //排序时需取消filPersons的return，const定义为arr
      }
    }
  }
</script>