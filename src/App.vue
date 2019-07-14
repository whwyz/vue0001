<template>
  <div id="app">
    <header>vue项目</header>
    <div class="con">
      <transition>
        <router-view></router-view>
      </transition>
    </div>


    <footer>
      <ul>
        <li><router-link to="/home" class="on">首页</router-link></li>
        <li><router-link to="/member">会员</router-link></li>
        <li><router-link to="/shopcar">购物车</router-link></li>
        <li><router-link to="/search">搜索</router-link></li>
      </ul>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return{

    }
  },
  methods:{

  }
}
</script>

<style lang="scss" scoped>
  /* lang 表示可使用什么样式
    scoped 表示当前组件中才能使用这里的样式
  */
  div,ul,li,a,span{
    margin: 0;
    padding: 0;
  }
  li{
    list-style: none
  }
  a{
    text-decoration: none;
  }
  .myactive{
    color: cadetblue;
  }
  .con{
    height:calc(100vh - 0.85rem) ;
    overflow-x:hidden ;
  }

  header{
    width: 100%;
    text-align: center;
    line-height: 0.4rem;
    background-color: #ff8932;
  }

  footer{
    width: 100%;
    position: fixed;
    bottom: 0;
    background-color: pink;
    ul{
      width: 100%;
      display: flex;
      justify-content: center;
      li{
        flex: 1;
        line-height: 0.45rem;
        text-align: center;
      }
    }
  }


  .v-enter{
    opacity: 0;
    transform: translateX(100%);
  }
  .v-leave-to{
    opacity: 0;
    transform: translateX(-100%);
    position: absolute;
  }
  .v-enter-active,
  .v-leave-active{

    transition: 0.3s ;
  }
</style>
