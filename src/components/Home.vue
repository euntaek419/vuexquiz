<template>
  <div class="home">
    <input placeholder="단지, 지하철, 학교 검색">
    <div>Home 입니다.</div>
    <button @click="$emit('Xbtn')">X 버튼</button>
  </div>

</template>

<script>
export default {

}
</script>

<style scoped>
.home{
    height: 100px;
    text-align: center;
}
</style>