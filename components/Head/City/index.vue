<template>
  <div class="city">
    <i class="el-icon-location"></i>
    <span class="city">北京</span>
    <div class="change-city">切换城市</div>[
    <span>门头沟区</span>
    <span>大厂回族自治县</span>
    <span>廊坊</span> ]
    <div class="entry">
      <nuxt-link to="/login" tag="span" class="entry-now">立刻登录</nuxt-link>
      <nuxt-link to="/register" tag="span">注册</nuxt-link>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped lang='less'>
.city {
  display: flex;
  height: 100%;
  align-items: center;
  margin: 0px 0px 0px 79.5px;
  font-size: 12px;
  .entry {
    margin-left: 15px;
    .entry-now {
      color: #fe8c00;
    }
  }
  .change-city {
    border: 1px solid #e5e5e5;
    margin: 0px 4px;
    padding: 1px;
    cursor: pointer;
  }
  .city {
    margin: 0;
  }
  .change-city:hover {
    color: #fe8c00;
  }
  span:not(.city) {
    cursor: pointer;
    margin: 0px 4px;
    color: #9999;
  }
  span:hover:not(.city) {
    color: #fe8c00;
  }
  .el-icon-location {
    font-size: 12px;
    line-height: 13px;
  }
}
</style>