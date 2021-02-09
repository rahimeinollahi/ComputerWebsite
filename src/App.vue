<template>
  <div id="nav" class="continer">
      <nav-home-cmp />
  </div>
  <router-view/>

</template>

<script>
import NavHomeCmp from './components/HomeCmp/NavHomeCmp.vue'
export default {
  components :{
        NavHomeCmp
  }
}
</script>

<style lang="sc
NavHomeCmpss">
 
</style>
