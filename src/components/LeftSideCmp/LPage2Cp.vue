<template>
    <div id="div-body" class="continer" data-spy="scroll" data-target=".navbar" data-offset="50">
        <div class="row fixed-pos-test ">
            <a id="nav-fixed" class="col-sm bg-secondary   text-center text-white list-group-item list-group-item-action" v-for="item in sectionList" :key="item.id" :href="item.href" >{{item.name}}</a>
        </div>
                <!-- <nav id="nav-pos" class=" navbar navbar-expand-sm bg-dark navbar-dark nav-pos">  
                    <ul class="navbar-nav">
                        <li class="nav-item" v-for="item in sectionList" :key="item.id">
                            <a class="nav-link" :href="item.href">{{item.name}}</a>
                        </li>
                    </ul>
               </nav> -->
                        
            <div v-for="itemc in sectionContent" :key="itemc.id" class="bg-ctn">
                <div :id="itemc.id" :class="itemc.class" style="padding-top:70px;padding-bottom:70px">
                    <h1>{{itemc.header}}</h1>
                    <hr>
                    <p>{{itemc.itemContent}}</p>
                    <p>{{itemc.itemContent}}</p>
            </div>
            </div>
    </div>
</template>

<script>
import {mapState} from 'vuex'
    export default {
        name:"LPage2Cp",
        computed:mapState(['sectionList','sectionContent'])
    }
</script>

<style lang="scss" scoped>
*{
    font-family: 'page-font';
}
@font-face {
    font-family:'page-font' ;
    src: url('../../assets/fonts/AlexandriaFLF.ttf');
}
.fixed-pos-test2{
  position: -webkit-sticky; /* Safari */
  position: sticky;
  top: 0;
}
.fixed-pos-test{
    // position: fixed;
   position: -webkit-sticky; /* Safari */
  position: sticky;
  top: 0;
}

hr{
    background-color: red;
}
h1{
    text-shadow: 5px 5px 15px ,
    2px 2px 20px red;
}
p{
    background-color: #ffffee;
}
.bg-ctn{
    background-color: #ffffee;
}
*{
    direction: left;
    text-align: left;
}
@media screen and (max-width:576) {
    .fixed-pos-tes,
    .fixed-pos-tes2{
        position: absolute;
        // bottom: 0;
    }
}
</style>