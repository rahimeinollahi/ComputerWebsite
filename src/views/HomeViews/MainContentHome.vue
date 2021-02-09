<template>
    <div class="continer">
       
             <router-view v-slot="{ Component, route }">
                    <transition :name="route.meta.transition">
                        <component :is="Component" />
                    </transition>
            </router-view>
    </div>
</template>

<script>
    export default {
        name:'MainContentHome'
    }
</script>

<style lang="scss" scoped>
//home left
.ts-lheaderpage1-enter-active,
.ts-lheaderpage1-leave-active{
    transition: all 1s ease-out;
}
.ts-lheaderpage1-enter-from,
.ts-lheaderpage1-leave-to{
    opacity: 0;
    transform: translateY(25px)
}
//link2
.ts-lheaderpage2-enter-active,
.ts-lheaderpage2-leave-active{
    transition: all 0.5s ease-out 0.3s;
}
.ts-lheaderpage2-enter-from,
.ts-lheaderpage2-leave-to{
    opacity: 0;
    transform: translateX(45px)
}
//link3
.ts-lheaderpage3-enter-active,
.ts-lheaderpage3-leave-active{
    transition: all 0.5s ease-out 0.3s;
}
.ts-lheaderpage3-enter-from,
.ts-lheaderpage3-leave-to{
    opacity: 0;
    transform: scaleY(3)
}
//page four
.ts-lheaderpage4-enter-active,
.ts-lheaderpage4-leave-active{
    transition: all 0.5s ease-out 0.3s;
}
.ts-lheaderpage4-enter-from,
.ts-lheaderpage4-leave-to{
    opacity: 0;
    transform: rotate(25deg)
}
//page FIVE
.ts-lheaderpage5-enter-active,
.ts-lheaderpage5-leave-active{
    transition: all 0.5s ease-out 0.3s;
}
.ts-lheaderpage5-enter-from,
.ts-lheaderpage5-leave-to{
    opacity: 0;
    transform: rotate(-25deg)
}
//page SIX
.ts-lheaderpage6-enter-active,
.ts-lheaderpage6-leave-active{
    transition: all 0.5s ease-out 0.3s;
}
.ts-lheaderpage6-enter-from,
.ts-lheaderpage6-leave-to{
    opacity: 0;
    transform: rotateX(25deg)
}
//page 7
.ts-lheaderpage7-enter-active,
.ts-lheaderpage7-leave-active{
    transition: all 0.4s ease-out 0.2s;
}
.ts-lheaderpage7-enter-from,
.ts-lheaderpage7-leave-to{
    opacity: 0;
    transform:skew(250deg)
}
//page 8
.ts-lheaderpage8-enter-active,
.ts-lheaderpage8-leave-active{
    transition: all 0.3s ease-out 0.2s;
}
.ts-lheaderpage8-enter-from,
.ts-lheaderpage8-leave-to{
    opacity: 0;
    transform:skew(-25deg)
}
//page 9
.ts-lheaderpage9-enter-active,
.ts-lheaderpage9-leave-active{
    transition: all 0.3s ease-out 0.3s;
}
.ts-lheaderpage9-enter-from,
.ts-lheaderpage9-leave-to{
    opacity: 0;
    transform:skewX(25deg)
}
</style>