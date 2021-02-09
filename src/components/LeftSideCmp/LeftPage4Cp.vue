<template>
    <div class="container">
        <div class="row" >
            <div class="col-sm-6 mt-5" v-for="item in listProfilePage4" :key="item.id">
                    <h4>{{item.header}}</h4>
                    <div class="card hovereffect " style="width:400px">
                            <img class="card-img-top  " src="../../assets/images/6.jpg" :alt="item.alt" style="width:100%">
                                    <div class="card-body">
                                        <h4 class="card-title">{{item.name}}</h4>
                                        <p class="card-text">{{item.city}}</p>
                            <router-link class="btn btn-info " :to="{path:item.router}">{{item.seeProfile}}</router-link>
                        </div>
                    </div>
                    <br>
            </div>
        </div>    
    </div>
  
</template>

<script>
//  
    import {mapState} from 'vuex'
    export default {
        name:'Leftpage4',
        computed:mapState(['listProfilePage4'])
    }
</script>

<style lang="scss" scoped>
.hovereffect {
  width: 100%;
  height: 100%;
  float: left;
  overflow: hidden;
  position: relative;
  text-align: center;
  cursor: default;
//   background: -webkit-linear-gradient(45deg, #ff89e9 0%, #05abe0 100%);
//   background: linear-gradient(45deg, #ff89e9 0%,#05abe0 100%);
}

.hovereffect:hover img {
  opacity: 0.6;
  filter: alpha(opacity=60);
  -webkit-transform: translate3d(0,0,0);
  transform: translate3d(0,0,0);
}
</style>