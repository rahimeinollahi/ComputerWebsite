<template>
    <div class="continer">
        <div class="card " v-for="item in page5Items" :key="item.id">
            <hr>
                <h4 class="text-danger">{{item.header}}</h4>
                <p class="text-left card-body">{{item.content}}</p>
        </div>
    </div>
</template>

<script>
import {mapState} from 'vuex'
    export default {
        name:'Leftpage5',
        computed:mapState(['page5Items'])
    }
</script>

<style lang="scss" scoped>
p{
    background-color: #f8f8f8;
}
</style>