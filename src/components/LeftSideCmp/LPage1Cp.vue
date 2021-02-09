<template>
        <div class="container mt-3">
            <h2>list of person</h2>
            <p>To right-align the media image, add the image after the .media-body container:</p>

            <div class="media border p-3 mt-3" v-for="item in listPerson" :key="item.id">
                <div class="media-body">
                <h4>{{item.name}} <small><i>{{item.postData}}</i></small></h4>
                <p>{{item.message}}</p>      
                </div>
                <img src="../../assets/images/6.jpg" alt="John Doe" class="ml-3 mt-3 rounded-circle" style="width:60px;">
            </div>
        </div>
</template>

<script>
    import {mapState} from 'vuex'
    export default {
        name:'LPage1Cp',
        computed:{
            ...mapState(['listPerson'])
        }
    }
</script>

<style lang="scss" scoped>


</style>