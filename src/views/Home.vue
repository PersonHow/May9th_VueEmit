<script>
import { RouterLink} from 'vue-router'
import Popup from '../components/Popup.vue'
export default{
       components:{
              Popup
       },
       data(){
              return{
                     isShow: false,
                     homeInfo:{
                            titla:"老派字眼",
                            content:"lemonnnnnnnnnnnn!!!!"
                     }
              }
       },
       methods:{
              changebtn(){
                     this.isShow = !this.isShow;
              }
       }
}
</script>


<template>
       <div class="homeArea">
              <h2>首頁</h2>
              <RouterLink to="/router-view">router-view</RouterLink>
              <button type="button" @click="changebtn">澔平</button>
       </div> 
       <Popup 
       v-if="isShow"
       v-on:switch="changebtn"
       :title="homeInfo.titla"
       :content="homeInfo.content"
       />
</template>


<style>

</style>