<template>
    <div class="continer">

            <div id="demo">
  <!-- <input v-model="query" /> -->
  <transition-group
    name="list"
    tag="ul"
   
  >
  <slot />
            <!-- <li
            v-for="(item, index) in computedList"
            :key="item.msg"
            :data-index="index"
            >
            {{ item.msg }}
            </li> -->
  </transition-group>
</div>

    </div>
</template>

<script>
    export default {
        name:'TsGroup',
    }
</script>

<style lang="scss" scoped>

            .list-item {
        display: inline-block;
        margin-right: 10px;
        }
        .list-enter-active,
        .list-leave-active {
        transition: all 1s ease;
        }
        .list-enter-from,
        .list-leave-to {
        opacity: 0;
        transform: translateY(30px);
        }
</style>