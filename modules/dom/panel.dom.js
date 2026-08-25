import { panelPrincipalHTML } from "../layouts/panel.js";

export const PanelDOM = {
    _mainContent: null,

    inicializar() {
        this._mainContent = document.getElementById("main-content");
    },

    /**
     * Dibuja las tarjetas informativas del panel de control
     * @param {number} totalDeptos - Cantidad de propiedades
     * @param {number} totalUsers - Cantidad de usuarios en el sistema
     */
    renderizarPanel(totalDeptos, totalUsers) {
        if (!this._mainContent) this.inicializar();
        
        // Inyectamos la estructura base de las tarjetas
        this._mainContent.innerHTML = panelPrincipalHTML;

        // Poblamos las métricas dinámicamente en las etiquetas del Layout
        const deptoContador = document.getElementById("total-departamentos");
        const usuarioContador = document.getElementById("total-usuarios");

        if (deptoContador) deptoContador.innerText = totalDeptos;
        if (usuarioContador) usuarioContador.innerText = totalUsers;
    }
};
