<template>
  <div class="search">
      <Logo />
      <Input />
  </div>
</template>

<script>
import Logo from './Logo'
import Input from './Input'
export default {
    components: {
        Logo,
        Input
    }
}
</script>

<style scoped lang='less'>
.search {
    display: flex;
    align-items: center;
    width: 100%;
    height: 157px;
    background-color: white;
    padding: 0px 79.5px 0px 79.5px;
    box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.1);
}
</style>