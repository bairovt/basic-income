import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import About from '@/components/Pages/About'
import Problem from '@/components/Pages/Problem'
import Profile from '@/components/User/Profile'
import Signin from '@/components/User/Signin'
import Signup from '@/components/User/Signup'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/problem',
      name: 'Problem',
      component: Problem
    },
    // {
    //   path: '/meetup/new',
    //   name: 'CreateMeetup',
    //   component: CreateMeetup
    // },
    // {
    //   path: '/meetups/:id',
    //   name: 'Meetup',
    //   props: true,
    //   component: Meetup
    // },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile
    },
    {
      path: '/signin',
      name: 'Signin',
      component: Signin
    },
    {
      path: '/signup',
      name: 'Signup',
      component: Signup
    }
  ],
  mode: 'history'
})
