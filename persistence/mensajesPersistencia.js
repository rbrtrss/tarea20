import knex from 'knex';

const mensajesDB = knex({
  client: 'sqlite3',
  connection: { filename: './mensajes.sqlite' },
  useNullAsDefault: true,
});

mensajesDB.schema.hasTable('mensajes').then((exists) => {
  if (!exists) {
    console.log('Creando tabla mensajes');
    mensajesDB.schema
      .createTable('mensajes', (table) => {
        table.increments('id');
        table.string('usuario');
        table.string('contenido');
        table.string('tiempo');
      })
      .then(() => {
        console.log('Creada tabla mensajes');
      });
  } else {
    console.log('Tabla mensajes existente');
  }
});

class ListaMensajes {
  async listarTodos() {
    return mensajesDB.from('mensajes').select();
  }

  async listar(id) {
    return mensajesDB.from('mensajes').where({ id: id }).select();
  }

  async agregar(data) {
    return mensajesDB('mensajes')
      .insert(data)
      .then(() => console.log('Mensaje guardado'));
  }

  //   async update(id, data) {
  //     return mensajesDB.from('mensajes').where({ id }).update(data);
  //   }

  //   async delete(id) {
  //     return mensajesDB.from('mensajes').where({ id }).del();
  //   }

  //   async query(query) {
  //     return mensajesDB.from('mensajes').where(query);
  //   }
}

export default new ListaMensajes();
