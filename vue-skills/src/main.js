import Vue from 'vue'
import App from './App.vue'

new Vue({
  render: vue=>vue(App)
}).$mount('#app')

// new Vue({
//   el: '#app',
//   components: { App },
//   template: '<App/>'
// })