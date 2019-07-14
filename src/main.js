//入口文件

import Vue from 'vue'
import App from './App'
import router from './router'

import '../static/lib/font/iconfont.css'

//全局导入
// import Mint from 'mint-ui'
// Vue.use(Mint);

//部分导入
import { Swipe, SwipeItem } from 'mint-ui';
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
import 'mint-ui/lib/style.css'


//导入mui
import '../static/lib/mui/css/mui.min.css'
import  '../static/lib/mui/js/mui.min.js'

Vue.config.productionTip = false;

new Vue({
  el: '#app',
  router,

  render:function(creaderElement){
    return creaderElement(App)
  }
  //或
  // components: { App },
  // template: '<App/>'
});
