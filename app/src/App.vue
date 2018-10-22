<template>
  <div id="app">
    <common-header :bg="bgColor" :title="title"></common-header>
    <common-footer :bg="bgColor" @change="fn"></common-footer>
    <router-view/>
  </div>
</template>

<script>
    import CommonHeader from '@/components/common/Header'
    import CommonFooter from '@/components/common/Footer'
export default {
  name: 'App',
  data(){
    return{
      bgColor:'#555555',
      title:'movie'
    }
  },
   components:{
            CommonHeader,
            CommonFooter
},
methods:{
  fn(color,title){
    this.bgColor = color;
    this.title = title;
  }
},
 creatrd() {
    let url = this.$route.path; //    /music/musicList
    let str = url.split('/')[1]; // ['','music','musicList'] => 'music'
    switch(str){
      case'music':
      this.bgColor = '#B22222';
      break;
      case 'movie':
      this.bgColor = '#555555';
      break;
      case 'book':
      this.bgColor = '#ADFF2F';
      break;
      case 'photo':
      this.bgColor = '#4876FF';
      break;
    }
}
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 1rem 0;
  overflow: hidden;
}
body{
  font-size: 0.32rem;
}
</style>
