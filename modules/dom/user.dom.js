import { UserService } from "../services/user.service.js";

/**
 * Vista modular encargada exclusivamente de renderizar y gestionar 
 * la información del usuario en la barra superior (Topbar).
 */


export const UserDOM = {
    // Almacenamos las referencias reales del DOM una vez inicializado el componente
    _refs: {
        nombre: null,
        correo: null
    },

    /**
     * Captura de forma segura los elementos del DOM.
     * Previene errores si el Topbar aún no se ha inyectado.
     */
    _inicializarReferencias() {
        this._refs.nombre = document.querySelector('.user-name');
        this._refs.correo = document.getElementById('user-correo');

        if (!this._refs.nombre || !this._refs.correo) {
            console.warn("UserDOM: No se encontraron los contenedores de usuario en el DOM. Asegúrate de que el Topbar ya fue inyectado.");
        }
    },

    /**
     * Coordina la carga de datos de manera asíncrona y actualiza los elementos visuales.
     * @returns {Promise<Object|null>} Retorna los datos del usuario o null si no hay sesión.
     */
    async cargarInformacionUsuario() {
        // Asegurar que las referencias del DOM estén capturadas
        this._inicializarReferencias();

        try {
            // 1. Simulación de datos (En el futuro aquí usarás: await UserService.obtenerDatos())
            const usuario = UserService.getUsuario();
            console.log(usuario);
            // 2. Renderizar en la interfaz de forma segura
            if (usuario) {
                if (this._refs.nombre) this._refs.nombre.innerText = usuario.displayName;
                if (this._refs.correo) this._refs.correo.innerText = usuario.email;
                return usuario;
            } else {
                this._establecerEstadoInvitado();
                return null;
            }

        } catch (err) {
            console.error("Error al procesar el perfil de usuario:", err);
            this._establecerEstadoInvitado();
            return null;
        }
    },

    /**
     * Helper interno para limpiar la interfaz en caso de error o sesión cerrada
     */
    _establecerEstadoInvitado() {
        if (this._refs.nombre) this._refs.nombre.innerText = "Invitado (Sin iniciar sesión)";
        if (this._refs.correo) this._refs.correo.innerText = "";
    },
};
