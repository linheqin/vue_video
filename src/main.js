// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'

// 引入commonjs
import {apiUrl,globalParam} from '@/assets/js/common.js'
// console.log(commonJs);
Vue.prototype.apiUrl = apiUrl;
Vue.prototype.globalParam = globalParam;


// ajax数据请求插件
import axios from 'axios'
Vue.prototype.$ajax = axios

Vue.use(Mint);


// 头部标题
import { Header } from 'mint-ui';
Vue.component(Header.name, Header);

// 底部导航
import { 
	Tabbar, 
	TabItem,
	Navbar,
	TabContainer, 
	TabContainerItem,
	Swipe, 
	SwipeItem,
	InfiniteScroll,
	Loadmore
} from 'mint-ui';
Vue.component(
	Tabbar.name, 
	Tabbar,TabItem.name, 
	TabItem,Navbar.name,
	Navbar,TabContainer.name, 
	TabContainer,
	TabContainerItem.name, 
	TabContainerItem,
	Swipe.name, 
	Swipe,
	SwipeItem.name, 
	SwipeItem,
	InfiniteScroll,
	Loadmore.name, 
	Loadmore
);


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
