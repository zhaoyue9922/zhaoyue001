<template>
    <div class="musicList">
        <img :src="obj.bg" alt="" v-for="(obj,index) in musicList" :key="index" @click="musicDetail(obj.id)">
    </div>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'
    export default {
    data(){
        return{
            musicList:[]
        }
    },
    created () {
        axios.get('./static/data/musiclist.json').then(res =>{
            this.musicList = res.data.albums;
        }).catch(res =>{
            console.log('数据获取失败');
        })
    },
    methods:{
        musicDetail(id){
            this.$router.push(`/music/MusicDetail/${id}`);
        }
    }


    }
    
    
</script>

<style scoped>
.musicList img{
    width: 50%;
    display: block;
    float: left;
}

</style>