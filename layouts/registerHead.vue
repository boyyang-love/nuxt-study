<template>
  <div class="wrapper">
    <div class="registerHead">
      <div class="log">
        <nuxt-link to="/" tag="i" class="el-icon-eleme"></nuxt-link>
        <nuxt-link to="/" tag="span">美团</nuxt-link>
      </div>
      <div class="login">
        <span>已有账号？</span>
        <nuxt-link to="/login">
          <el-button type="primary" size="mini">登录</el-button>
        </nuxt-link>
      </div>
    </div>
    <nuxt />
  </div>
</template>

<script>
export default {}
</script>

<style scoped lang='less'>
.registerHead {
  width: 100%;
  height: 59px;
  padding: 10px 72.5px;
  margin-bottom: 30px;
  box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;
  .log {
    font-size: 34px;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;
    span {
      cursor: pointer;
      margin: 3px 5px;
    }
  }
  .login {
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>