
import Vue from 'vue'
import './stylus/main.styl'
import App from './App'
import router from './router'
import { store } from './store'
import pageInDev from './components/Shared/PageInDev.vue'
import AdditionDialog from './components/Shared/AdditionDialog.vue'
import NewsCmp from './components/Shared/NewsCmp.vue'
import {
    Vuetify,
    VApp, VNavigationDrawer, VList, VIcon, VToolbar, VBtn, VGrid, VDialog, VCard,
    VAlert, VTextField
} from 'vuetify'

Vue.use(Vuetify, {
  components: {
    VApp, VNavigationDrawer, VList, VIcon, VToolbar, VBtn, VGrid, VDialog, VCard,
    VAlert, VTextField
  }
});

Vue.component('app-page-in-dev', pageInDev);
Vue.component('addition-dialog', AdditionDialog);
Vue.component('news', NewsCmp);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
});
