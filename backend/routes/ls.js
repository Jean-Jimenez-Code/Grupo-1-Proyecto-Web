const { mongoose, Schema, model } = require('mongoose');

const server = '127.0.0.1:27017'; 
const database = 'listadb';

const connectDB = async () => {
    try {
        await mongoose.connect(`mongodb://${server}/${database}`)

        console.log('MongoDB connected!!');
 	console.log('Add user')
	await addUsers()
        mongoose.disconnect()
 	console.log('Disconnecting')
    } catch (err) {
        console.log('Failed to connect to MongoDB', err);
    }
};


const UserSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, 'Name is mandatory'],
    },
    lastname: {
      type: String,
      required: [true, 'Lastname is mandatory'],
    },
    rut: {
      type: String,
      unique: true,
      required: [true, 'RUT is mandatory']
    },
  },
  { timestamps: true },
);

Users = model('users', UserSchema)

data = [{'name': 'crithian', 'lastname': 'Aguilera', 'rut': '1111111-1'},
        {'name': 'alejandro', 'lastname': 'Carrasco', 'rut': '1111111-2'}]

const addUsers = async () => {
  await Users.deleteMany({});
  await Users.insertMany(data);
}

connectDB();
