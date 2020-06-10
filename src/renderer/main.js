import { Vue, router } from './common/core.js';

import App from './App';

Vue.config.productionTip = false;
/* eslint-disable no-new */
new Vue({
  router,
  components: { App },
  template: '<App/>',
}).$mount('#app');
