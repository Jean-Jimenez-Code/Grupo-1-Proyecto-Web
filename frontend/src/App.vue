<template>
<h1>tienda</h1>
<br><label>producto1 :$1000</label>
<input v-model='cant1' type="number">
<label> $ {{suma1}}</label><br>
<br><label>producto2 :$2000</label>
<input v-model='cant2' type="number">
<label> $ {{suma2}}</label><br>
<br><label>producto3 :$3000</label>
<input v-model='cant3' type="number">
<label> $ {{suma3}}</label><br>
<br><label>producto4 :$4000</label>
<input v-model='cant4' type="number">
<label> $ {{suma4}}</label><br>
<br><label>producto5 :$5000</label>
<input v-model='cant5' type="number">
<label> $ {{suma5}}</label><br>

<button @click ='sumatotal'>total ${{st}} </button><br>
<button @click ='genlista'>lista </button>
<label>{{ls}} </label>


</template>

<script setup>
  import {ref,computed} from 'vue'
  import axios from 'axios'

  const suma1= computed(() => {
    if(cant1.value >0){
      return cant1.value*1000
    }else{
     return '0'
    }
  })
  const cant1=ref(0)

  const suma2= computed(() => {
    if(cant2.value >0){
      return cant2.value*2000
    }else{
     return '0'
    }
  })
  const cant2=ref(0)

  const suma3= computed(() => {
    if(cant3.value >0){
      return cant3.value*3000
    }else{
     return '0'
    }
  })
  const cant3=ref(0)

  const suma4= computed(() => {
    if(cant4.value >0){
      return cant4.value*4000
    }else{
     return '0'
    }
  })
  const cant4=ref(0)

  const suma5= computed(() => {
    if(cant5.value >0){
      return cant5.value*5000
    }else{
     return '0'
    }
  })
  const cant5=ref(0)

  const st=ref(0)
  const ls=ref()
  let sumatotal = function(){
    axios
    .post('http://localhost:3000/st',{'suma1':cant1.value,'suma2':cant2.value,'suma3':cant3.value,'suma4':cant4.value,'suma5':cant5.value})
    .then(response =>{
      st.value=response.data.st
    })
  }
  let genlista = function(){
    axios
    .post('http://localhost:3000/ls',{'total':st.value,'cant1':cant1.value,'cant2':cant2.value,'cant3':cant3.value,'cant4':cant4.value,'cant5':cant5.value})
    .then(response =>{
      ls.value=response.data.ls
    })
  }
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
