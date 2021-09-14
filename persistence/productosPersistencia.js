/* eslint-disable class-methods-use-this */
import knex from 'knex';

const productosDB = knex({
  client: 'mysql',
  connection: {
    host: '127.0.0.1',
    user: 'root',
    password: '',
    database: 'productos',
  },
  pool: { min: 0, max: 10 },
});

productosDB.schema.hasTable('productos').then((exists) => {
  if (!exists) {
    console.log('Creando tabla productos');
    productosDB.schema
      .createTable('productos', (table) => {
        table.increments('id');
        table.string('title').notNullable();
        table.decimal('price', 8, 2).notNullable();
        table.text('thumbnail').notNullable();
      })
      .then(() => {
        console.log('Creada tabla productos');
      });
  } else {
    console.log('Tabla productos existente');
  }
});

class ListaProductos {
  async listarTodos() {
    return productosDB.from('productos').select();
    // .then((data) => JSON.stringify(data));
  }

  async listar(id) {
    return productosDB.from('productos').where({ id: id }).select();
    // .then((data) => JSON.stringify(data));
  }

  async agregar(data) {
    return productosDB('productos').insert(data);
    // .then((insertedData) => JSON.stringify(insertedData));
  }

  async actualiza(id, data) {
    return productosDB.from('productos').where({ id }).update(data);
  }

  async borra(id) {
    return productosDB.from('productos').where({ id }).del();
  }

  async busca(query) {
    return productosDB.from('productos').where(query);
  }
}

export default new ListaProductos();
