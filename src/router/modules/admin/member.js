/** When your routing table is too long, you can split it into small modules **/

import Layout from '@/layout'

const memberRouter = {
  path: '/admin/member',
  component: Layout,
  redirect: 'noRedirect',
  name: 'Member',
  meta: {
    title: 'Member',
    icon: 'user'
  },
  children: [
    {
      path: 'admin/members',
      component: () => import('@/views/table/complex-table'),
      name: 'Members',
      meta: { title: 'Members',
        icon: 'user'
      }
    },
    {
      path: 'admin/membership',
      component: () => import('@/views/table/complex-table'),
      name: 'Membership',
      meta: { title: 'Membership',
        icon: 'theme'
      }
    }
  ]
}

export default memberRouter
