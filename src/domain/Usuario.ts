import Carrito from "./Carrito"
import Producto from "./Producto"

class Usuario {

    nombre : string
    cedula : string
    carrito : Carrito


    constructor(nombre : string,cedula : string) {
        this.nombre = nombre
        this.cedula = cedula
        this.carrito = new Carrito()
    }

    agrega_producto_a_carrito(producto: Producto, cantidad:number) {
       return this.carrito.agregar_item(producto,cantidad)
    }
}



export default Usuario