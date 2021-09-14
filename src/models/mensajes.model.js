import mongoose from 'mongoose';

const AutoIncrement = require('mongoose-sequence')(mongoose);

const MensajeSchema = new mongoose.Schema({
  usuario: String,
  contenido: String,
  tiempo: String,
  msgID: Number,
});

MensajeSchema.plugin(AutoIncrement, { inc_field: 'msgID' });

const Mensaje = mongoose.model('mensajes', MensajeSchema);

export default Mensaje;
