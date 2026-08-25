import { PropiedadesService } from "../services/propiedades.service.js";
import { UserService } from "../services/user.service.js"; // Importamos usuarios
import { TablaDOM } from "./tabla.dom.js";
import { PanelDOM } from "./panel.dom.js"; // Importamos el nuevo Panel

export const SectionsDOM = {
    
    manejarCambioSeccion(seccion) {
        const cabeceras = PropiedadesService.obtenerCabeceras();

        if (seccion === "PANEL PRINCIPAL") {
            // 1. Obtenemos las longitudes de los datos simulados de forma dinámica
            const totalDeptos = PropiedadesService.obtenerTodas().length;
            
            // Simulación del conteo de usuarios desde tu UserService / Storage
            let totalUsers = 1; 
            if (typeof UserService !== 'undefined' && UserService.obtenerTotalUsuarios) {
                totalUsers = UserService.obtenerTotalUsuarios();
            }

            // 2. Renderizamos el panel con los totales calculados
            PanelDOM.renderizarPanel(totalDeptos, totalUsers);

        } else if (seccion === "PROPIEDADES DISPONIBLES") {
            // MUDADO AQUÍ: La tabla ahora se despliega exclusivamente en el menú Propiedades
            const datos = PropiedadesService.obtenerTodas(); 
            TablaDOM.renderizarTabla(cabeceras, datos);

        } else {
            // Secciones estáticas (GGCC, Control de Dinero, Reportes)
            TablaDOM.mostrarMensajeEstatico(seccion);
        }
    }
};
