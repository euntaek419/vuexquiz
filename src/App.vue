<template>
  <div class="box">
    <div class="getcounter"> {{ getCounter }} </div>

    <button class="btn" @click="this.heyten()"> btn1 </button>
    <button class="btn" @click="this.heytwo()"> btn2 </button>
  </div>


  <div class="box2">
    <button class="btn" @click="this.Home = true">Home</button>
    <button class="btn" @click="this.Home = false">Map</button>
  </div>

  <div v-if="Home == true">
    <Home @Xbtn="Xbtn"></Home>
  </div>

  <div>
    <Map></Map>
  </div>

</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import Home from './components/Home'
import Map from './components/Map'

export default {
  data: () => {
    return{
      Home : false,
    };
  },
  components:{
    Home,
    Map,
  },
  computed: {
    ...mapGetters(['getCounter']),
  },
  methods : {
    ...mapActions(['heyten', 'heytwo']),

    Xbtn(){
      this.Home = false
    }
  }
}
</script>

<style>
.box {
  height: 400px;
  text-align: center;
}

.box2 {
  height: 100px;
  text-align: center;
}

.getcounter{
  padding : 50px;
  font-size: 100px;
}

.btn {
  width: 100px;
  height: 70px;
}

</style>
