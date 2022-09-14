import Producto from "./Producto"
import Factory from "./Factory"


class Item{
    producto: Producto
    cantidad: number
    calcularSubTotal(){
       return Factory.calculadores.get(this.producto.sku.substring(0,3))?.calcularTotal(this.producto.precio, this.cantidad)
    }

    constructor(producto: Producto, cantidad: number){
        this.cantidad = cantidad
        this.producto = producto
    }
}

export default Item;