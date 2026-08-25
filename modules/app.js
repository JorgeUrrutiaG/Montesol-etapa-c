import { PropiedadesService } from "./services/propiedades.service.js";
import { UserDOM } from "./dom/user.dom.js";
import { UserService } from "./services/user.service.js";
import { NavigationDOM } from "./dom/navigation.dom.js";
// import { TablaDOM } from "./dom/tabla.dom.js";
import { SectionsDOM } from "./dom/sections.dom.js"; // <-- Nueva importación

// Importación de layouts HTML planos
import { sidebar } from "./layouts/sidebar.js";
import { footer } from "./layouts/footer.js";
import { topbar } from "./layouts/topbar.js";

document.addEventListener("DOMContentLoaded", () => {
    iniciarSistema();
});

async function iniciarSistema() {
    try {
        // 1. Inyectar cascarón visual estático (Primero que todo)
        document.querySelector('.sidebar').innerHTML = sidebar;
        document.querySelector('.footer').innerHTML = footer;
        document.querySelector('.topbar').innerHTML = topbar; // Aquí nacen las etiquetas .user-name y #user-correo

        // 2. Cargar estado interno en los servicios de datos
        PropiedadesService.cargarEnVariableGlobal();

        // 3. Inicializar componentes visuales de las secciones
        NavigationDOM.inicializar(SectionsDOM.manejarCambioSeccion);
        // TablaDOM.inicializar();

        // 4. Renderizar la vista inicial del Panel Principal inmediatamente
        SectionsDOM.manejarCambioSeccion("PANEL PRINCIPAL");

        // 5. Gestión del Usuario (Orden secuencial correcto)
        // Paso A: Le ordenamos al servicio que busque y almacene el usuario en su estado interno
        if (typeof UserService !== 'undefined' && UserService.obtenerPorEmail) {
            UserService.obtenerPorEmail("urrutia.a.jorge@gmail.com");
        }

        // Paso B: Llamamos a tu función de UserDOM (con await por ser async) 
        // para que capture el usuario recién guardado y lo estampe en el Topbar
        await UserDOM.cargarInformacionUsuario();

    } catch (err) {
        console.error("Error crítico durante la inicialización:", err);
    }
}
