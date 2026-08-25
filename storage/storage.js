// Datos privados: Nadie fuera de este archivo puede verlos o alterarlos directamente
const propiedades = [
    {
        id: 26302,
        propietario: "Carolina Andrea Flores Escobar",
        celular: 965904609,
        correo: "carolinaflores_escobar@hotmail.com",
        direccion: "Calle Montesol 3342 Block 26 depto 302",
        arrendatario: ""
    },
    {
        id: 26303,
        propietario: "Jorge Alejandro Urrutia Gutiérrez",
        celular: 999180316,
        correo: "urrutia.a.jorge@gmail.com",
        direccion: "Calle Montesol 3342 Block 26 depto 302",
        arrendatario: "Juan De Dios Albarrán Jaque"
    }
];

const usuarios = [
    {
        displayName: "Jorge Urrutia",
        email: "urrutia.a.jorge@gmail.com"
    }
];

// Interfaz pública: Única vía de acceso permitida
export const Storage = {
    
    /**
     * Busca y retorna una propiedad específica según su ID
     */
    async obtenerPropiedad(id) {
        const propiedad = propiedades.find(p => p.id === id);
        return propiedad || null;
    },

    /**
     * Retorna el arreglo completo de propiedades
     */
    obtenerPropiedades() {
        return propiedades || [];
    },

    /**
     * Genera dinámicamente las cabeceras en mayúsculas basadas en las llaves del objeto
     */
    obtenerCabecerasPropiedades() {
        // Validación preventiva: si no hay propiedades, devuelve un arreglo vacío
        if (!propiedades || propiedades.length === 0) return [];
        
        // Convierte ['id', 'propietario'...] a ['ID', 'PROPIETARIO'...]
        return Object.keys(propiedades[0]).map(llave => llave.toUpperCase());
    },

    /**
     * Busca un usuario por su correo electrónico
     */
    obtenerUsuarioRegistrado(email) {
        const usuario = usuarios.find(u => u.email === email);
        return usuario || null;
    }
};
