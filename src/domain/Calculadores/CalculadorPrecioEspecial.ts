import CalculadorPrecio from "../CalculadorPrecio";


class CalculadorPrecioEspecial implements CalculadorPrecio{
    calcularTotal(precio: number,cantidad: number): number {

        if(cantidad >= 9){
            precio = precio - precio*.50
        }else if(cantidad >= 6){
            precio = precio - precio*.40
        }else if(cantidad >= 3){
            precio = precio - precio*.20
        }
        
        return precio*cantidad
    }

}

export default CalculadorPrecioEspecial;