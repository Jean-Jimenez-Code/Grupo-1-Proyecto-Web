var express = require('express');
var router = express.Router();
const { mongoose, Schema, model } = require('mongoose');//importamos el mongo, schema , model
const server = '127.0.0.1:27017'; 
const database = 'ls'; // la base de datos se guardara en una carpeta de nombre ls

const connectDB = async () => { //para que se conecte la base de datos
    try {
        await mongoose.connect(`mongodb://${server}/${database}`)

        console.log('MongoDB connected!!'); //si se conecta en la terminal dira "MongoDB connected!!"
    } catch (err) {
        console.log('Failed to connect to MongoDB', err);//si no se conecta en la terminal dira "Failed to connect to MongoDB"
    }
};



const ProdSchema = new Schema( //se asignara los atributos a las variables
  {
    nombre: {
      type: String, 
      //string osea que guardara los datos tipo texto
      required: [true, 'Nombre is mandatory'],
      //is mandatory quiere decir que debe de existir un valor osea no debe ser nulo
    },
    cantidad: {
      type: String,
      required: [true, 'cantidad is mandatory'],
    },
    precio: {
        type: String,
        required: [true, 'precio is mandatory'],
    }
  },
  { timestamps: true },
);

Prod = model('Prod', ProdSchema)

connectDB()//para conectar la base de datos


router.post('/',async function(req , res, _) {
  let cant1=req.body.cant1
  let suma1=req.body.suma1
  let cant2=req.body.cant2
  let suma2=req.body.suma2
  let cant3=req.body.cant3
  let suma3=req.body.suma3
  let cant4=req.body.cant4
  let suma4=req.body.suma4
  let cant5=req.body.cant5
  let suma5=req.body.suma5
  let cant6=req.body.cant6
  let suma6=req.body.suma6
  let cant7=req.body.cant7
  let suma7=req.body.suma7
  let cant8=req.body.cant8
  let suma8=req.body.suma8
  let cant9=req.body.cant9
  let suma9=req.body.suma9
  let cant10=req.body.cant10
  let suma10=req.body.suma10
  let cant11=req.body.cant11
  let suma11=req.body.suma11

  //con findOneAndUpdate decimos a que producto vamos a actualizarle los datos y con que datos lo vamos a actualizar
  await Prod.findOneAndUpdate({nombre:"Detergente Ace Naturals perfumante Pack 4 unds 2.8 Lts"}, { cantidad: cant1 })
  await Prod.findOneAndUpdate({nombre:"Detergente Ace Naturals perfumante Pack 4 unds 2.8 Lts"}, { precio: suma1 })
  
  await Prod.findOneAndUpdate({nombre:"Paños Multiuso - 3 UN"}, { cantidad: cant2 })
  await Prod.findOneAndUpdate({nombre:"Paños Multiuso - 3 UN"}, { precio: suma2 })
 
  await Prod.findOneAndUpdate({nombre:"Trapero Desinfección C/Ojal -10 UN"}, { cantidad: cant3 })
  await Prod.findOneAndUpdate({nombre:"Trapero Desinfección C/Ojal -10 UN"}, { precio: suma3 })

  await Prod.findOneAndUpdate({nombre:"Pack 2 Escobillas De Wc Sopapo Baño Limpieza Desinfección"}, { cantidad: cant4 })
  await Prod.findOneAndUpdate({nombre:"Pack 2 Escobillas De Wc Sopapo Baño Limpieza Desinfección"}, { precio: suma4 })

  await Prod.findOneAndUpdate({nombre:"Guante Conveniente M - UN"}, { cantidad: cant5 })
  await Prod.findOneAndUpdate({nombre:"Guante Conveniente M - UN"}, { precio: suma5 })
  
  await Prod.findOneAndUpdate({nombre:"Virutilla gruesa grande  clásica"}, { cantidad: cant6 })
  await Prod.findOneAndUpdate({nombre:"Virutilla gruesa grande  clásica"}, { precio: suma6 })
 
  await Prod.findOneAndUpdate({nombre:"CLORO TRADICIONAL 1000 CC CLOROX"}, { cantidad: cant7 })
  await Prod.findOneAndUpdate({nombre:"CLORO TRADICIONAL 1000 CC CLOROX"}, { precio: suma7 })
  
  await Prod.findOneAndUpdate({nombre:"lavalozas 750 ML"}, { cantidad: cant8 })
  await Prod.findOneAndUpdate({nombre:"lavalozas 750 ML"}, { precio: suma8 })
  
  await Prod.findOneAndUpdate({nombre:"Ambientes y Superficies"}, { cantidad: cant9 })
  await Prod.findOneAndUpdate({nombre:"Ambientes y Superficies"}, { precio: suma9 })
  
  await Prod.findOneAndUpdate({nombre:"Quitamancha en polvo rosa doypack 450 gr"}, { cantidad: cant10 })
  await Prod.findOneAndUpdate({nombre:"Quitamancha en polvo rosa doypack 450 gr"}, { precio: suma10 })
 
  await Prod.findOneAndUpdate({nombre:"Toalla Nova Clásica Bajo Metraje"}, { cantidad: cant11 })
  await Prod.findOneAndUpdate({nombre:"Toalla Nova Clásica Bajo Metraje"}, { precio: suma11 })
  
})


router.get('/',async function(req , res, _) {
  //se pide los datos a la base de datos
  console.log("Obteniendo Datos")
  let db=await Prod.find() 
  //con prod.find se hace llamado a la lista de base de datos para guardarlo en la variable db
  res.json(db);
})


module.exports = router;
