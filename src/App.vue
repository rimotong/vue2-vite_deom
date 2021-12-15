<template>
  <div id="app">
    <img src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <TodoList/>
    <show/>
    <!-- <index/> -->
  </div>
</template>

<script>
// import index from './components/githubss/index.vue'
import HelloWorld from './components/HelloWorld.vue'
import TodoList from './components/todo/TodoList.vue'
import show from './components/guodudonghua/text.vue'

export default {
  name: 'app',
  components: {
    // index
    HelloWorld,
    TodoList,
    show
  }
}
</script>
<style>
/* @import "../src/assets/bootstrap.css"; */
</style>