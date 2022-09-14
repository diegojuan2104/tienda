import React from 'react';
import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

function Producto({ productoData, agregar_item }) {
  return (
    <div className="App">
      <Card style={{ width: '18rem' }}>
        <Card.Img
          style={{ width: '100%', height: '300px' }}
          variant="top"
          src={productoData.img}
        />
        <Card.Body>
          <Card.Title>{`${productoData.sku} - ${productoData.nombre}`}</Card.Title>
          <Card.Text>
            U. Disponibles: {productoData.unidades_disponibles}
          </Card.Text>

          <Card.Text>Precio: $ {productoData.precio}</Card.Text>
          <Button
            onClick={() => {
              agregar_item(productoData, 1);
            }}
            variant="primary"
          >
            Agregar al Carrito
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Producto;
