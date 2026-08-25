import { Storage } from "../../storage/storage.js";

let usuario = null;

export const UserService = {
    obtenerPorEmail(email) {
        usuario = Storage.obtenerUsuarioRegistrado(email);
    },

    getUsuario() {
        return usuario;
    },
    // Dentro del objeto UserService en user.service.js:
    obtenerTotalUsuarios() {
        // Llama al Storage para contar cuántos elementos hay en tu arreglo privado 'usuarios'
        return Storage.obtenerTodosLosUsuarios ? Storage.obtenerTodosLosUsuarios().length : 1;
    }


}