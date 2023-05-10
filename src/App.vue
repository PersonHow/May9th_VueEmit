<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
  <header>This is a App!!!!</header>
  <div class="container">
    <nav >
    <RouterLink to="/"><p class="rainbow-text-Emit ">Emit</p></RouterLink>
    <RouterLink to="/vshow"><p class="rainbow-text-Emit ">VShow</p></RouterLink>
    <RouterLink to="/home"><p  class="rainbow-text-Emit ">Home</p></RouterLink>
    <RouterLink to="/model"><p  class="rainbow-text-Emit ">Model</p></RouterLink>
  </nav>
  </div>
      
  <div class="appView">
    <RouterView />
  </div>

</template>

<style scoped>
header{
  font-size: 45pt;
  width: 100%;
  height: 8rem;
  text-align: center;
}
nav{
  width: 100%;
  height: 6rem;
  display: flex;
  justify-content: space-around;
}

.appView{
  width: 100%;
  height: 30rem;
  display: flex;
  justify-content: center;
}

  @keyframes hue {
    from {
        filter: hue-rotate(0);
    }

    to {
        filter: hue-rotate(-360deg);
    }
  }

  .rainbow-text-Emit {
    display: inline-block;
    position: relative;
    font-weight: 500;
    font-size: 20px;
    color: transparent;
    animation: hue 1.5s linear infinite;
    background-image: linear-gradient(to right bottom, rgb(255,0,0), rgb(255,128,0), rgb(255,255,0), rgb(0,255,0), rgb(0,255,128), rgb(0,255,255), rgb(0,128,255), rgb(0,0,255), rgb(128,0,255), rgb(255,0,255), rgb(255,0,128));
    -webkit-background-clip: text;
  }
</style>
