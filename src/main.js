import Vue from 'vue'
import App from './App.vue'
import SuiVue from 'semantic-ui-vue'
import 'semantic-ui-css/semantic.min.css'
import VueLodash from 'vue-lodash'
import VueMoment from 'vue-moment'

Vue.config.productionTip = false
Vue.use(SuiVue)
Vue.use(VueMoment)
Vue.use(VueLodash)

new Vue({
  render: h => h(App)
}).$mount('#app')
