// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueMask from 'v-mask'
import DatePicker from 'vue2-datepicker'
import VueSelect from 'vue-select'

Vue.config.productionTip = false
Vue.use(VueMask)
Vue.component('date-picker', DatePicker)
Vue.component('v-select', VueSelect)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
