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
    },
    // Dentro del objeto UserService en user.service.js:
    obtenerTotalUsuarios() {
        // Llama al Storage para contar cuántos elementos hay en tu arreglo privado 'usuarios'
        return Storage.obtenerTodosLosUsuarios ? Storage.obtenerTodosLosUsuarios().length : 1;
    }

}
