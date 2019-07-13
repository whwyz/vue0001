//入口文件

import Vue from 'vue'
import App from './App'
import router from './router'

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
