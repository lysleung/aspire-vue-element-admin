/** When your routing table is too long, you can split it into small modules **/

import Layout from '@/layout'

const memberRouter = {
  path: '/admin/user',
  component: Layout,
  redirect: 'noRedirect',
  name: 'User',
  meta: {
    title: 'System Admin',
    icon: 'international'
  },
  children: [
    {
      path: 'admin/users',
      component: () => import('@/views/table/complex-table'),
      name: 'AdminUsers',
      meta: { title: 'Admin Users',
        icon: 'user'
      }
    },
    {
      path: 'admin/roles',
      component: () => import('@/views/table/complex-table'),
      name: 'Roles',
      meta: { title: 'Roles',
        icon: 'password'
      }
    }
  ]
}

export default memberRouter
