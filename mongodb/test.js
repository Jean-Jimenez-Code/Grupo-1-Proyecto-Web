const { mongoose, Schema, model } = require('mongoose');

const server = '127.0.0.1:27017'; 
const database = 'ls';

const connectDB = async () => {
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


const ProdSchema = new Schema(
  {
    nombre: {
      type: String,
      required: [true, 'Nombre is mandatory'],
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

data = [{'nombre': 'confort', 'cantidad': '2', 'precio': '$1000'},
        {'nombre': 'deterjente', 'cantidad': '1', 'precio': '2000'}]

const addProd = async () => {
  await Prod.deleteMany({});
  await Prod.insertMany(data);
  const ver = await Prod.find({});
  console.log(ver);
}

connectDB();
