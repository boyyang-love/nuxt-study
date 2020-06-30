<template>
  <div class="right-bar">
    <div class="mine-mt">
      <span>我的美团</span>
      <dl class="nav">
        <dd>我的订单</dd>
        <dd>我的收藏</dd>
        <dd>抵用券</dd>
        <dd>账户设置</dd>
      </dl>
    </div>
    <div>
      <span>手机APP</span>
    </div>
    <div class="business-center">
      <span>商家中心</span>
      <dl class="nav">
        <dd>美团餐饮商户中心</dd>
        <dd>登录商家中心</dd>
        <dd>美团智能收银</dd>
        <dd>我想合作</dd>
        <dd>手机免费开店</dd>
        <dd>餐饮代理商招募</dd>
        <dd>商家申请开票</dd>
        <dd>免费合作美团排队</dd>
      </dl>
    </div>
    <div class="rules-mt">
      <span>美团规则</span>
      <dl class="nav">
        <dd>规则中心</dd>
        <dd>规则目录</dd>
        <dd>规则评议院</dd>
      </dl>
    </div>
    <div class="Website-nav">
      <span>网站导航</span>
      <div class="box">
        <div class="travel">
          <dl class="title">酒店旅游</dl>
          <dl class="mes">
            <dl>
              <dd>国际机票</dd>
              <dd>火车票</dd>
              <dd>民宿</dd>
              <dd>经济型酒店</dd>
              <dd>主题酒店</dd>
            </dl>

            <dl>
              <dd>商务酒店</dd>
              <dd>公寓</dd>
              <dd>豪华酒店</dd>
              <dd>客栈</dd>
              <dd>青年旅社</dd>
            </dl>
            <dl>
              <dd>度假酒店</dd>
              <dd>别墅</dd>
              <dd>农家院</dd>
            </dl>
          </dl>
        </div>
        <div class="foods">
          <dl class="title">吃美食</dl>
          <dl class="mes">
            <dl>
              <dd>烤鱼</dd>
              <dd>烧烤</dd>
              <dd>火锅</dd>
            </dl>
            <dl>
              <dd>特色小吃</dd>
              <dd>自助餐</dd>
              <dd>代金券</dd>
            </dl>
          </dl>
        </div>
        <div class="movies">
          <dl class="title">看电影</dl>
          <dl class="mes">
            <dl>
              <dd>热映电影</dd>
              <dd>热门影院</dd>
              <dd>热映电影口碑榜</dd>
              <dd>最受期待电影</dd>
              <dd>国内票房榜</dd>
              <dd>北美票房榜</dd>
              <dd>电影排行榜</dd>
            </dl>
          </dl>
        </div>
        <div class="App">
          <dl class="title">酒店旅游</dl>
          <dl>
            <dd>国际机票</dd>
            <dd>火车票</dd>
            <dd>民宿</dd>
            <dd>经济型酒店</dd>
            <dd>主题酒店</dd>
            <dd>商务酒店</dd>
            <dd>公寓</dd>
            <dd>豪华酒店</dd>
            <dd>客栈</dd>
            <dd>青年旅社</dd>
            <dd>度假酒店</dd>
            <dd>别墅</dd>
            <dd>农家院</dd>
          </dl>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped lang='less'>
.right-bar {
  z-index: 10;
  height: 100%;
  display: flex;
  align-items: center;
  margin: 0px 79.5px 0px 0px;
  font-size: 12px;
  color: #9999;
  .mine-mt:hover,
  .rules-mt:hover {
    background-color: white;
    box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.1);
  }
  .mine-mt:hover dl,
  .rules-mt:hover dl {
    background: white;
    visibility: visible;
    box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.1);
  }
  .mine-mt,
  .rules-mt {
    position: relative;
    dl {
      visibility: hidden;
      position: absolute;
      width: 76px;
      background-color: #f8f8f8;
      top: 40px;
      cursor: pointer;
      left: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      dd {
        margin-top: 10px;
        padding: 5px 0 5px 0;
      }
      dd:hover {
        color: salmon;
      }
    }
  }
  .business-center {
    position: relative;
    dl {
      width: 100px;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      visibility: hidden;
      position: absolute;
      top: 40px;
      right: 0;
      cursor: pointer;
      dd {
        margin: 5px 0 5px 0;
        padding-top: 10px;
      }
      dd:hover {
        color: salmon;
      }
    }
  }
  .business-center:hover {
    background-color: white;
    box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.1);
  }
  .business-center:hover dl {
    visibility: visible;
    background-color: white;
    box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.1);
  }
  .Website-nav {
    position: relative;
    .box {
      // z-index: 10;
      position: absolute;
      right: 0;
      top: 40px;
      width: 1000px;
      height: 400px;
      display: flex;
      visibility: hidden;
      div {
        // flex: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        .title {
          color: black;
          font-weight: bold;
          margin: 20px 0px 50px 0px;
        }
        .mes {
          display: flex;
          justify-content: center;
          dl {
            display: flex;
            flex-direction: column;
            dd {
              display: flex;
              align-items: center;
              justify-content: center;
              margin:5px 10px 5px 10px;
            }
            dd:hover {
              color: orange;
              cursor: pointer;
            }
          }
        }
      }
      .travel {
        flex: 3;
      }
      .foods {
        flex: 2;
      }
      .movies {
        flex: 2;
      }
      .App {
        flex: 4;
      }
    }
  }
  .Website-nav:hover {
    background-color: white;
    box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.1);
  }
  .Website-nav:hover .box {
    background-color: white;
    visibility: visible;
    box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.1);
  }

  div {
    padding: 12px 14px;
    span {
      cursor: pointer;
    }
    span:hover {
      color: #fe8c00;
    }
  }
}
</style>