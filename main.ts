class Producto{
    sku: string
    nombre: string
    descripcion: string
    precio: number
    unidades_disponibles: number

    constructor(sku: string, nombre: string, descripcion: string, precio: number, unidades_disponibles: number){
        this.sku = sku
        this.nombre = nombre
        this.descripcion = descripcion
        this.precio = precio
        this.unidades_disponibles = unidades_disponibles
    }
    
    hayUnidadesDisponibles(cantidad: number): boolean{
        return true
    }
    
}


class Item{
    cantidad: number
    calcularSubTotal(producto: Producto, cantidad: number){
        // TODO: hacer el llamado a la interface o al Factory
    }

    constructor(cantidad: number){
        this.cantidad = cantidad
    }
}

interface CalculadorPrecio{
    calcularTotal(precio: Producto["precio"], cantidad: Item["cantidad"]): number
}

class CalculadorPrecioNormal implements CalculadorPrecio{

    calcularTotal(precio: number,cantidad: number): number {
        throw new Error("Method not implemented.")
    }    
}

class CalculadorPrecioEspecial implements CalculadorPrecio{
    calcularTotal(precio: number,cantidad: number): number {
        throw new Error("Method not implemented.")
    }

}

class CalculadorPrecioPorPeso implements CalculadorPrecio{
    calcularTotal(precio: number,cantidad: number): number {
        throw new Error("Method not implemented.")
    }

}

class Factory{
    //TODO: Implementar el Map y hacer el llamado a la clase correspondiente

}
  