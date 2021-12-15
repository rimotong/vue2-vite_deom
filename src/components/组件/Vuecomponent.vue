1.组件本质是一个名为Vuecomponent的函数。
3.每次调用Vue.extend,返回的都是一个全新的Vuecomponent
4.new Vue（options）配置中，this指向为Vuecomponent
5.Vuecomponent.prototype.__proto__===Vue.prototype