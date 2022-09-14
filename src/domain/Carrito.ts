import Producto from "./Producto"
import Item from "./Item"

class Carrito{
    itemsList : Array<Item> = [];

    agregar_item(producto:Producto, cantidad: number){
        let exist = this.itemsList.find(item => item.producto.sku === producto.sku)
        if(exist){
            let items = this.itemsList.map(item => {
                if(item.producto.sku === producto.sku){
                    item.cantidad = item.cantidad + 1;
                }
                return item;
            })

            this.itemsList = items
        }else{
        this.itemsList.push(
            new Item(producto, cantidad)
        )
        }

        return this.itemsList;
    }

    calcularTotal(){
        return this.itemsList.reduce((acum, item) => acum + item.calcularSubTotal(),0)
    }
}

export default Carrito;