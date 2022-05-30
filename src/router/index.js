import Login from '@/views/auth/Login.vue'

import HomeView from '../views/HomeView.vue'
import { createRouter, createWebHistory } from 'vue-router'
import Signup from '@/views/auth/Signup.vue'
import CreatePlaylist from '@/views/playlists/CreatePlaylist.vue'
import PlaylistDetails from '@/views/playlists/PlaylistDetails.vue'
// Route guards
import { projectAuth } from '@/firebase/config'
import UserPlaylists from '@/views/playlists/UserPlaylists.vue'


const requireAuth = (to, from, next) => {
  let user = projectAuth.currentUser
  if (!user) {
    next({name: 'Login'})
  }else {
    next()
  }
}

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    beforeEnter: requireAuth
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/signup',
    name: 'Signup',
    component: Signup
  },
  {
    path: '/playlists/create',
    name: 'CreatePlaylist',
    component: CreatePlaylist,
    beforeEnter: requireAuth

  },
  {
    path: '/playlists/:id',
    name: 'PlaylistDetails',
    component: PlaylistDetails,
    beforeEnter: requireAuth,
    props: true
  },
  {
    path: '/playlists/user',
    name: 'UserPlaylists',
    component: UserPlaylists,
    beforeEnter: requireAuth
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
