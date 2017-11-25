
import Vue from 'vue'
import Vuetify from 'vuetify'
import './stylus/main.styl'
import App from './App'
import router from './router'
import { store } from './store'
import pageInDev from './components/Shared/PageInDev.vue'
import AdditionDialog from './components/Shared/AdditionDialog.vue'

Vue.use(Vuetify)
Vue.component('app-page-in-dev', pageInDev)
Vue.component('addition-dialog', AdditionDialog)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
