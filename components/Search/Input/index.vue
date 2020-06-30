<template>
  <div class="input">
    <div class="search">
      <el-input placeholder="搜索商家或地点" @focus="focus" @blur="blur" v-model="input"></el-input>
      <el-button type="warning" icon="el-icon-search">搜索</el-button>
      <div class="nav" v-show="isfocus">
        <dl>
          <dt>热门搜索</dt>
          <dd>美团外卖</dd>
          <dd>猫眼电影</dd>
          <dd>美团酒店</dd>
          <dd>民宿／公寓</dd>
          <dd>商家入驻</dd>
        </dl>
      </div>
    </div>
    <div class="menu">
      <dl>
        <dd>美团外卖</dd>
        <dd>猫眼电影</dd>
        <dd>美团酒店</dd>
        <dd>民宿／公寓</dd>
        <dd> 商家入驻</dd>
        <dd>美团公益</dd>
      </dl>
     
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      isfocus: false,
      input: ''
    }
  },
  methods: {
    focus: function(){
      this.isfocus=true
    },
    blur: function(){
      this.isfocus = false
    }
  }
}
</script>

<style scoped lang='less'>
.input {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  align-items: center;
  .search {
    display: flex;
    position: absolute;
    top: 25px;
    left: 35px;
    width: 60%;
    .nav {
      position: absolute;
      top: 40px;
      left: 0;
      width: 85%;
      z-index: 10;
      box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.2);
      dl {
        background-color: white;
        dt {
          font-size: 15px;
          margin: 3px 0 0 3px;
          color: #999;
        }
        dd{
          margin: 10px;
        }
      }
    }
  }
  .menu {
    position: absolute;
    bottom: 10px;
    left: 15px;
    dl {
      display: flex;
      dd {
        margin: 10px;
        font-size: 16px;
        font-weight: 700;
        color: black;
      }
      dd:hover {
        cursor: pointer;
        color: orange;
      }
    }
  }
}
</style>