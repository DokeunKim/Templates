import Vue from 'vue';
import App from './App.vue';

import router from './router';

import Vuetify from 'vuetify';
import DaySpanVuetify from './utils/dayspan-vutify';


import VueRouter from 'vue-router';

Vue.config.productionTip = false;

Vue.use(Vuetify);
Vue.use(VueRouter);

Vue.use(DaySpanVuetify, {
  methods: {
    getDefaultEventColor: () => '#1976d2'
  }
});


new Vue({
  render: h => h(App),
  router
}).$mount('#app')
