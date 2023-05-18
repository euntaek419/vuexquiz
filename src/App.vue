<template>
  <div class="box">
    <div class="getcounter"> {{ getCounter }} </div>
    <button class="btn" @click="ac_dispatch('heyten')"> btn1 </button>
    <button class="btn" @click="ac_dispatch('heytwo')"> btn2 </button>

    <button class="btn" @click="this.heyten()"> btn1 </button>
    <button class="btn" @click="this.heytwo()"> btn2 </button>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
// import { mapGetters } from 'vuex';

export default {
  computed: {
    ac_dispatch() {
      return this.$store.dispatch
    },

    ...mapGetters(['getCounter']),
  },
  methods : {
    ...mapActions(['heyten', 'heytwo']),
  }
}
</script>

<style>
.box {
  height: 720px;
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
