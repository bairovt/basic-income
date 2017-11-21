import Vue from 'vue'
import Router from 'vue-router'
import BasicIncome from '@/components/BasicIncome'
import About from '@/components/Pages/About'
import Practice from '@/components/Pages/Practice'
import Problem from '@/components/Pages/Problem'
import Alternative from '@/components/Pages/Alternative'
import Finance from '@/components/Pages/Finance'
import Views from '@/components/Pages/Views'
import Features from '@/components/Pages/Features'
import HiTech from '@/components/Techs/HiTech'
// import Profile from '@/components/User/Profile'
// import Signin from '@/components/User/Signin'
// import Signup from '@/components/User/Signup'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'BasicIncome',
      component: BasicIncome
    },
    {
      path: '/problem',
      name: 'Problem',
      component: Problem
    },
    {
      path: '/hi-tech',
      name: 'HiTech',
      component: HiTech
    },
    {
      path: '/alternative',
      name: 'Alternative',
      component: Alternative
    },
    {
      path: '/finance',
      name: 'Finance',
      component: Finance
    },
    {
      path: '/practice',
      name: 'Practice',
      component: Practice
    },
    {
      path: '/views',
      name: 'Views',
      props: true,
      component: Views
    },
    {
      path: '/features',
      name: 'Features',
      props: true,
      component: Features
    },
    {
      path: '/about',
      name: 'About',
      props: true,
      component: About
    },
  ],
  mode: 'history'
})
