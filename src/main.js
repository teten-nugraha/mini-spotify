import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import 'bulma/css/bulma.css'

import FontAwesome from '@fortawesome/fontawesome'
import VueFontAwesome from '@fortawesome/vue-fontawesome'
import FontAwesomeSolid from '@fortawesome/fontawesome-free-solid'

FontAwesome.library.add(FontAwesomeSolid)

Vue.component('fa-icon', VueFontAwesome)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
