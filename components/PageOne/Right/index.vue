<template>
  <div class="right">
    <div class="top">
      <div class="banner" v-for="(item, i) in img" :key="i" v-show="n == i">
        <img :src="item" alt />
        <ul>
          <li v-for="(ite,i) in img" :key="i" :class="{'active':n == i}"></li>
        </ul>
      </div>
      <div class="ad">
        <img src="../../../assets/imgs/2.jpg" alt />
      </div>
      <div class="login"></div>
    </div>
    <div class="bottom">
      <div class="img-one"></div>
      <div class="ad"></div>
      <div class="app"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      img: [
        require('../../../assets/imgs/1.jpg'),
        require('../../../assets/imgs/2.jpg'),
        require('../../../assets/imgs/3.jpg')
      ],
      n: 0
    }
  },
  methods: {
    play() {
      this.n++
      if (this.n == this.img.length) {
        this.n = 0
      }
    }
  },
  mounted() {
    setInterval(() => {
      this.play()
    }, 2000)
  }
}
</script>

<style scoped lang='less'>
.active {
  background-color: black;
}
.right {
  width: 100%;
  .top {
    height: 240px;
    width: 100%;
    background-color: blue;
    margin: 10px;
    display: flex;
    .banner {
      flex: 4;
      position: relative;
      img {
        width: 100%;
        height: 100%;
        transition: all 1s ease;
      }
      ul {
        position: absolute;
        width: 100%;
        bottom: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        list-style-type: none;
        margin: 0;
        padding: 0;
        li {
          width: 10px;
          height: 10px;
          background-color: white;
          border-radius: 5px;
          margin: 10px;
        }
        .active {
          background-color: black;
        }
      }
    }
    .ad {
      flex: 1;
      margin: 0 10px;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .login {
      flex: 2;
    }
  }
  .bottom {
    height: 165px;
    width: 100%;
    background-color: red;
    margin: 10px;
    display: flex;
    .img-one {
      flex: 4;
    }
    .ad {
      flex: 1;
      margin: 0 10px;
    }
    .app {
      flex: 2;
    }
  }
}
</style>