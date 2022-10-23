<template>
<h1>BUBBLES</h1>

<br><label><h3>{{b}}</h3>  <img  width="150" src="./assets/detergente.png" ><br>
Detergente Ace Naturals<br> perfumante Pack 4 unds 2.8 Lts 
<br>$17.700</label>
<input v-model='cant1' type="number">
<label> $ {{suma1}}</label>

<label><h3>{{v}}</h3>  <img  width="150" src="./assets/paño.png" > <br>
Paños Multiuso - 3 UN<br>
$ 2.700</label>
<input v-model='cant2' type="number">
<label> $ {{suma2}}</label><br>

<br><label><h3>{{v}}</h3> <img  height="160" width="180" src="./assets/trapero.png"><br>
Trapero Desinfección C/Ojal -10 UN<br>
$ 2.700</label>
<input v-model='cant3' type="number">
<label> $ {{suma3}}</label><br>

<br><label><h3>{{v}}</h3> <img  width="150" src="./assets/escobilla.jpg" ><br>
 Pack 2 Escobillas De Wc Sopapo Baño Limpieza Desinfección<br>
$ 5.990</label>
<input v-model='cant4' type="number">
<label> $ {{suma4}}</label><br>

<br><label><h3>{{v}}</h3><img  width="150" src="./assets/guante.jpg" > <br>
Guante Conveniente M - UN<br> $3.190</label>
<input v-model='cant5' type="number">
<label> $ {{suma5}}</label><br>

<br><label><h3>{{v}}</h3> <img  width="150" src="./assets/virutilla.png" > <br>
  Virutilla gruesa grande  clásica<br> $2.289</label>
<input v-model='cant6' type="number">
<label> $ {{suma6}}</label><br>

<br><label><h3>{{cl}} </h3> <img  width="150" src="./assets/cloro.png" > <br>
CLORO TRADICIONAL 1000 CC CLOROX<br>
$ 1.490</label>
<input v-model='cant7' type="number">
<label> $ {{suma7}}</label><br>

<br><label><h3>{{q}}</h3> <img  width="150" src="./assets/quix.png" >
<br> lavalozas 750 ML<br> $2.400</label>
<input v-model='cant8' type="number">
<label> $ {{suma8}}</label><br>

<br><label><h3>{{l}}</h3> <img  width="150" src="./assets/lysof.jpeg" >
<br> Ambientes y Superficies<br> $2.287</label>
<input v-model='cant9' type="number">
<label> $ {{suma9}}</label><br><br>

<br><label><h3>{{va}}</h3> <img  width="150" src="./assets/vanish.jpg" >
<br> Quitamancha en polvo rosa doypack 450 gr<br>$4.990</label>
<input v-model='cant10' type="number">
<label> $ {{suma10}}</label><br><br>

<br><label><h3>{{no}}</h3> <img  width="150" src="./assets/nova.jpg" >
<br> Toalla Nova Clásica Bajo Metraje 1 Hoja 3 Rollos x 12,5 mts<br>$1.490</label>
<input v-model='cant11' type="number">
<label> $ {{suma11}}</label><br><br>

<button @click ='sumatotal'>total ${{st}} </button><br><br>
<button @click ='genlista'>lista </button>
<label>{{ls}} </label>

<button @click ='update'>a </button>
<label>{{a}} </label>


</template>

<script setup>
  import {ref,computed} from 'vue'
  import axios from 'axios'

  const suma1= computed(() => {
    if(cant1.value >0){
      return cant1.value*17700
    }else{
     return '0'
    }
  })
  const cant1=ref(0)

  const b= ref("ACE")
  const v=ref("VIRUTEX")
  const cl=ref("CLOROX")
  const q=ref("QUIX")
  const l=ref("lysoform")
  const va=ref("VANISH")
  const no=ref("NOVA CLASICA")


  const suma2= computed(() => {
    if(cant2.value >0){
      return cant2.value*2700
    }else{
     return '0'
    }
  })
  const cant2=ref(0)

  const suma3= computed(() => {
    if(cant3.value >0){
      return cant3.value*2700
    }else{
     return '0'
    }
  })
  const cant3=ref(0)

  const suma4= computed(() => {
    if(cant4.value >0){
      return cant4.value*5990
    }else{
     return '0'
    }
  })
  const cant4=ref(0)

  const suma5= computed(() => {
    if(cant5.value >0){
      return cant5.value*3190
    }else{
     return '0'
    }
  })
  const cant5=ref(0)

  const suma6= computed(() => {
    if(cant6.value >0){
      return cant6.value*2289
    }else{
     return '0'
    }
  })
  const cant6=ref(0)

  const suma7= computed(() => {
    if(cant7.value >0){
      return cant7.value*1490
    }else{
     return '0'
    }
  })
  const cant7=ref(0)

  const suma8= computed(() => {
    if(cant8.value >0){
      return cant8.value*2400
    }else{
     return '0'
    }
  })
  const cant8=ref(0)

  const suma9= computed(() => {
    if(cant9.value >0){
      return cant9.value*2287
    }else{
     return '0'
    }
  })
  const cant9=ref(0)

  const suma10= computed(() => {
    if(cant10.value >0){
      return cant10.value*4990
    }else{
     return '0'
    }
  })
  const cant10=ref(0)

  const suma11= computed(() => {
    if(cant11.value >0){
      return cant11.value*1490
    }else{
     return '0'
    }
  })
  const cant11=ref(0)

  let a=ref()
  let update=function(){
    axios
    .get('https://localhost:3000/db')
    .then(response =>{
      a =response.data.db
    })
  }


  const st=ref(0)
  const ls=ref()
  let sumatotal = function(){
    axios
    .post('http://localhost:3000/st',{'suma1':cant1.value,'suma2':cant2.value,'suma3':cant3.value,'suma4':cant4.value,'suma5':cant5.value, 'suma6':cant6.value,'suma7':cant7.value,'suma8':cant8.value,'suma9':cant9.value,'suma10':cant10.value,'suma11':cant11.value})
    .then(response =>{
      st.value=response.data.st
      
    })
  }
  
  let genlista = function(){
    if(cant1.value>0 || cant2.value>0 || cant3.value>0 || cant4.value>0 || cant5.value>0|| cant6.value>0 || cant7.value>0 || cant8.value>0|| cant9.value>0 || cant10.value>0 || cant11.value>0){
      alert(" Detergente Ace Naturals perfumante Pack 4 unds 2.8 Lts  \n: cantidad :"+cant1.value +" $ " +suma1.value+ 
      "\n Paños Multiuso \n cantidad : :" +cant2.value +" $ " +suma2.value+
      "\n Trapero Desinfección C/Ojal -10 UN\n cantidad : :" +cant3.value +" $ " +suma3.value+
      "\n Pack 2 Escobillas De Wc Sopapo Baño Limpieza Desinfección: \n cantidad :" +cant4.value +" $ " +suma4.value+
      "\n Guante Nitrilo Flocado Estándar N°9\n cantidad :" +cant5.value +" $ " +suma5.value+ 
      "\n Virutilla\n cantidad :" +cant6.value +" $ " +suma6.value+
      "\n CLORO TRADICIONAL \n cantidad :" +cant7.value +" $ " +suma7.value+      
      "\n LAVALOZAS\n cantidad :" +cant8.value +" $ " +suma8.value+
      "\n Lysoform Ambientes y Superficies\n cantidad :" +cant9.value +" $ " +suma9.value+
      "\n Quitamancha en polvo rosa doypack 450 gr\n cantidad :" +cant10.value +" $ " +suma10.value+
      "\n Toalla Nova Clásica Bajo Metraje 1 Hoja 3 Rollos x 12,5 mts\n cantidad :" +cant9.value +" $ " +suma9.value+ "total : $"+st.value); 

    }
  }

</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 50px;

}
</style>
