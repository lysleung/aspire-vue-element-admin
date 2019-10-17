/** When your routing table is too long, you can split it into small modules **/

import Layout from '@/layout'

const bookingRouter = {
  path: '/member/booking',
  component: Layout,
  redirect: 'noRedirect',
  name: 'Booking',
  meta: {
    title: 'Bookings',
    icon: 'table'
  },
  children: [
    {
      path: 'member/book',
      component: () => import('@/views/table/complex-table'),
      name: 'AddBook',
      meta: { title: 'New Booking',
        icon: 'edit'
      }
    },
    {
      path: 'member/bookings',
      component: () => import('@/views/table/complex-table'),
      name: 'Bookings',
      meta: { title: 'Bookings',
        icon: 'table'
      }
    }
  ]
}

export default bookingRouter
