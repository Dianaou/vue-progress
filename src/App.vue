<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <line-progress 
      width="auto"
      :showText="false"
      :percentage="10" />
    <line-progress :percentage="30" :stroke-width="6" />
    <line-progress :percentage="45" status="success" />
    <line-progress :percentage="67"  color="rgb(142, 113, 199)" :text-inside="true"/>
    <line-progress :percentage="89"  :stroke-width="36" color="#f56c6c"/>
    <br/>
    <circle-progress
      :width="400"
      :showText="false" 
      :percentage="10"/>
    <circle-progress :percentage="30" :stroke-width="10"/>
    <circle-progress :percentage="50" color="pink"/>
    <circle-progress
      :width="400" 
      :percentage="70" status="success" />
    <circle-progress :percentage="90" 
    status="exception" />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import lineProgress from './components/lineProgress.vue';
import circleProgress from './components/circleProgress.vue'

export default {
  name: 'app',
  components: {
    HelloWorld,
    lineProgress,
    circleProgress
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
