<template>
  <div class="continer">
    <hr id="hr-home">
      <div class="row">
            <router-view class="col-sm-3 text-center" name="a" >
                
            </router-view>

            <router-view class="col-sm-6 text-center" >

              
            </router-view>


            <router-view class="col-sm-3 text-center" name="b" >
               
            </router-view>
      </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    // HelloWorld
  }
}
</script>

<style lang="scss" scoped>
//home
.ts-electroinctable-enter-active,
.ts-electroinctable-leave-active{
  transition:  all 0.5s ease-out 0.5;
}
.ts-electroinctable-enter-from,
.ts-electroinctable-leave-to{
  opacity: 0;
  transform: scale(2)
}
#hr-home{
  background-color: red;
}
</style>
