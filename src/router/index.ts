import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import login from '../components/Login.vue'
import Dashboard from '../components/navigations/DashboardNav.vue'
import Home from '../components/Dashboard.vue'
 
Vue.use(VueRouter)
// Guard to Check User is authenticated or not
export const guardMyroute = (to : any, from : any, next : any) =>
{
 let isAuthenticated= false;
  if(localStorage.getItem('LoggedUser') && localStorage.getItem('LoggedUser') == 'true')
    isAuthenticated = true;
  else
    isAuthenticated= false;

  if(isAuthenticated) 
  {
    next(); // allow to enter route
  }else{
    next('/'); // go to '/login';
  }
}

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'login',
    component: login
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
    beforeEnter : guardMyroute,
    children: [
      {
        path: "",
        name: "Home",
        component: Home,
      },
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
