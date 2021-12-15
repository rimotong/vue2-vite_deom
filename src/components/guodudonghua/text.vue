<template>
    <div>
        <button @click="isShow = !isShow">xianshi</button>
        <transition name="show" appear> <!-- appear默认显示动画效果 -->
            <h1 v-show="isShow">你好</h1>
        </transition>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isShow:true
        }
    },
}
</script>

<style>
h1{
    background: aqua;
}
/* 样式一 */
.show-enter-active{
    animation: we 1s linear;
}
.show-leave-active{
    animation: we 1s reverse;
}

/* 样式二不需要@keyframes */
/* .show-enter,.show-leave-to{
    transform: translateX(-100%);
}
.show-enter-to,.show-leave{
    transform: translateX(0);
}
.show-enter-active,.show-leave-active{
    transition: 0.5s linear;  样式二新增 
} */
@keyframes we{
    from{
        transform: translateX(-100%);
    }
    to{
        transform: translateX(0%);
    }
}
</style>
