<template>
  <div class="wrapper">
    <div class="nav">
      <dl @mouseleave="mouseleave">
        <dd v-for="(item, i) in menu" :key="i" @mouseenter="enter">
          <span>
            <i :class="item.icon"></i>
            <span>{{item.name}}</span>
            <a :class="item.type"></a>
          </span>
          <span>
            <i class="el-icon-arrow-right"></i>
          </span>
        </dd>
      </dl>
    </div>
    <div class="menu" v-if="kind" @mouseenter="sover" @mouseleave="sout">
      <dl v-for="(item,i) in detail.child" :key="i">
        <dt>
          <span>{{item.title}}</span>
          <span class="more">
            更多
            <i class="el-icon-arrow-right"></i>
          </span>
        </dt>
        <dl>
          <dd v-for="(v,i) in item.child" :key="i">{{v}}</dd>
        </dl>
      </dl>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      kind: '',
      menu: [
        {
          icon: 'el-icon-knife-fork',
          name: '美食',
          type: 'foods',
          child: [
            {
              title: '美食',
              child: ['甜点', '小吃', '快餐']
            }
          ]
        },
        {
          icon: 'el-icon-coffee-cup',
          name: '咖啡',
          type: 'coffic',
          child: [
            {
              title: '咖啡',
              child: ['咖啡', '咖啡', '咖啡']
            }
          ]
        }
      ]
    }
  },
  methods: {
      mouseleave(){
        //   let self = this
        //   self._timer = setTimeout(function(){
        //       self.kind = ''
        //   },150)
        this._timer = setTimeout(() => {
            this.kind = ''
        }, 150);
      },
      enter(e){
          this.kind = e.target.querySelector('a').className
      },
      sover(){
          clearTimeout(this._timer)
      },
      sout(){
          this.kind = ''
      }
  },
  computed: {
    detail: function() {
      return this.menu.filter(item => item.type === this.kind)[0]
    }
  }
}
</script>

<style scoped lang='less'>
.wrapper {
  height: 100%;
  display: flex;
  position: relative;
  .nav {
    width: 239.5px;
    height: 100%;
    box-shadow: 0 3px 4px 0 rgba(0, 0, 0, 0.1);
    dl {
      dd {
        margin: 10px 5px;
        font-size: 13px;
        color: #646464;
        height: 26px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        cursor: pointer;
        span {
          i {
            padding: 0 10px;
            color: orange;
          }
        }
      }
      dd:hover {
        background-color: pink;
        font-weight: bold;
        color: black;
      }
    }
  }

  .menu {
    width: 450px;
    height: 100%;
    margin-top: 5px;
    padding: 5px 15px;
    background-color: white;
    border: 1px solid rgba(0, 0, 0, 0.1);
    position: absolute;
    top: 0;
    left: 239.5px;
    z-index: 10;
    dl {
      dt {
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid rgba(0, 0, 0, 0.1);
        padding: 15px 15px;
        .more {
          font-size: 14px;
          color: #999;
          cursor: pointer;
        }
      }
      dl {
        display: flex;
        flex-wrap: wrap;
        dd {
          cursor: pointer;
          padding: 15px 15px;
        }
        dd:hover {
          color: orange;
        }
      }
    }
  }
}
</style>