/* eslint-disable import/extensions */
import express from 'express';
import productos from '../models/productos.js';

const routes = express.Router();

// Rutas GET
routes.get('/listar', async (req, res) => {
  const listaProductos = await productos.showProductos();
  res.json(listaProductos);
});

routes.get('/listar/:id', async (req, res) => {
  // const indice = req.params.id;
  const unProducto = await productos.showUnProducto(req.params.id);
  res.json(unProducto);
});

routes.get('/', (req, res) => {
  // res.render('main', productos.showProductos());
  res.render('main');
});

// Rutas POST
routes.post('/guardar', async (req, res) => {
  const producto = req.body;
  const agregado = await productos.addProducto(
    producto.title,
    producto.price,
    producto.thumbnail
  );
  res.json(agregado);
  // res.render('main', productos.showProductos());
  // res.render('main');
  // res.redirect('back');
});

// Rutas PUT
routes.put('/actualizar/:id', async (req, res) => {
  const newInfo = req.body;
  const productoModificado = await productos.modifyProducto(
    req.params.id,
    newInfo.title,
    newInfo.price,
    newInfo.thumbnail
  );
  res.json(productoModificado);
});

// Rutas DELETE
routes.delete('/borrar/:id', async (req, res) => {
  const newProductos = await productos.deleteProducto(req.params.id);
  res.json(newProductos);
});

export default routes;
