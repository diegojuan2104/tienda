import CalculadorPrecio from "../CalculadorPrecio";

class CalculadorPrecioNormal implements CalculadorPrecio{

    calcularTotal(precio: number,cantidad: number): number {
        return precio*cantidad;
    }    
}

export default CalculadorPrecioNormal;