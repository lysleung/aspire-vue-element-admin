/** When your routing table is too long, you can split it into small modules **/

import Layout from '@/layout'

const profileRouter = {
  path: '/member/profile',
  component: Layout,
  redirect: 'noRedirect',
  name: 'Profile',
  meta: {
    title: 'Profile',
    icon: 'user'
  },
  children: [
    // {
    //   path: 'member/membercard',
    //   component: () => import('@/views/table/complex-table'),
    //   name: 'MemberCard',
    //   meta: { title: 'Member Card' }
    // },
    {
      path: 'member/profile',
      component: () => import('@/views/table/complex-table'),
      name: 'Profile',
      meta: { title: 'Profile',
        icon: 'user'
      }
    }
  ]
}

export default profileRouter
