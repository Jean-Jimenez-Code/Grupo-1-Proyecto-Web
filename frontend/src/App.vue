<template>
<h1>BUBBLES</h1><!-- titulo de la pag -->

<!--creacion de bloques -->
<div class=detergente style="color: blue;" ><!--bloque llamado detergente de colo azul , para luego poder colocar su posicion en style -->
<br><label><h3>{{b}}</h3>  <img  width="150" src="./assets/detergente.png" ><br> <!--br para hacer salto de linea -->
Detergente Ace Naturals<br> perfumante Pack 4 unds 2.8 Lts 
<br>$17.700</label>
<input v-model='cant1' type="number">
<label> $ {{suma1}}</label> <!--variable suma1 que mostrara un valor guardado en scrypt  -->
</div>

<div class=paños style="color: blue;"  >
<label><h3>{{v}}</h3>  <img  width="150" src="./assets/paño.png" > <br>
Paños Multiuso - 3 UN<br>
$ 2.700</label>
<input v-model='cant2' type="number">
<label> $ {{suma2}}</label><br>
</div>

<div class=trapero style="color: blue;"  >
<br><label><h3>{{v}}</h3> <img  height="160" width="180" src="./assets/trapero.png"><br>
Trapero Desinfección C/Ojal -10 UN<br>
$ 2.700</label>
<input v-model='cant3' type="number">
<label> $ {{suma3}}</label><br>
</div>

<div class=escobilla style="color: blue;"  >
<br><label><h3>{{v}}</h3> <img  width="150" src="./assets/escobilla.png" ><br>
 Pack 2 Escobillas De Wc Sopapo Baño Limpieza Desinfección<br>
$ 5.990</label>
<input v-model='cant4' type="number">
<label> $ {{suma4}}</label><br>
</div>

<div class=guante style="color: blue;"  >
<br><label><h3>{{v}}</h3><img  width="150" src="./assets/guante.png" > <br>
Guante Conveniente M - UN<br> $3.190</label>
<input v-model='cant5' type="number">
<label> $ {{suma5}}</label><br>
</div>

<div class=virutilla style="color: blue;"  >
<br><label><h3>{{v}}</h3> <img  width="150" src="./assets/virutilla.png" > <br>
  Virutilla gruesa grande  clásica<br> $2.289</label>
<input v-model='cant6' type="number">
<label> $ {{suma6}}</label><br>
</div>

<div class=cloro style="color: blue;"  >
<br><label><h3>{{cl}} </h3> <img  width="150" src="./assets/cloro.png" > <br>
CLORO TRADICIONAL 1000 CC CLOROX<br>
$ 1.490</label>
<input v-model='cant7' type="number">
<label> $ {{suma7}}</label><br>
</div>

<div class=lavalozas style="color: blue;"  >
<br><label><h3>{{q}}</h3> <img  width="150" src="./assets/quix.png" >
<br> lavalozas 750 ML<br> $2.400</label>
<input v-model='cant8' type="number">
<label> $ {{suma8}}</label><br>
</div>

<div class=lysof style="color: blue;"  >
<br><label><h3>{{l}}</h3> <img  width="150" src="./assets/lysof.png" >
<br> Ambientes y Superficies<br> $2.287</label>
<input v-model='cant9' type="number">
<label> $ {{suma9}}</label><br><br>
</div>

<div class=vanish style="color: blue;"  >
<br><label><h3>{{va}}</h3> <img  width="150" src="./assets/vanish.png" >
<br> Quitamancha en polvo rosa doypack 450 gr<br>$4.990</label>
<input v-model='cant10' type="number">
<label> $ {{suma10}}</label><br><br>
</div>

<div class=nova style="color: blue;"  >
<br><label><h3>{{no}}</h3> <img  width="150" src="./assets/nova.png" >
<br> Toalla Nova Clásica Bajo Metraje<br> 1 Hoja 3 Rollos x 12,5 mts<br>$1.490</label>
<input v-model='cant11' type="number">
<label> $ {{suma11}}</label><br><br>
</div>

<!--creacion de botones -->
<div class=boton >
<button @click ='sumatotal'>total ${{st}} </button><br><br>
<button @click ='genlista'>lista </button>
<label>{{ls}} </label>
</div>



</template>

<script setup>
  import {ref,computed} from 'vue'
  import axios from 'axios'

  const suma1= computed(() => { //cuando cantidad sea mayo de 0, se multiplique por el precio mostrado y retorne el resultado
    if(cant1.value >0){
      return cant1.value*17700
    }else{
     return '0'
    }
  })
  const cant1=ref(0) //se muestra inicialmente en 0

   //guardar los nombres de las marcas en variables 
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


  const st=ref(0)
  const ls=ref()

  let sumatotal = function(){//funcion de boton
    axios
    //enviar los datos a la ruta st de backend
    .post('http://localhost:3000/st',{'suma1':cant1.value,'suma2':cant2.value,'suma3':cant3.value,'suma4':cant4.value,'suma5':cant5.value, 'suma6':cant6.value,'suma7':cant7.value,'suma8':cant8.value,
    'suma9':cant9.value,'suma10':cant10.value,'suma11':cant11.value})// con las '' selecciona el nombre que tendra en la ruta, y el valor que se guardara en ese nombre 

    .then(response =>{
      st.value=response.data.st   //devolver el valor desde la ruta st para guardarlo en la variable st
    })
  }
  
  //funcion de boton
  let genlista = function(){
    //si existe algun valor en cant , se podra mostra una ventana emergente con los datos ingresados
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
      "\n Toalla Nova Clásica Bajo Metraje 1 Hoja 3 Rollos x 12,5 mts\n cantidad :" +cant11.value +" $ " +suma11.value+ "\ntotal : $"+st.value); 

    }
  }

</script>


<style>
#app {
  -webkit-font-smoothing: antialiased;
  font-style:oblique;
  text-align: center;
  color: #ff6c0a;
  
  background-image: url(./assets/celeste.jpg);
  background-repeat: no-repeat;
  background-attachment:fixed;
  background-size:cover;
}
.detergente 
{
  font-family: Georgia, "Times New Roman", Times, serif;
  font-style:italic;
  font-weight: 700;
  position:center;
  top:19%;
  left: 20%;
  margin-top: -5px;
  margin-left: -800px;
}

.paños
{
  font-family: Georgia, "Times New Roman", Times, serif;
  font-style:italic;
  font-weight: 700;
  position:center;
  top:19%;
  left: 20%;
  margin-top: -290px;
  margin-left: 50px;
}

.trapero
{
  
  font-family: Georgia, "Times New Roman", Times, serif;
  font-style:italic;
  font-weight: 700;
  position:center;
  top:19%;
  left: 75%;
  margin-top: -279px;
  margin-left: 800px;
}

.escobilla
{
  font-family: Georgia, "Times New Roman", Times, serif;
  font-style:italic;
  font-weight: 700;
  position:center;
  top:60%;
  left:14%;
  margin-top: 80px;
  margin-left: -800px;
}

.guante
{
  font-family: Georgia, "Times New Roman", Times, serif;
   font-style:italic;
  font-weight: 700;
  position:center;
  top:60%;
  left:14%;
  margin-top: -270px;
  margin-left: 50px;
}
.virutilla
{
  font-family: Georgia, "Times New Roman", Times, serif;
   font-style:italic;
  font-weight: 700;
 position:center;
  top:56%;
  left: 76%;
  margin-top: -270px;
  margin-left: 800px;
}
.cloro
{
  font-family: Georgia, "Times New Roman", Times, serif;
   font-style:italic;
  font-weight: 700;
  position:center;
  top:98%;
  left: 19%;
  margin-top: 60px;
  margin-left: -800px;
}
.lavalozas
{
  font-family: Georgia, "Times New Roman", Times, serif;
   font-style:italic;
  font-weight: 700;
  position:center;
  top:98%;
  left: 19%;
  margin-top: -280px;
  margin-left: 50px;
}
.lysof
{
  font-family: Georgia, "Times New Roman", Times, serif;
   font-style:italic;
  font-weight: 700;
  position:center;
  top:92%;
  left: 77%;
  margin-top: -280px;
  margin-left: 800px;
}
.vanish
{
  font-family: Georgia, "Times New Roman", Times, serif;
   font-style:italic;
  font-weight: 700;
  position:center;
  top:100%;
  left: 1%;
  margin-top: 10px;
  margin-left: -800px;
}
.nova
{
  font-family: Georgia, "Times New Roman", Times, serif;
   font-style:italic;
  font-weight: 700;
  position:center;
  top:100%;
  left: 100%;
  margin-top: -290px;
  margin-left: 50px;
}
.boton
{
  font-family: Georgia, "Times New Roman", Times, serif;
  position:center;
  top:100%;
  left: 100%;
  margin-top: 30px;
  margin-left: 50px;
}

</style>

