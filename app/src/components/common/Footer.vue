<template>
    <div>
        <ul class="footer" :style="{'background':bg}">
        <li @click="$emit('change','#555555','movie')"><router-link to="/movie/MovieList">电影</router-link></li>
        <li @click="$emit('change','#B22222','music')"><router-link to="/music/MusicList">音乐</router-link></li>
        <li @click="$emit('change','#ADFF2F','book')"><router-link to="/book/BookList">书籍</router-link></li>  
        <li @click="$emit('change','#4876FF','photo')"><router-link to="/photo/PhotoList">图片</router-link></li>    
        </ul>
    </div>
</template>

<script>
    export default {
        props:['bg'],
        methods:{
        }
    }
</script>

<style scoped>
.footer{
    display: flex;
    height: 1rem;
    line-height: 1rem;
    position: fixed;
    bottom: 0px;
    width: 100%;
}
.footer li{
    flex-grow: 1;
    text-align:center;
    color: #ccc;
}
.footer li a{
    color:#999;
}
.footer li a.router-link-active{
    color:#fff;
}
</style>