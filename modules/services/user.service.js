import { Storage } from "../../storage/storage.js";

let usuario=null;

export const UserService = {
    obtenerPorEmail(email){
        usuario= Storage.obtenerUsuarioRegistrado(email);
    },

    getUsuario(){
        return usuario;
    }

}