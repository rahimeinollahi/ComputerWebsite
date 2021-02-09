<template>
     <div class="continer" id="table-ctn text-center">
         <div class="row">
             <div class="col-sm-10">
                 <input class="form-control m-5 ml-5" v-model="query" type="number" name="txtserach" id="txtserch" placeholder="search by ID">
             </div>
         </div>
         <ts-group>
                <div class="table-responsive" 
                 >
                        <table class="table table-bordered text-center table-striped table-hover">
                        <thead class="thead-dark">
                            <tr>
                            <th class="text-center">id</th>          
                            <th class="text-center">title</th>          
                            <th class="text-center">id</th>          
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="text-center" v-for="item in elHomeItem" :key="item.id">
                            <td class="text-center">{{item.id}}</td>
                            <td class="text-center">{{item.title}}</td>
                            <td class="text-center">{{item.completed}}</td>
                            
                            </tr>
                        </tbody>
                    </table>
                </div>
         </ts-group>
    </div>
</template>


<script>
import {mapState,mapActions} from 'vuex'
// import TsGroup from '../../components/ElectronicCP/TsGroup'
import TsGroup from './TsGroup.vue';
// import {mapActions} from 'vuex'
    export default {
        name:'ElHomeCp',
        data(){
            return{
                     query: '',
            }
        },
        components:{
            TsGroup
        },
        computed:{
            ...mapState(['elHomeItem']),
             computedList() {
                    var vm = this
                    return this.elHomeItem.filter(item => {
                        return item.msg.toLowerCase().indexOf(vm.query.toLowerCase()) !== -1
                    })
                    }
    },
        methods:{
            ...mapActions(['fetchData']),
    //         beforeEnter(el) {
    //   el.style.opacity = 0
    //   el.style.height = 0
    // },
    // enter(el, done) {
    //   gsap.to(el, {
    //     opacity: 1,
    //     height: '1.6em',
    //     delay: el.dataset.index * 0.15,
    //     onComplete: done
    //   })
    // },
    // leave(el, done) {
    //   gsap.to(el, {
    //     opacity: 0,
    //     height: 0,
    //     delay: el.dataset.index * 0.15,
    //     onComplete: done
    //   })
    // }
        },
        created(){
            this.fetchData();
        }
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