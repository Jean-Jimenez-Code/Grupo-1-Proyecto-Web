const { mongoose, Schema, model } = require('mongoose');//importamos el mongo, schema , model

const server = '127.0.0.1:27017'; 
const database = 'ls';//enviaremos los datos a una carpeta llamada ls en la base de datos

const connectDB = async () => { //para que se conecte la base de datos
    try {
        await mongoose.connect(`mongodb://${server}/${database}`)

        console.log('MongoDB connected!!');
 	console.log('Add user')
	await addProd()
        mongoose.disconnect()
 	console.log('Disconnecting')
    } catch (err) {
        console.log('Failed to connect to MongoDB', err);
    }
};


const ProdSchema = new Schema(//para asignar los atributos a las variables
  {
    nombre: {
      type: String,//string osea que guardara los datos tipo texto
      required: [true, 'Nombre is mandatory'],//is mandatory quiere decir que debe de existir un valor osea no debe ser nulo
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
//en data , ingresamos los datos en la base de datos, colocando un [{"nombre:dato"}], segun la variable que creamos arriba
data = [{'nombre': 'Detergente Ace Naturals perfumante Pack 4 unds 2.8 Lts', 'cantidad': '0', 'precio': '0'},
{'nombre': 'Paños Multiuso - 3 UN', 'cantidad': '0', 'precio': '0'},
{'nombre': 'Trapero Desinfección C/Ojal -10 UN', 'cantidad': '0', 'precio': '0'},
{'nombre': 'Pack 2 Escobillas De Wc Sopapo Baño Limpieza Desinfección', 'cantidad': '0', 'precio': '0'},
{'nombre': 'Guante Conveniente M - UN', 'cantidad': '0', 'precio': '0'},
{'nombre': 'Virutilla gruesa grande  clásica', 'cantidad': '0', 'precio': '0'},
{'nombre': 'CLORO TRADICIONAL 1000 CC CLOROX', 'cantidad': '0', 'precio': '0'},
{'nombre': 'lavalozas 750 ML', 'cantidad': '1', 'precio': '0'},
{'nombre': 'Ambientes y Superficies', 'cantidad': '0', 'precio': '0'},
{'nombre': 'Quitamancha en polvo rosa doypack 450 gr', 'cantidad': '0', 'precio': '0'},
{'nombre': 'Toalla Nova Clásica Bajo Metraje', 'cantidad': '0', 'precio': '0'}]

const addProd = async () => {
  await Prod.deleteMany({});
  await Prod.insertMany(data);
  const ver = await Prod.find({}); //en la variable de "ver" guardamos los datos pedidos con el comando Prod.find
  console.log(ver);//para poder ver los datos por consola
}

connectDB();//conectar la base de datos
