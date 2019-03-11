import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/Index'
import Home from '@/pages/Home'
import Artists from '@/pages/Artists'
import ListCate from '@/pages/ListCate'
import UCenter from '@/pages/Ucenter'
import Search from '@/pages/Search'
import HotList from '@/pages/musiclist/HotList'
import NewsList from '@/pages/musiclist/NewsList'
import KingList from '@/pages/musiclist/KingList'
import MoreList from '@/pages/MoreList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home',
      name: 'Index',
      component: Index,
      children: [
        {
          path: 'home',
          redirect: '/home/hot',
          component: Home,
          children: [
            {
              path: 'hot',
              component: HotList
            },
            {
              path: 'news',
              component: NewsList
            },
            {
              path: 'king',
              component: KingList
            }
          ]
        },
        {
          path: 'artists',
          component: Artists
        },
        {
          path: 'listcate',
          component: ListCate
        },
        {
          path: 'ucenter',
          component: UCenter
        },
        {
          path: 'search',
          component: Search
        },
        {
          path: 'more',
          name: 'MoreList',
          component: MoreList
        }
      ]
    }
  ],
  linkExactActiveClass: 'is-active'
})
