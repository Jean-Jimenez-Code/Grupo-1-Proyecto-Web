const {mongoose, Schema, model}= require('mongoose');

const server = '127.0.0.1:27017'; 
const database = 'listadb';

module.exports = ()=>{
    const connect = async () => {
        try {
            await mongoose.connect(`mongodb://${server}/${database}`)
    
            console.log('MongoDB connected!!');
         console.log('Add prod')
        await addProd()
            mongoose.disconnect()
         console.log('Disconnecting')
        } catch (err) {
            console.log('Failed to connect to MongoDB', err);
        }
    };

    const ProdSchema = new Schema(
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
      
      data = [{'cantidad': 'aaaa', 'precio': 'Aguilera'},
              {'cantidad': 'alejandro', 'precio': 'Carrasco'}]
      
      const addProd = async () => {
        await Prod.deleteMany({});
        await Prod.insertMany(data);
        const ver = await Prod.find({});
        console.log(ver)
      }
    connect();
}