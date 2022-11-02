//se intento conectar la base de datos de mongoodb

const {mongoose, Schema, model}= require('mongoose');

const server = '127.0.0.1:27017'; 
const database = 'listadb';

module.exports = ()=>{ //para poder exportar la base
    const connect = async () => {
        try {
            await mongoose.connect(`mongodb://${server}/${database}`)
    
            console.log('MongoDB connected!!'); //mostrar si se conecta
         console.log('Add prod')
        await addProd()
            mongoose.disconnect()
         console.log('Disconnecting')
        } catch (err) {
            console.log('Failed to connect to MongoDB', err);//mostrar si no se conecta
        }
    };

    const ProdSchema = new Schema( //para poder colocar los datos
        {
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
      
      data = [{'nombre': 'Detergente Ace Naturals perfumante Pack 4 unds 2.8 Lts ', 'cantidad': '1', 'precio': '$17.700'},
      {'nombre': 'Paños Multiuso - 3 UN ', 'cantidad': '1', 'precio': '$ 2.700'},
      {'nombre': 'Trapero Desinfección C/Ojal -10 UN ', 'cantidad': '1', 'precio': '$ 2.700 '},
      {'nombre': 'Pack 2 Escobillas De Wc Sopapo Baño Limpieza Desinfección ', 'cantidad': '1', 'precio': '$ 5.990'},
      {'nombre': 'Guante Conveniente M - UN ', 'cantidad': '1', 'precio': ' $3.190'},
      {'nombre': 'Virutilla gruesa grande  clásica ', 'cantidad': '1', 'precio': '$2.289'},
      {'nombre': 'CLORO TRADICIONAL 1000 CC CLOROX', 'cantidad': '1', 'precio': '$ 1.490'},
      {'nombre': 'lavalozas 750 ML ', 'cantidad': '1', 'precio': '$2.400'},
      {'nombre': 'Ambientes y Superficies', 'cantidad': '1', 'precio': ' $2.287'},
      {'nombre': 'Quitamancha en polvo rosa doypack 450 gr ', 'cantidad': '1', 'precio': '$4.990'},
      {'nombre': 'Toalla Nova Clásica Bajo Metraje ', 'cantidad': '1', 'precio': '$1.490'}]
      
      const addProd = async () => {
        await Prod.deleteMany({});
        await Prod.insertMany(data);
        const ver = await Prod.find({});
        console.log(ver)//para mostrar por consola
      }
    connect();
}