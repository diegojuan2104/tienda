import Producto from "./Producto";
import Usuario from "./Usuario"


class Tienda {
    productos:Array<Producto> = [];
    usuario: Usuario;

    constructor(){
       this.usuario = new Usuario("Pepe", "1000415198");

       this.productos = [
        new Producto('EA000','Manzana','',150,20,'https://cdn.foodandwineespanol.com/2021/01/manzanas-licor-de-manzana-2048x1152.jpg'),
        new Producto('WE000','Uvas','',2,20,'https://img.freepik.com/premium-vector/isolated-dark-grape-with-green-leaf_317810-1956.jpg?w=2000'),
        new Producto('SP000','Papaya','',150,20,'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6r-hVcUJd1wpLSMcksgnHneyJBV6Kzm6GiQ&usqp=CAU'),
       ];
    }

    agrega_producto_a_carrito(sku : string, cantidad: number){
        const producto = this.productos?.filter(producto => producto.sku === sku)
       return  this.usuario.agrega_producto_a_carrito(producto[0], cantidad)
    }
}

export default Tienda;