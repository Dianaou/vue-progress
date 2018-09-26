import Vue from 'vue'
import 'font-awesome/less/font-awesome.less'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
    render: h => h(App)
}).$mount('#app')