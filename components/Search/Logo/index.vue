<template>
  <div class="log">
    <i class="el-icon-platform-eleme"></i>
    <span>美团</span>
    <div class="all-kinds">全部分类</div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped lang='less'>
.log {
  position: relative;
  //
  width: 300px;
  height: 100%;
  display: flex;
  align-items: flex-start;
  i {
    font-size: 35px;
    margin: 30px 0 0 5px;
  }
  span {
    font-size: 35px;
    margin: 20px;
  }
  .all-kinds {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 50px;
    box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.1);
    display: flex;
    align-items: flex-end;
    padding: 0 0 10px 15px;
    margin-top: 15px;
    font-weight: bold;
  }
}
</style>