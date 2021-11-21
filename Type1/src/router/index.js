import VueRouter from "vue-router"
import Main from '../components/Main.vue'
import Login from '../components/Login.vue'

import FormLayout from '../components/FormLayout.vue'



const routes = [
  {
    path: "/login",
    name: "Login",
    component: Login
  },
  {
    path: "/",
    name: "Main",
    component: Main,
    children:[
      {
        path: "form-layout",
        name: "FormLayout",
        component: FormLayout
      }
    
    ]
  }
];

const router = new VueRouter({
  mode: 'history',
  routes: routes,
});

export default router;