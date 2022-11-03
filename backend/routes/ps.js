var express = require('express');
var router = express.Router();
const { mongoose, Schema, model } = require('mongoose');
const server = '127.0.0.1:27017'; 
const database = 'ls';

const connectDB = async () => {
    try {
        await mongoose.connect(`mongodb://${server}/${database}`)

        console.log('MongoDB connected!!');
    } catch (err) {
        console.log('Failed to connect to MongoDB', err);
    }
};

connectDB()

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

router.get('/',async function( res, _) {
  console.log("hoola")
  let db=await Prod.find()
  console.log(db)

 
})

module.exports = router;