import react from 'react';

const Carrito = ({ items }) => {
  console.log(items);
  const calcularTotal = () => {};
  return (
    <div>
      <h1>CARRITO</h1>
      {items.map((item) => {
        return <li>{`${item.sku} - ${item.cantidad}`}</li>;
      })}
    </div>
  );
};

export default Carrito;
