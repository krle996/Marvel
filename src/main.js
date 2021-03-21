import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import router from './routes'
import store from './store/store'

import { MdDrawer, MdCard } from 'vue-material/dist/components'
import 'vue-material/dist/vue-material.min.css'

/* Vue Resource */
Vue.use(VueResource)
Vue.http.options.root = 'https://marvel-62625.firebaseio.com/'

/* Vue Material */
Vue.use(MdCard)
Vue.use(MdDrawer)

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
