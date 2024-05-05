import { createRouter, createWebHistory } from 'vue-router'
import SignToTextView from '../views/SignToTextView.vue'
import letterindex from '../views/LetterIndexView.vue'
import SignInView from '../views/SignInView.vue'
import ProfileView from '../views/ProfileView.vue'
import CallView from '../views/CallView.vue'
import JoinView from '../views/JoinView.vue'
import MaterialsView from '../views/MaterialsView.vue'
import PdfsView from '../views/PdfsView.vue'
import PresentationsView from '@/views/PresentationsView.vue'
import emailTemplate from '@/components/emailTemplate.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'signToText',
      component: SignToTextView
    },
    {
      path: '/letterindex',
      name: 'letterindex',
      component: letterindex,
      meta: {
        title: 'Letter Index'
      }
    },
    {
      path: '/signin',
      name: 'signin',
      component: SignInView,
      meta: {
        title: 'Sign in'
      }
    },
    {
      path: '/Materials',
      name: 'Materials',
      component: MaterialsView,
      meta: {
        title: 'SignTudy'
      }
    },
    {
      path: '/pdfs',
      name: 'pdfs',
      component: PdfsView,
      meta: {
        title: 'pdfs'
      }
    },
    {
      path: '/Presentations',
      name: 'Presentations',
      component: PresentationsView,
      meta: {
        title: 'presentations'
      }
    },
    {
      path: '/profile',
      name: 'profile',
      component: ProfileView,
      meta: {
        title: 'Profile'
      }
    },
    {
      path: '/calls',
      name: 'calls',
      component: CallView,
      meta: {
        title: 'Calls'
      }
    },
    {
      path: '/email',
      name: 'Email',
      component: emailTemplate,
      meta: {
        title: 'Email'
      }
    },
    {
      path: '/join/:meetingCode',
      name: 'join',
      component: JoinView,
      meta: {
        title: 'Chismisgn'
      }
    },
  ]
})

export default router
