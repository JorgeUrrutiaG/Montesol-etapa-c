/**
 * Vista modular encargada exclusivamente de la navegación y eventos del menú lateral.
 */
export const NavigationDOM = {
    _refs: {
        listaMenu: () => document.getElementById('sidebar-list'),
        enlaces: () => document.querySelectorAll('.sidebar-link'),
        tituloTopbar: () => document.getElementById('titulo') // Ajustado al ID de tu topbar.js
    },
    
    // Aquí guardaremos la función puente que nos enviará app.js
    _onCambioSeccionCallback: null,

    /**
     * Inicializa el escuchador global del menú y recibe la función puente.
     * @param {Function} callback - Función que se ejecutará al cambiar de sección
     */
    inicializar(callback) {
        const menu = this._refs.listaMenu();
        if (!menu) {
            console.error("NavigationDOM: No se encontró el contenedor '#sidebar-list'.");
            return;
        }

        // Guardamos la función en nuestra variable interna
        this._onCambioSeccionCallback = callback;

        menu.addEventListener('click', (e) => {
            const enlace = e.target.closest('.sidebar-link');
            if (!enlace) return;

            e.preventDefault();
            e.stopImmediatePropagation();

            this._activarEnlaceVisual(enlace);
            this._procesarRuta(enlace);
        });
    },

    _activarEnlaceVisual(enlaceSeleccionado) {
        this._refs.enlaces().forEach(link => link.classList.remove('sidebar-link--active'));
        enlaceSeleccionado.classList.add('sidebar-link--active');
    },

    _procesarRuta(enlace) {
        const idRuta = enlace.id;
        const nuevoTitulo = enlace.textContent.trim().toUpperCase();
        
        const tituloContenedor = this._refs.tituloTopbar();
        if (tituloContenedor) {
            tituloContenedor.innerText = nuevoTitulo;
        }

        // Mapeamos el ID del clic a un nombre de sección limpio
        let seccionNombre = "";
        switch (idRuta) {
            case 'link-tareas':     seccionNombre = "PANEL PRINCIPAL"; break;
            case 'link-abiertas':    seccionNombre = "PROPIEDADES DISPONIBLES"; break;
            case 'link-resueltas':   seccionNombre = "GASTOS COMUNES (GGCC)"; break;
            case 'link-control':     seccionNombre = "CONTROL DE DINERO"; break;
            case 'link-reportes':    seccionNombre = "REPORTES IMPRIMIBLES"; break;
            default:
                console.warn(`Ruta no manejada: ${idRuta}`);
                return;
        }

        // Si app.js nos dio una función, la ejecutamos pasándole la sección
        if (typeof this._onCambioSeccionCallback === 'function') {
            this._onCambioSeccionCallback(seccionNombre);
        }
    }
};
