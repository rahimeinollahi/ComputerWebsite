<template>
    <div class="continer ">
        <div class="row">
            
            <div class="col-sm-4 text-center card" >
                  <img src="../../assets/HomePhot/1.jpg" class="rounded text-center w-100 card-body img-fluid mt-3" alt="Cinque Terre" width="304" height="236"> 
                <p class="w-100 btn btn-light btn-block">image two</p>
            </div>

            <div class="col-sm-4 text-center card" >
                  <img src="../../assets/HomePhot/7.jpg" class="rounded text-center w-100 card-body img-fluid mt-3" alt="Cinque Terre mt-3" width="304" height="236"> 
                <p class="w-100 btn btn-light btn-block">image three</p>
            </div>

            <div class="col-sm-4 text-center card" >
                  <img src="../../assets/HomePhot/8.jpg" class="rounded text-center w-100 card-body img-fluid mt-3" alt="Cinque Terre" width="304" height="236"> 
                <p class="w-100 btn btn-light btn-block">image four</p>
            </div>

            <div class="col-sm-4 text-center card" >
                  <img src="../../assets/HomePhot/1.jpg" class="rounded text-center w-100 card-body img-fluid mt-3" alt="Cinque Terre" width="304" height="236"> 
                <p class="w-100 btn btn-light btn-block">image five</p>
            </div>

            <div class="col-sm-4 text-center card" >
                  <img src="../../assets/HomePhot/2.jpg" class="rounded text-center w-100 card-body img-fluid mt-3" alt="Cinque Terre" width="304" height="236"> 
                <p class="w-100 btn btn-light btn-block">image six</p>
            </div>

            <div class="col-sm-4 text-center card" >
                  <img src="../../assets/HomePhot/3.jpg" class="rounded text-center w-100 card-body img-fluid mt-3" alt="Cinque Terre" width="304" height="236"> 
                <p class="w-100 btn btn-light btn-block">image seven</p>
            </div>

            <div class="col-sm-4 text-center card" >
                  <img src="../../assets/HomePhot/4.jpg" class="rounded text-center w-100 card-body img-fluid mt-3" alt="Cinque Terre" width="304" height="236"> 
                <p class="w-100 btn btn-light btn-block">image eight</p>
            </div>

            <div class="col-sm-4 text-center card" >
                  <img src="../../assets/HomePhot/5.jpg" class="rounded text-center w-100 card-body img-fluid mt-3" alt="Cinque Terre" width="304" height="236"> 
                <p class="w-100 btn btn-light btn-block">image nine</p>
            </div>

            <div class="col-sm-4 text-center card" >
                  <img src="../../assets/HomePhot/6.jpg" class="rounded text-center w-100 card-body img-fluid mt-3" alt="Cinque Terre" width="304" height="236"> 
                <p class="w-100 btn btn-light btn-block">image one</p>
            </div>

        </div>
    </div>
</template>

<script>
import{mapState} from 'vuex'
    export default {
        name:'LPage7',
        computed:mapState(['page7Images'])
    }
</script>

<style lang="scss" scoped>
img{
     object-fit: cover;
     
}
img:hover{
    opacity: 0.3;
    border: 1px solid red;
}
</style>