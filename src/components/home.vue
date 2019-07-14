<template>
  <div id="home">

<!--    轮播图-->
    <mt-swipe :auto="4000">
      <mt-swipe-item>1</mt-swipe-item>
      <mt-swipe-item>2</mt-swipe-item>
      <mt-swipe-item>3</mt-swipe-item>
    </mt-swipe>

<!--    九宫格-->
    <div class="mui-content">
      <ul class="mui-table-view mui-grid-view mui-grid-9">
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
          <i class="iconfont iconxinwen"></i>
          <div class="mui-media-body">新闻资讯</div></a></li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
          <i class="iconfont icontupian-copy"></i>
          <div class="mui-media-body">图片分享</div></a></li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
          <i class="iconfont icongoods-copy-copy-copy"></i>
          <div class="mui-media-body">商品购买</div></a></li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
          <i class="iconfont iconmessage"></i>
          <div class="mui-media-body">留言反馈</div></a></li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
          <i class="iconfont iconshipinbofangyingpian2-copy"></i>
          <div class="mui-media-body">视频专区</div></a></li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
          <i class="iconfont iconlianxi1"></i>
          <div class="mui-media-body">联系我们</div></a></li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'home',

  }
</script>

<style lang="scss" scoped>
  #home{
    width: 3.75rem;

  }
  .icon {
    width: 1em;
    height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
  }

    .mint-swipe{
        height: 1.5rem;
        .mint-swipe-item{
            &:nth-child(1){
              background-color: #a49deb;
            }
            &:nth-child(2){
               background-color: greenyellow;
             }
            &:nth-child(3){
              background-color: indianred;
            }
        }
    }

    .mui-content>.mui-table-view:first-child{
      margin-top: 0;
      background-color: #fff;
      border: none;

    }
    .mui-grid-view.mui-grid-9 .mui-table-view-cell{
      border: none;
      width: 33.33%;
      height: 1.3rem;
        i {
          display: inline-block;
          height: 0.4rem;
          font-size: 0.4rem;
        }
        &:nth-child(1) i{
          color: #ff707a;
        }
        &:nth-child(2) i{
          color: #85ff77;
        }
        &:nth-child(3) i{
          color: #ffab42;
        }
        &:nth-child(4) i{
          color: #d0ff34;
        }
        &:nth-child(5) i{
          color: #b3b0ff;
        }
        &:nth-child(6) i{
          color: #71c8ff;
        }
     }


</style>
