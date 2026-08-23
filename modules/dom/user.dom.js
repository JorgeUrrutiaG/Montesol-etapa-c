
export const UserDOM = {
    // Almacenamos las referencias al DOM para no repetir querySelectors en todo el código
    elementos: {
        nombre: () => document.querySelector('.user-name'),
        correo: () => document.getElementById('user-correo')
    },

    /**
     * Coordina la carga de datos y actualiza los elementos visuales.
     */
    cargarInformacionUsuario() {
        try {
            // 1. Solicitamos los datos al servicio especializado
            // const usuario = await UserService.obtenerDatos();
            const usuarioSimulado = {
                displayName: "Jorge Urrutia",
                email: "urrutia.a.jorge@gmail.com"
            };

            if (usuarioSimulado) {
                // 2. Renderizamos en la interfaz utilizando las referencias
                this.elementos.nombre().innerText = usuarioSimulado.displayName;
                this.elementos.correo().innerText = usuarioSimulado.email;
                return usuarioSimulado;
            } else {
                this.elementos.nombre().innerText = "Invitado (Sin iniciar sesión)";
                return null;
            }

        } catch (err) {
            this.elementos.nombre().innerText = "Invitado (Sin iniciar sesión)";
            // 3. Control de errores visuales centralizado
            console.log('error', `No se pudo cargar el perfil: ${err.message}`);
        }
    }
};