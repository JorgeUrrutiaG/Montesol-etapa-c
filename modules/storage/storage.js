import { propiedades } from "./datos.js";

export const prop = {
    obtenerPropiedades() {
        return propiedades;
    },
    // Quitamos el async si no haces peticiones a bases de datos, para que sea más directo
    obtenerCabecerasPropiedades() {
        // AGREGADO: return para que la función devuelva el arreglo final
        return Object.keys(propiedades[0]).map(element => {
            return element.toUpperCase();
        });
    }
}
