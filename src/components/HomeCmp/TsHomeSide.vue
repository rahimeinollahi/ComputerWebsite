<template>
    <div class="continer">
          <transition
                name="custom-classes-transition"
                enter-active-class="animate__animated animate__tada"
                leave-active-class="animate__animated animate__headShake"
            >
            <slot />
        </transition>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
// .fade-enter-active,
// .fade-leave-active{
//     transition: all 1s;
// }
// .fade-enter-from,
// .fade-leave-to{
//     opacity: 0;
// }
</style>