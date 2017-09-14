// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'babel-polyfill'

import Vue from 'vue'
import App from './App'
import router from './router'

// 去掉300毫秒延迟
import fastclick from 'fastclick'
fastclick.attach(document.body)

// 引入样式
import './common/stylus/index.stylus'

// 引入字体图标
import Icon from './components/icon/icon.vue'
import './common/icons/index'
Vue.component('icon', Icon)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
