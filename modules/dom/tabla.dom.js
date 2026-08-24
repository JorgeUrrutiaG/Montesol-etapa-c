import { tabla as estructuraTablaHTML } from "../layouts/tabla.js";

/**
 * Vista modular encargada de inyectar la estructura de la tabla
 * y renderizar dinámicamente sus cabeceras y datos.
 */
export const TablaDOM = {
    _mainContent: null,

    inicializar() {
        this._mainContent = document.getElementById("main-content");
    },

    /**
     * Inyecta el contenedor estático de la tabla (Buscador, botones, esqueleto).
     * Se ejecuta una sola vez al arrancar la app.
     */
    insertarTablaEnDOM() {
        if (!this._mainContent) this.inicializar();
        
        // Inyectamos la estructura base que nos provee el layout tabla.js
        this._mainContent.innerHTML = estructuraTablaHTML;
        
        // Aquí puedes añadir listeners específicos para el buscador del layout si quieres
        const buscador = document.getElementById("buscador");
        if (buscador) {
            buscador.addEventListener("input", (e) => {
                // Lógica futura de búsqueda en tiempo real
                console.log("Buscando:", e.target.value);
            });
        }
    },

    /**
     * Renderiza las filas dinámicas dentro del esqueleto existente.
     */
    renderizarTabla(cabeceras, datos) {
        if (!this._mainContent) this.inicializar();

        // Si el contenedor estructural no existe en pantalla, lo insertamos primero
        if (!document.querySelector(".table-container")) {
            this.insertarTablaEnDOM();
        }

        const tHead = this._mainContent.querySelector(".table-head");
        const tBody = this._mainContent.querySelector(".table-body");

        // 1. Caso sin datos
        if (!datos || datos.length === 0) {
            tHead.innerHTML = "";
            tBody.innerHTML = `<tr><td colspan="100%" style="text-align:center; padding: 2rem;">No hay registros disponibles.</td></tr>`;
            return;
        }

        // 2. Renderizar Cabeceras de forma segura
        tHead.innerHTML = `
            <tr>
                ${cabeceras.map(titulo => `<th>${titulo}</th>`).join('')}
            </tr>
        `;

        // 3. Renderizar Filas de forma dinámica
        tBody.innerHTML = datos
            .map(propiedad => {
                const celdas = Object.values(propiedad)
                    .map(valor => `<td>${valor}</td>`)
                    .join('');
                return `<tr>${celdas}</tr>`;
            })
            .join('');
    },

    /**
     * Limpia la tabla e inyecta un aviso limpio para los otros módulos
     */
    mostrarMensajeEstatico(nombreSeccion) {
        if (!this._mainContent) this.inicializar();

        let detalle = "Espacio asignado para la administración del módulo.";
        if (nombreSeccion === "GASTOS COMUNES (GGCC)") detalle = "Administración de gastos comunes de la etapa C.";
        if (nombreSeccion === "CONTROL DE DINERO") detalle = "Gestión de flujos de caja y estados de cuenta.";
        
        this._mainContent.innerHTML = `
            <div class="panel-mensaje" style="padding: 2rem; text-align: center;">
                <h3>${nombreSeccion}</h3>
                <p style="color: var(--text-muted, #666);">${detalle}</p>
            </div>
        `;
    }
};
