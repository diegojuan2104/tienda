import React from 'react';
import { useEffect, useState } from 'react';
import Item from './domain/Item.js';
import Tienda from './domain/Tienda';
import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

function TiendaComponent() {
  const [tienda, setTienda] = useState<Tienda>();
  const [items, setItems] = useState<Array<Item>>([]);

  useEffect(() => {
    setTienda(new Tienda());
  }, []);

  return (
    <div className="App">
      <h1>TIENDA DE FRUTAS </h1>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-evenly',
        }}
      >
        {tienda?.productos.map((producto) => {
          return (
            <li
              style={{
                listStyle: 'none',
              }}
              key={producto.sku}
            >
              <Card style={{ width: '18rem' }}>
                <Card.Img
                  style={{ width: '100%', height: '300px' }}
                  variant="top"
                  src={producto.img}
                />
                <Card.Body>
                  <Card.Title>{`${producto.sku} - ${producto.nombre}`}</Card.Title>
                  <Card.Text></Card.Text>

                  <Card.Text>Precio: $ {producto.precio}</Card.Text>
                  <Button
                    onClick={() => {
                      //tienda?.usuario.carrito.agregar_item(producto,1)
                      setItems(
                        tienda?.agrega_producto_a_carrito(producto.sku, 1)
                      );
                      console.log(tienda?.usuario.carrito.itemsList);
                    }}
                    variant="primary"
                  >
                    Agregar al Carrito
                  </Button>
                </Card.Body>
              </Card>
            </li>
          );
        })}
      </div>

      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          marginTop: '100px',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          <h1
            style={{
              marginTop: '100px',
            }}
          >
            CARRITO
          </h1>

          {items?.map((item) => {
            return (
              <div key={item.producto.sku}>{`${item.producto.sku} - ${
                item.producto.nombre
              } - ${
                item.cantidad
              } - Subtotal: ${item.calcularSubTotal()}`}</div>
            );
          })}

          <h2
            style={{
              marginTop: '100px',
            }}
          >
            Total: $ {tienda?.usuario.carrito.calcularTotal()}
          </h2>

          <Button
            onClick={() => {
              window.location.reload();
            }}
            variant="primary"
          >
            Limpiar carrito
          </Button>
        </div>
      </div>
    </div>
  );
}

export default TiendaComponent;
