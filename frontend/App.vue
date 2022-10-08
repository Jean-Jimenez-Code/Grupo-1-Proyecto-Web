<template>
  <label> Altura en metros:</label>
  <br>
  <input type='number' v-model='height' >
   <br>
  <label> Masa en kg:</label>
  <br>
  <input type='number' v-model="weight" >
  <br>
  <label>IMC: {{result}}</label>

</template>

<script setup>
  import {ref, computed} from 'vue'

  const height = ref(0)
  const weight = ref(0)
  const result = computed (() => {
    if(weight.value <= 0 || height.value <=0 ){
      return ''
    }else{
      return weight.value / height.value**2
    }
  })
  
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
