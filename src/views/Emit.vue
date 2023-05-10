<script>
import FormView from '../components/Form.vue'

export default{
    components:{
        FormView,
    },
    data(){
        return{
            inputText:"這邊會變文字",
        }
    },
    methods:{
        getPush(sourceData){
            // this.inputText="來自屁屁的逆襲";
            this.inputText=sourceData;
        }
    }
}
</script>

<template>
<div class="emitArea">
    <h1>Emit</h1>
    <h2>{{inputText}}</h2>
    <form action="">
        <FormView 
        :inputText="inputText"
        v-on:emitPush="getPush"
        />
    </form>
</div>
        
    
</template>


<style>
.emitArea{
    width: 300px;
    height: 20rem;
    border: 1px solid black;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 5pt;
}
</style>