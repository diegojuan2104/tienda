class Producto{
    sku: string
    nombre: string
    descripcion: string
    precio: number
    unidades_disponibles: number
    img:string

    constructor(sku: string, nombre: string, 
        descripcion: string, precio: number, unidades_disponibles: number, img: string){
        this.sku = sku
        this.nombre = nombre
        this.descripcion = descripcion
        this.precio = precio
        this.unidades_disponibles = unidades_disponibles
        this.img = img
    }
    
    hayUnidadesDisponibles(cantidad: number): boolean{
        return true
    }


}

export default Producto;