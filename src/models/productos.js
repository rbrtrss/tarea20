/* eslint-disable class-methods-use-this */
import Producto from './productos.model';

class Productos {
  async showProductos() {
    // const productos = await listaProductos.listarTodos();
    const productos = await Producto.find();
    if (productos.length === 0) {
      return { productosExisten: false, error: 'No hay productos cargados' };
    }
    return { productosExisten: true, productos: productos };
  }

  async addProducto(title, price, thumbnail) {
    const producto = new Producto({
      title: title,
      price: price,
      thumbnail: thumbnail,
    });
    producto.save();
    // await listaProductos.agregar(producto);
    return producto;
  }

  async showUnProducto(id) {
    // const producto = await listaProductos.listar(id);
    const producto = await Producto.find({ prodID: id });
    if (producto.length === 0) {
      return { error: 'Producto no encontrado' };
    }
    return producto;
  }

  async modifyProducto(id, newTitle, newPrice, newThumbnail) {
    // const producto = await listaProductos.listar(id);
    const producto = await Producto.find({ prodID: id });
    if (producto.length === 0) {
      return { error: 'Producto no encontrado' };
    }
    const changedInfo = {
      title: newTitle,
      price: newPrice,
      thumbnail: newThumbnail,
    };
    // await listaProductos.actualiza(id, changedInfo);
    await Producto.update({ prodID: id }, changedInfo);
    return { id, changedInfo };
  }

  async deleteProducto(id) {
    // const producto = await listaProductos.listar(id);
    const producto = await Producto.find({ prodID: id });
    if (producto.length === 0) {
      return { error: 'Producto no encontrado' };
    }
    // return { error: 'Producto no encontrado' };
    // await listaProductos.borra(id);
    await Producto.deleteOne({ prodID: id });
    return producto;
  }
}

// class Productos {
//   constructor() {
//     this.productos = [];
//     this.id = 0;
//   }

//   showProductos() {
//     if (this.productos.length === 0) {
//       return { productosExisten: false, error: 'No hay productos cargados' };
//     }
//     return { productosExisten: true, productos: this.productos };
//   }

//   addProducto(title, price, thumbnail) {
//     this.id += 1;
//     const producto = {
//       // id: this.id,
//       title: title,
//       price: price,
//       thumbnail: thumbnail,
//     };
//     this.productos.push(producto);
//     listaProductos.agregar(producto);
//     listaProductos.listarTodos();
//     return producto;
//   }

//   showUnProducto(id) {
//     const producto = this.productos.find(
//       (elemento) => elemento.id === Number(id)
//     );
//     if (producto === undefined) {
//       return { error: 'Producto no encontrado' };
//     }
//     return producto;
//   }

//   modifyProducto(id, newTitle, newPrice, newThumbnail) {
//     const producto = this.productos.find(
//       (elemento) => elemento.id === Number(id)
//     );
//     if (producto === undefined) {
//       return { error: 'Producto no encontrado' };
//     }
//     producto.title = newTitle;
//     producto.price = newPrice;
//     producto.thumbnail = newThumbnail;
//     return producto;
//   }

//   deleteProducto(id) {
//     const arrayIndex = this.productos.findIndex(
//       (elemento) => elemento.id === Number(id)
//     );
//     if (arrayIndex === -1) {
//       return { error: 'Producto no encontrado' };
//     }
//     this.productos.splice(arrayIndex, 1);
//     return this.productos;
//   }
// }

export default new Productos();
