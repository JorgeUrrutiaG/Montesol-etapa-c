import { PropiedadesService } from "../services/propiedades.service.js";
import { TablaDOM } from "./tabla.dom.js";

/**
 * Vista controladora encargada de coordinar qué datos solicitar 
 * y qué interfaz renderizar según la sección activa del sistema.
 */
export const SectionsDOM = {
    
    /**
     * Administra el cambio de contenido en el contenedor principal
     * @param {string} seccion - Nombre de la sección seleccionada
     */
    manejarCambioSeccion(seccion) {
        const cabeceras = PropiedadesService.obtenerCabeceras();

        if (seccion === "PANEL PRINCIPAL") {
            const datos = PropiedadesService.obtenerTodas();
            TablaDOM.renderizarTabla(cabeceras, datos);
        } else if (seccion === "PROPIEDADES DISPONIBLES") {
            // A futuro conectarás aquí: PropiedadesService.obtenerDisponibles()
            const datos = PropiedadesService.obtenerTodas(); 
            TablaDOM.renderizarTabla(cabeceras, datos);
        } else {
            // Secciones estáticas (GGCC, Control de Dinero, Reportes)
            TablaDOM.mostrarMensajeEstatico(seccion);
        }
    }
};
