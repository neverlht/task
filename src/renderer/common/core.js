import Vue from 'vue';
import ViewUI from 'view-design';
import VueRouter from 'vue-router';
import 'view-design/dist/styles/iview.css';
import Routers from '../router';
import request from './request.js';
import Utils from './utils.js';
Vue.use(VueRouter);
Vue.use(ViewUI);
Vue.config.productionTip = false;

Vue.prototype.request = request;
Vue.prototype.$Utils = Utils;
// 路由配置
const RouterConfig = {
  mode: 'hash',
  routes: Routers,
};
const router = new VueRouter(RouterConfig);

router.beforeEach((to, from, next) => {
  ViewUI.LoadingBar.start();
  next();
});

router.afterEach(() => {
  ViewUI.LoadingBar.finish();
  window.scrollTo(0, 0);
});

/**
 * 加载进度条设置样式
 */
ViewUI.LoadingBar.config({
  color: '#d9ecff',
  height: 5,
});

export { Vue, ViewUI, router };
