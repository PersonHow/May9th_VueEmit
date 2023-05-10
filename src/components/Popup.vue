<script>
export default{
    props:[
    "title",
    "content"
    ],
    data(){
        return{
            
        }
    },
    methods:{
        Outside(){
            this.$emit("switch")
        }
    }
}
</script>

<template>
<div  class="modal">
        <div class="card">
            <h2>{{ title }}</h2>
            <p>{{ content }}</p>
            <button type="button" @click="Outside">Close</button>
        </div>
        <div class="bg">
            <RouterLink to="/">emit</RouterLink>
        </div>
    </div>

</template>


<style lang="scss" scoped>
.modal{
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;

    .card{
        width: 30rem;
        height: 15rem;
        border: 1px solid black;
        background-color: #fff;
        border-radius: 5rem;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        text-align: center;

    }
    .bg{
        width: 100%;
        height: 100%;
        background-color: rgb(0, 0, 0, 0.2);
        position: fixed;
        top: 0;
        left: 0;
        z-index: -1;
    }
}

</style>