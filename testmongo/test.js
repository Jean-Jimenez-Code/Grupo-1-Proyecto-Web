
const { mongoose, Schema, model } = require('mongoose');

const server = '127.0.0.1:27017'; 
const database = 'nombre';

const connectDB = async () => {
    try {
        await mongoose.connect(`mongodb://${server}/${database}`)

        console.log('MongoDB connected!!');
 	      console.log('Find regions')
	      regions = await Regions.find({})
        for( let r of regions){
          for(let c of r.comunas){
            if(c[0] == 'S' ||  c[0]== 's')
              console.log(c)
          }
        }
	    
        mongoose.disconnect()
 	console.log('Disconnecting')
    } catch (err) {
        console.log('Failed to connect to MongoDB', err);
    }
};


const RegionsSchema = new Schema(
  {
    region: {
      type: String,
      required: [true, 'La region es obligatoria'],
    },
    comunas: {
      type: [String],
      required: [true, 'Al menos una comuna es obligatoria'],
    }
  },
  { timestamps: true },
);

Regions = model('regions', RegionsSchema)
connectDB();