<script>
import { RouterLink} from 'vue-router'
import Popup from '../components/Popup.vue'

export default{
    components:{
        Popup
    },
    data(){
        return{
            isShow:false,
            modelInfo:{
                title:"GGG",
                content:"123"
            }
        }
    },
    methods:{
        cover(){
            this.isShow = !this.isShow;
        }
    }
}
</script>


<template>
    <div class="modelArea">
        <h1>Model</h1>
        <!-- <h3>{{ isShow }}</h3> -->
        <button type="button" @click="cover">Button</button>
    </div>

    <Popup
        v-if="isShow" 
        v-on:switch="cover"
        v-bind:title="modelInfo.title" 
        v-bind:content="modelInfo.content"
    />

</template>


<style lang='scss' scoped>

</style>