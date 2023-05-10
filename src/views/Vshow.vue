<script>
export default{
    data(){
        return{
            isShow:false,
        }
    },
    methods:{
        change(){
            this.isShow = !this.isShow;
        }
    },
    mounted(){

    }
}
</script>


<template>
    <div class="vshowArea">
        <div class="text">
            <h1 class="rainbow-text">Vshow</h1>
            <h2 class="rainbow-text">{{ isShow }}</h2>
            <button type="button" @click="change">change</button>
        </div>
        <div v-if="isShow" class="boxes">
            <div class="box box1"></div>
            <div class="box box2"></div>
        </div>
    </div>


        

</template>

<style>
.vshowArea{
    width: 100%;
    height: 30rem;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
}

@keyframes hue {
    from {
        filter: hue-rotate(0);
    }

    to {
        filter: hue-rotate(-360deg);
    }
}

.rainbow-text {
    display: inline-block;
    position: relative;
    font-weight: 500;
    font-size: 50px;
    color: transparent;
    animation: hue 1.5s linear infinite;
    background-image: linear-gradient(to right bottom, rgb(255,0,0), rgb(255,128,0), rgb(255,255,0), rgb(0,255,0), 
    rgb(0,255,128), rgb(0,255,255), rgb(0,128,255), rgb(0,0,255), rgb(128,0,255), rgb(255,0,255), rgb(255,0,128));
    -webkit-background-clip: text;
    margin-right: 20px;
}

.boxes{
        width: 600px;
        height: 30rem;
}

.box{
    height: 100px;
    width: 100px;
}

.box1{
    background-color: brown;
}
.box2{
    background-color: aqua;
}


</style>