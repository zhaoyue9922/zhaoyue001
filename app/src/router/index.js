import Vue from 'vue'
import Router from 'vue-router'
import MovieList from '@/components/movie/MovieList'
import MusicList from '@/components/music/MusicList'
import BookList from '@/components/book/BookList'
import PhotoList from '@/components/photo/PhotoList'
import MovieDetail from '@/components/movie/MovieDetail'
import MusicDetail from '@/components/music/MusicDetail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect:'/movie/MovieList'
    },
    {
      path:'/movie/MovieList',
      component:MovieList
    },
    {
      path:'/music/MusicList',
      component:MusicList
    },
    {
      path:'/book/BookList',
      component:BookList
    },
    {
      path:'/photo/PhotoList',
      component:PhotoList
    },
    {
      path:'/movie/MovieDetail/:movieId',
      component:MovieDetail
    },
    {
      path:'/music/MusicDetail/:musicId',
      component:MusicDetail
    },
    {
      path:'/photo/PhotoDetail/:photoId',
      component:PhotoDetail
    }
  ]
})
