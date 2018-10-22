<template>
    <v-touch v-on:swipeleft="next()">
    <div class="photo" :style="{'background-image':url}" @click="hide()"></div>    
    </v-touch>
    
</template>

<script>
    export default {
        data(){
            return{
                nowIndex:this.$route.params.photoId,
                photolist:[]
            }
        },
        created () {
            this.photolist = this.$store.state.photolist;
        },
        computed:{
            url(){
            return `url(${this.photolist[this.nowIndex].src})`;
            }
        },
        methods: {
            next(){
                this.nowIndex++;
                if(this.nowIndex == this.photolist.length){
                    this.nowIndex = 0;
                }
            },
            hide(){
                console.log(222);
                this.$router.push('/photo/photolist')
            }
        }
    }
</script>

<style scoped>
.photo{
    position: absolute;
    left: 0;
    top: 1rem;
    right: 0;
    bottom: 1rem;
    background: #000 no-repeat center center;
    color: #ffffff;
    background-size: contain;
}


</style>