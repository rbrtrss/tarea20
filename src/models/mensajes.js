import moment from 'moment';
import Mensaje from './mensajes.model';
// import listaMensajes from '../../persistence/mensajesPersistencia';

function formatoMensaje(usuario, contenido) {
  const mensaje = new Mensaje({
    usuario,
    contenido,
    tiempo: moment().format('L h:mm a'),
  });
  mensaje.save();
  return mensaje;
}

export default formatoMensaje;
