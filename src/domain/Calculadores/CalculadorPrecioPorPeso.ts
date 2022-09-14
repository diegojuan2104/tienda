import CalculadorPrecio from "../CalculadorPrecio";


class CalculadorPrecioPorPeso implements CalculadorPrecio{
    calcularTotal(precio: number,cantidad: number): number {
        return precio*cantidad*1000;
    }

}

export default CalculadorPrecioPorPeso;