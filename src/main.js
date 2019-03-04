import Vue from 'vue'
import App from './App.vue'
import router from './router'

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    console.log('kkkk')
    navigator.serviceWorker.register('./sw.js')
      .then(registration => {
        console.log(`Service Worker registered! Scope: ${registration.scope}`)
      })
      .catch(err => {
        console.log(`Service Worker registration failed: ${err}`)
      })
  })
} else {
  console.log('kkkk222')
}

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
