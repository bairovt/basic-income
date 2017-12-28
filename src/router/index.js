import Vue from 'vue'
import Router from 'vue-router'
import BasicIncome from '@/components/Pages/BasicIncome'
import About from '@/components/Pages/About'
import Practice from '@/components/Pages/Practice'
import Problem from '@/components/Pages/Problem'
import Alternative from '@/components/Pages/Alternative'
import Inaction from '@/components/Pages/Inaction'
import Resource from '@/components/Pages/Resource'
import Views from '@/components/Pages/Views'
import News from '@/components/Pages/News'
import Features from '@/components/Pages/Features'
import Revolution from '@/components/Pages/Revolution'
import AllTechs from '@/components/Pages/Techs/AllTechs'
import Tech from '@/components/Pages/Techs/Tech'
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
      path: '/alternative',
      name: 'Alternative',
      component: Alternative
    },
    {
      path: '/inaction',
      name: 'Inaction',
      component: Inaction
    },
    {
      path: '/resource',
      name: 'Resource',
      component: Resource
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
      path: '/news',
      name: 'News',
      props: true,
      component: News
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
    {
      path: '/revolution',
      name: 'Revolution',
      props: true,
      component: Revolution
    },
    {
      path: '/techs',
      name: 'AllTechs',
      component: AllTechs
    },
    {
      path: '/techs/:techlabel',
      name: 'Tech',
      component: Tech
    }
  ],
  mode: 'history'
})
