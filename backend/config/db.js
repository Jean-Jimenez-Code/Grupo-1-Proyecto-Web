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
      
      data = [{'cantidad': '2', 'precio': '2700'}, //colocar los datos
              {'cantidad': '4', 'precio': '2990'}]
      
      const addProd = async () => {
        await Prod.deleteMany({});
        await Prod.insertMany(data);
        const ver = await Prod.find({});
        console.log(ver)//para mostrar por consola
      }
    connect();
}