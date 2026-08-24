import { prop } from "./storage/storage.js";
// 1. Importaciones de Servicios (Controladores de Lógica)
import { PropiedadesService } from "./services/propiedades.service.js";

import { UserDOM } from "./dom/user.dom.js";
import {NavigationDOM} from "./dom/navigation.dom.js";
import { TablaDOM } from "./dom/tabla.dom.js";
//(Importando los HTML planos de la carpeta layouts)
import { sidebar } from "./layouts/sidebar.js";
import { footer } from "./layouts/footer.js";
import { topbar } from "./layouts/topbar.js";

// 1. Variables Globales del Estado de la Aplicación
export let DATOS_LOCALES_PROPIEDADES = prop.obtenerPropiedades();
export let CABECERAS_LOCALES_PROPIEDADES = prop.obtenerCabecerasPropiedades();
let USUARIO_ACTUAL = null;

// Para probarlo localmente ANTES de conectar Firebase, puedes simularlo así:
document.addEventListener("DOMContentLoaded", () => {
    iniciarSistema();
    // 1. Inicializar componentes estáticos de la interfaz gráfica (Fijos en el DOM)
    // TopbarDOM.inicializar();      // <-- Este ya maneja internamente el botón #go-home-btn
    NavigationDOM.inicializar();
    TablaDOM.inicializar();
    // ModalDOM.inicializar();
   
});

async function iniciarSistema() {
    try {
        // 1. Inyección inicial y única de la estructura base de la página
        document.querySelector('.sidebar').innerHTML = sidebar;
        document.querySelector('.footer').innerHTML = footer;
        document.querySelector('.topbar').innerHTML = topbar;

        // 2. Cargar datos desde los servicios
        DATOS_LOCALES_PROPIEDADES = PropiedadesService.obtenerTodo();
        CABECERAS_LOCALES_PROPIEDADES = PropiedadesService.obtenerCabeceras();

        // 3. Inicializar componentes y sus escuchadores de eventos una vez que el HTML ya existe
        NavigationDOM.inicializar();
        TablaDOM.inicializar();

        // 4. Renderizar pantalla inicial
        TablaDOM.renderizarTabla(CABECERAS_LOCALES_PROPIEDADES, DATOS_LOCALES_PROPIEDADES);

        // 5. Cargas asíncronas secundarias
        await Promise.all([
            USUARIO_ACTUAL = await UserDOM.cargarInformacionUsuario()
        ]);

    } catch (err) {
        console.error("Error crítico durante la inicialización:", err);
    }
}

 // Tu render de tablas e inicio normal de la app...
    // renderizarTablaPropiedades(DATOS_LOCALES_PROPIEDADES);

// 3. Funciones de Renderizado de la Interfaz

/**
 * Genera y dibuja una tabla de datos dinámica en el <main>
 */
// function renderizarTablaPropiedades(datos) {
//     // Si no hay datos, mostrar aviso amistoso
//     if (!datos || datos.length === 0) {
//         mainContent.innerHTML = `<div class="panel-mensaje"><p>No hay propiedades disponibles para mostrar.</p></div>`;
//         return;
//     }

//     // Estructura base de la tabla usando template strings
//     let htmlTabla = `
//         <div class="table-container">
//             <table class="data-table">
//                 <thead>
//                     <tr>
//                         ${CABECERAS_LOCALES_PROPIEDADES.map(cabecera => `<th>${cabecera}</th>`).join('')}
//                     </tr>
//                 </thead>
//                 <tbody>
//                     ${datos.map(item => `
//                         <tr>
//                             ${Object.keys(item).map(llave => `<td>${item[llave]}</td>`).join('')}
//                         </tr>
//                     `).join('')}
//                 </tbody>
//             </table>
//         </div>
//     `;

//     mainContent.innerHTML = htmlTabla;
// }

/**
 * Cambia el estado visual del menú y actualiza la sección activa
 */
// function cambiarSeccionActiva(enlaceSeleccionado, nuevoTitulo, callbackContenido) {
//     // Quitar la clase activa de todos los enlaces del menú
//     sidebarLinks.forEach(link => link.classList.remove("sidebar-link--active"));
    
//     // Activar el enlace seleccionado
//     enlaceSeleccionado.classList.add("sidebar-link--active");
    
//     // Actualizar título de la barra superior
//     topbarTitulo.textContent = nuevoTitulo;
    
//     // Ejecutar la función interna encargada de rellenar la pantalla
//     callbackContenido();
// }

// 4. Manejadores de Eventos (Event Listeners)

// Eventos para el menú lateral
// document.getElementById("link-tareas").addEventListener("click", (e) => {
//     e.preventDefault();
//     cambiarSeccionActiva(e.currentTarget, "PANEL PRINCIPAL", () => {
//         renderizarTablaPropiedades(DATOS_LOCALES_PROPIEDADES);
//     });
// });

// document.getElementById("link-abiertas").addEventListener("click", (e) => {
//     e.preventDefault();
//     cambiarSeccionActiva(e.currentTarget, "PROPIEDADES DISPONIBLES", () => {
//         renderizarTablaPropiedades(DATOS_LOCALES_PROPIEDADES); 
//         // Nota: Aquí podrías filtrar datos en el futuro (ej. DATOS_LOCALES_PROPIEDADES.filter(...))
//     });
// });

// document.getElementById("link-resueltas").addEventListener("click", (e) => {
//     e.preventDefault();
//     cambiarSeccionActiva(e.currentTarget, "GASTOS COMUNES (GGCC)", () => {
//         mainContent.innerHTML = `<div class="panel-mensaje"><h3>Módulo de GGCC</h3><p>Espacio asignado para la administración de gastos comunes.</p></div>`;
//     });
// });

// document.getElementById("link-control").addEventListener("click", (e) => {
//     e.preventDefault();
//     cambiarSeccionActiva(e.currentTarget, "CONTROL DE DINERO", () => {
//         mainContent.innerHTML = `<div class="panel-mensaje"><h3>Módulo Financiero</h3><p>Gestión de flujos de caja e ingresos.</p></div>`;
//     });
// });

// document.getElementById("link-reportes").addEventListener("click", (e) => {
//     e.preventDefault();
//     cambiarSeccionActiva(e.currentTarget, "REPORTES IMPRIMIBLES", () => {
//         mainContent.innerHTML = `
//             <div class="panel-mensaje">
//                 <h3>Reportes del Sistema</h3>
//                 <br>
//                 <button class="btn btn-excel"><i class="bi bi-file-earmark-excel"></i> Exportar a Excel</button>
//             </div>`;
//     });
// });

// Botón de actualizar/refrescar del topbar
// goHomeBtn.addEventListener("click", () => {
//     // Simula una recarga de datos locales re-renderizando la vista inicial
//     renderizarTablaPropiedades(DATOS_LOCALES_PROPIEDADES);
// });
