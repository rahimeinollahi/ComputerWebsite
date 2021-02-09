<template>
    <div id="nav-fixed" class="continer nav-fixed ">
        
        <div class="row" id='bg-menu-color nav-fixed  '>
           
            <router-link 
            id="nav-link"
            class="col-sm btn btn-light fixx"
                v-for="item in navHomeItems" 
                :key="item.id"
                :to="{path:item.router}"
             >{{item.name}}</router-link>
             
        </div>
    </div>
</template>

<script>
    import{mapState} from 'vuex'
    export default {
        name:'NavHomeCmp',
        computed:mapState(['navHomeItems'])
    }
</script>

<style lang="scss" scoped>
@import '../../assets/sass/base/_variable.scss';
    #bg-menu-color{
        background-color: $bg-menu-left-color;
    }
    #nav-link{
        margin: 1px;
    }
   .fixx{
    //    position: fixed;
    position: -webkit-sticky; /* Safari */
    position: sticky;
    top: 0;
   }
</style>