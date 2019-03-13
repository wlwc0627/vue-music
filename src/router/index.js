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
import MusicPlay from '@/pages/MusicPlay'
import ArtistDetails from '@/pages/artistDetails/artistDetails'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/musicplay',
      name: 'MusicPlay',
      component: MusicPlay
    },
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
        },
        {
          path: 'artistdetails',
          name: 'ArtistDetails',
          component: ArtistDetails
        }
      ]
    }
  ],
  linkExactActiveClass: 'is-active'
})
