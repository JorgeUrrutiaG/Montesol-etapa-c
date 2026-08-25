// Subimos un nivel para entrar a la carpeta storage
import { Storage } from "../../storage/storage.js";

/**
 * Servicio encargado de la lógica de negocio y validaciones
 * para el módulo de propiedades.
 */

// 1. Variables Globales del Estado de la Aplicación
let DATOS_LOCALES_PROPIEDADES = [];
let CABECERAS_LOCALES_PROPIEDADES = [];


export const PropiedadesService = {
    cargarEnVariableGlobal() {
        DATOS_LOCALES_PROPIEDADES = Storage.obtenerPropiedades();
        CABECERAS_LOCALES_PROPIEDADES = Storage.obtenerCabecerasPropiedades();
    },

    /**
     * Solicita todas las propiedades registradas al almacenamiento
     */
    obtenerTodas() {
        return DATOS_LOCALES_PROPIEDADES || null;
    },

    /**
     * Solicita las cabeceras correspondientes para la tabla
     */
    obtenerCabeceras() {
        return CABECERAS_LOCALES_PROPIEDADES || null;
    },

    // --- Métodos de escritura (Lógica interna futura) ---

    _guardar(datos) {
        // Aquí validarás los datos antes de enviarlos a Storage
    },

    _editar(id, nuevosDatos) {
        // Aquí comprobarás si el ID existe antes de modificarlo
    },

    _eliminar(id) {
        // Aquí pedirás confirmación o verificarás permisos antes de borrar
    },

    _obtenerPorId(id) {
        // Aquí buscarás una propiedad específica para ver su detalle
    },

    getPropiedades() {
        return DATOS_LOCALES_PROPIEDADES || null;
    }


};
