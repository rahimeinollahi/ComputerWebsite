<template>
    <div class="continer">
        <div class="row" >
            <div class="col-sm-6 text-left" v-for="item in page6Items" :key="item.id">
                <h4>{{item.header}}</h4>
                <p>{{item.content}}</p>
                <hr>
            </div>
        </div>
    </div>
</template>

<script>
import {mapState} from 'vuex'
    export default {
        name:'Leftpage6',
        computed:mapState(['page6Items'])
    }
</script>

<style lang="scss" scoped>
hr{
    background-color: red;
}
</style>