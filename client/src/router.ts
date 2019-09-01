import Vue from 'vue';
import Router from 'vue-router';

import routes from './constants/routes';
import AddData from './views/AddData.vue';
import Logs from './views/Logs.vue';
import Data from './views/Data.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: routes.ROOT.path,
      redirect: routes.ADD_DATA.path,
    },
    {
        path: routes.ADD_DATA.path,
        component: AddData,
    },
    {
        path: routes.LOGS.path,
        component: Logs,
    },
    {
        path: routes.DATA.path,
        component: Data,
    },
  ],
});
