import { createRouter, createWebHistory } from 'vue-router'

//Home Component
const Home=import('../views/HomeViews/Home.vue')
const MainContentHome =import('../views/HomeViews/MainContentHome.vue');
const LeftSideHome =import('../views/HomeViews/LeftSideHome.vue');
const RightSideHome =import('../views/HomeViews/RightSideHome.vue');

//left side home page..
const LHeaderPage1 =import('../views/HomeViews/LeftSideHomeViews/HeaderPage1.vue');
const LHeaderPage2 =import('../views/HomeViews/LeftSideHomeViews/HeaderPage2.vue');
const LHeaderPage3 =import('../views/HomeViews/LeftSideHomeViews/HeaderPage3.vue');
const LHeaderPage4 =import('../views/HomeViews/LeftSideHomeViews/HeaderPage4.vue');
const LHeaderPage5 =import('../views/HomeViews/LeftSideHomeViews/HeaderPage5.vue');
const LHeaderPage6 =import('../views/HomeViews/LeftSideHomeViews/HeaderPage6.vue');
const LHeaderPage7 =import('../views/HomeViews/LeftSideHomeViews/HeaderPage7.vue');
const LHeaderPage8 =import('../views/HomeViews/LeftSideHomeViews/HeaderPage8.vue');
const LHeaderPage9 =import('../views/HomeViews/LeftSideHomeViews/HeaderPage9.vue');

// elctronic pages
const ElectronicTable =import('../views/ElectronicViews/TableElectronic.vue');

//BookHomePage...
const BookHome =import('../views/BookViews/BookHome.vue');


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta:{transition:"ts-home"},
      children:[
        {
          path: '',
          // name: 'Post',
          components: {
            default:MainContentHome,
            a:LeftSideHome,
            b:RightSideHome,
          },
          meta:{transition:"ts-home-nested"},
          children:[
            {
              path: '',
              name: 'LHeaderPage1',
              component: LHeaderPage1,
              meta:{transition:"ts-lheaderpage1"},
            },
            {
              path: 'lheaderpage2',
              name: 'LHeaderPage2',
              component: LHeaderPage2,
              meta:{transition:"ts-lheaderpage2"},
            },
            {
              path: 'lheaderpage3',
              name: 'LHeaderPage3',
              component: LHeaderPage3,
              meta:{transition:"ts-lheaderpage3"},
            },
            {
              path: 'lheaderpage4',
              name: 'LHeaderPage4',
              component: LHeaderPage4,
              meta:{transition:"ts-lheaderpage4"},
            },
            {
              path: 'lheaderpage5',
              name: 'LHeaderPage5',
              component: LHeaderPage5,
              meta:{transition:"ts-lheaderpage5"},
            },
            {
              path: 'lheaderpage6',
              name: 'LHeaderPage6',
              component: LHeaderPage6,
              meta:{transition:"ts-lheaderpage6"},
            },
            {
              path: 'lheaderpage7',
              name: 'LHeaderPage7',
              component: LHeaderPage7,
              meta:{transition:"ts-lheaderpage7"},
            },
            {
              path: 'lheaderpage8',
              name: 'LHeaderPage8',
              component: LHeaderPage8,
              meta:{transition:"ts-lheaderpage8"},
            },
            {
              path: 'lheaderpage9',
              name: 'LHeaderPage9',
              component: LHeaderPage9,
              meta:{transition:"ts-lheaderpage9"},
            },
          ]
        }
      ]
    
  },
  {
    path: '/elctroninpage',
    name: 'ElectronicTable',
    component: ElectronicTable,
    meta:{transition:"ts-electroinctable"},
  },
  {
    path: '/bookhome',
    name: 'BookHome',
    component: BookHome,
    meta:{transition:"ts-bookhome"},
  },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
