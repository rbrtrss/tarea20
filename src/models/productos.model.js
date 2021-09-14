import mongoose from 'mongoose';

const AutoIncrement = require('mongoose-sequence')(mongoose);

const ProductoSchema = new mongoose.Schema({
  title: String,
  price: Number,
  thumbnail: String,
  prodID: Number,
});

ProductoSchema.plugin(AutoIncrement, { inc_field: 'prodID' });

const Producto = mongoose.model('productos', ProductoSchema);

export default Producto;
