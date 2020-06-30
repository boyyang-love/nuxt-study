<template>
  <div class="pageone">
    <LeftNav />
    <Right />
  </div>
</template>

<script>
import LeftNav from './LeftNav'
import Right from './Right'
export default {
  components: {
    LeftNav,
    Right
  }
}
</script>

<style scoped lang='less'>
.pageone {
  display: flex;
  width: 100%;
  height: 425px;
  padding: 0 79.5px;
}
</style>