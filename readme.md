vue inspect > output.js //查看不可修改的配置信息
%USERPROFILE%

## ref

ref被用来给元素或子组件注册引用信息，可以用this.$refs.(refname)调用。`<h1 ref="name">`打标识

## props

1.让组件接收外部传过来的数据
<zjname [keyname]="">
2.组件接收数据不推荐更改，若需要更改可备份一份至data中修改。

## mixin （混入）

可以把多个组件共用的配置提取为一个混入对象

## npm view webpack versions

查看插件的所有版本

## todolist案例

1.组件化编码流程
（1）拆分静态组件：按功能点拆分，命名不能与html元素冲突。
（2）实现动态组件：考虑好数据存储位置（1个组件使用还是一些组件使用，一些的话放至app组件）
（3）实现交互：从绑定事件开始

2.props适用于：
（1）父组件 ===》 子组件 通信
（2）子组件 ===》 子组件 通信（需父组件先传子组件一个函数）

3.使用v-model时需注意，v-model绑定的值不能为props传过来的值，因为props数据不能修改。

## 消息的订阅与发布
1.组件通信方式，适用于任意组件通信：
需要数据的组件订阅消息(subscribe)，发送数据的发布消息(publish)
2.步骤：
安装：npm i pubsub-js
引入：import pubsub from 'pubsub-js'
接收数据：mounted()中接收
    this.pubId = pubsub.subscribe('name',(msgname,data)=>{
        console.log('收到了消息',msgname,data)
    })
提供数据：pubsub.publish('name',this.name)
清除订阅：
    beforeDestroy() {
        pubsub.unsubscribe(this.pubId)
    },

## 动画效果
transition标签 多个效果需添加name //name设置为show
1.动画效果css
show-enter，show-enter-to，show-enter-active
.show-leave，.show-leave-to，.show-leave-active
2.引入外部库

## LocalStorage
1、命名规范
可以为项目名 + 当前环境 + 项目版本 + 缓存key

2、expire定时
思路：设置缓存 key 时，将 value 包装成一个对象，对象中有相应的 时效时段 ，当下一次想获取缓存值时，判断有无超时，不超时就获取 value ，超时就删除这个缓存

3、crypto加密
加密很简单，直接使用 crypto-js 进行对数据的加密，使用这个库里的 encrypt、decrypyt 进行 加密、解密 