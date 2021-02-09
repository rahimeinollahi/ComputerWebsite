<template>
    <div id="left-side-home" class="continer ">
          <div id="left-side-home-header-padding"  class="row bg-left-side" v-for="item in RightSideHomeItems" :key="item.id">
                <!-- <h2 @click="item.showLink=!item.showLink" class="col-sm-12 btn btn-light">{{item.headerName}}</h2> -->
                        <h4 id="left-side-home-header-padding" @click="item.showLink=!item.showLink" class="col-sm-12 text-center btn btn-dark dropdown-toggle">{{item.headerName}}</h4>
                    <ts-home-side>
                            <div v-if="item.showLink" class="col-sm-12">
                                <div v-if="item.parts">
                                    <router-link class="col-sm-12 text-center btn btn-light " v-for="sub in item.parts" :key="sub.id" :to="{path:sub.router}">{{sub.name}}</router-link>
                                </div>
                            </div>
                    </ts-home-side>
            </div>  
    </div>
</template>

<script>
import {mapState} from 'vuex'
import TsHomeSide from '../HomeCmp/TsHomeSide.vue'
    export default {
  components: { TsHomeSide },
        name:'LeftSideHomeCmp',
        computed:mapState(['RightSideHomeItems'])
    }
</script>

<style lang="scss" scoped>
#left-side-home{
    padding: 2px 5px;
}
#left-side-home-header-padding{
    // padding: 2px 5px;
    margin-left: 1px;
}
.bg-left-side{
    background-color: #fffeee;
}
</style>