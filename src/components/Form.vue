<script>
export default{
    data(){
        return{
            sourceData:"",
        }
    },
    methods:{
        push(){
            this.$emit("emitPush",this.sourceData);
        }
    }
}
</script>

<template>
<div class="textArea">
        <p>{{ sourceData }}</p>
        <input type="text" name="" id="" v-model="sourceData">
        <button type="button" 
        @click="push"> click</button>
    
</div>
        
    
</template>


<style>

</style>