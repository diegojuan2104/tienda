import CalculadorPrecioEspecial from "./Calculadores/CalculadorPrecioEspecial";
import CalculadorPrecioNormal from "./Calculadores/CalculadorPrecioNormal";
import CalculadorPrecioPorPeso from "./Calculadores/CalculadorPrecioPorPeso";
import CalculadorPrecio from "./CalculadorPrecio";


class Factory {
     static calculadores: Map<string, CalculadorPrecio> = new Map(
        [
            ["EA", new CalculadorPrecioNormal()],
            ["WE", new CalculadorPrecioPorPeso()],
            ["SP", new CalculadorPrecioEspecial()]
        ]
     )

}

export default Factory;