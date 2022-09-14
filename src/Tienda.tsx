import React from 'react';
import { useEffect, useState } from 'react';
import { PRODUCTOS } from './assets/db.js';
import Carrito from './Carrito';
import Producto from './domain/Producto';
import Tienda from './domain/Tienda';
import ProductoComponent from './Producto'

function TiendaComponent() {

  const [tienda, setTienda] = useState<Tienda>(
    new Tienda()
  )
  // const [productos, setProductos] = useState <Array<Producto>>();

  const [items, setItems] = useState([]);





  return (
    <div className="App">
      <h1>TIENDA</h1>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-evenly',
        }}
      >
        {tienda.productos.map((producto) => {
          return (
            <li
              style={{
                listStyle: 'none',
              }}
              key={producto.sku}
            >
              <ProductoComponent
                agregar_producto_a_carrito={tienda.agrega_producto_a_carrito}
                productoData={producto}
              />
            </li>
          );
        })}
      </div>

      <Carrito items={tienda.usuario.carrito} />
    </div>
  );
}

export default TiendaComponent;
