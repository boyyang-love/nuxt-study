<template>
  <div class="head">
      <City />
      <RightBar />
  </div>
</template>

<script>
import City from './City'
import RightBar from './RightBar'
export default {
  components:{
    City,
    RightBar
  }
}
</script>

<style scoped lang='less'>
.head {
  height: 40px;
  width: 100%;
  background-color: #F8F8F8;
  display: flex;
  justify-content: space-between;
}
</style>