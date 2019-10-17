/** When your routing table is too long, you can split it into small modules **/

import Layout from '@/layout'

const creditRouter = {
  path: '/member/credit',
  component: Layout,
  redirect: 'noRedirect',
  name: 'Credit',
  meta: {
    title: 'Credit History',
    icon: 'money'
  },
  children: [
    {
      path: 'member/credits',
      component: () => import('@/views/table/complex-table'),
      name: 'Top Up',
      meta: { title: 'Credit',
        icon: 'money'
      }
    }
  ]
}

export default creditRouter
