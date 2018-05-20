import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify'
import router from './router/index'
import Components from './components/_index'

import 'vuetify/dist/vuetify.min.css'
import colors from 'vuetify/es5/util/colors'

Vue.use(Vuetify, {
  theme: {
    primary: "#3b097b", 
    secondary: colors.grey.darken3, 
    accent: colors.blue.accent1 ,
    info: colors.blue.base,
    warning: colors.amber.base,
    error: colors.red.base,
    success: colors.green.base
  }
})

Object.keys(Components).forEach(key => {
  Vue.component(key, Components[key])
})

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
