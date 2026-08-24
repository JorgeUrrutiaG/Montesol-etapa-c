 import { prop } from "../storage/storage.js";
 import { tabla } from "../layouts/tabla.js";
 import { DATOS_LOCALES_PROPIEDADES , CABECERAS_LOCALES_PROPIEDADES } from "../app.js";
 
 export const TablaDOM = {
        // Estado interno de la paginación y filtros
        paginaActual: 1,
        filasPorPagina: 14,
        datosFiltradosActuales: [],
        estadoActual: 'Todas',

        // Referencias centralizadas a los elementos del DOM
        elementos: {
            cuerpoTabla: () => document.querySelector('.table-body'),
            cabeceraTabla: () => document.querySelector('.table-head'),
            buscador: () => document.getElementById('buscador'),
            titulo: () => document.getElementById('titulo'),
            paginador: () => document.getElementById('paginador')
        },

        insertarTablaEnDOM(){
            document.getElementById("main-content").innerHTML=tabla;
        },

        /**
         * Inicializa los escuchadores fijos del componente tabla
         */
        inicializar() {
            // 1. Escuchador fijo para la barra de búsqueda (Evento input)
            this.elementos.buscador()?.addEventListener('input', () => {
                this.paginaActual = 1;
                this.aplicarFiltrosYBuscar();
            });

            // 2. ÚNICO ESCUCHADOR CENTRALIZADO PARA LA BARRA DE HERRAMIENTAS Y ACCIONES
            // Escuchamos el contenedor general para interceptar cualquier clic interno
            const contenedorPrincipal = document.querySelector('.table-container');

            contenedorPrincipal?.addEventListener('click', (event) => {
                const target = event.target;

                // ==========================================
                // HERRAMIENTAS SUPERIORES (Header Bar)
                // ==========================================

                // Caso A: Clic en "Nueva Tarea" (o en su icono/texto interno)
                const btnNew = target.closest('.btn-open-new');
                if (btnNew) {
                    event.preventDefault();
                    ModalDOM.abrir('new');
                    return; // Frenamos la ejecución aquí
                }

                // Caso B: Clic en "Exportar a Excel" (o en su icono interno)
                const btnExcel = target.closest('.btn-excel');
                if (btnExcel) {
                    event.preventDefault();
                    ExcelService.descargar();
                    return;
                }

                // ==========================================
                // ACCIONES DE LA GRILLA (Filas / Tbody)
                // ==========================================

                // Caso C: Clic en el botón mini de CERRAR TICKET
                const btnClose = target.closest('.btn-close');
                if (btnClose) {
                    event.stopPropagation(); // Evita que se active el clic de edición de la fila
                    const id = btnClose.getAttribute('data-id');
                    ModalDOM.abrir('close', id);
                    return;
                }

                // Caso D: Clic en el botón mini de ELIMINAR TICKET
                const btnDelete = target.closest('.btn-delete');
                if (btnDelete) {
                    event.stopPropagation();
                    const id = btnDelete.getAttribute('data-id');
                    ModalDOM.abrir('delete', id);
                    return;
                }

                // Caso E: Clic en la celda protectora de acciones (evita falsos disparos de edición)
                if (target.closest('.acciones-celda')) {
                    event.stopPropagation();
                    return;
                }

                // Caso F: Clic en cualquier otra celda de la fila (Abre Modo Edición / Actualizar)
                const fila = target.closest('tbody tr'); // Específico de las filas de datos
                if (fila) {
                    const datosRaw = fila.getAttribute('data-json');
                    if (datosRaw) {
                        const datosFila = JSON.parse(decodeURIComponent(datosRaw));
                        ModalDOM.abrir('update', datosFila);
                    }
                }
            });

            // 3. Escuchador centralizado para el PAGINADOR inférieur
            this.elementos.paginador()?.addEventListener('click', (event) => {
                const boton = event.target.closest('.btn-pagina');
                if (!boton) return;

                event.preventDefault();
                const nuevaPagina = parseInt(boton.getAttribute('data-pagina'), 10);

                if (!isNaN(nuevaPagina)) {
                    this.paginaActual = nuevaPagina;
                    this.renderizar(this.datosFiltradosActuales);
                }
            });
        },

        /**
         * Orquesta la petición al backend y la primera renderización
         */
        // async cargarPropiedades() {
        //     this.elementos.cuerpoTabla().innerHTML = '<tr><td colspan="10" style="text-align:center">Cargando datos...</td></tr>';
        //     try {
        //         // Consumimos el adaptador que centraliza google.script.run
        //         // const data = await AppScriptService.obtenerTareas();
        //         DATOS_LOCALES_PROPIEDADES = prop.obtenerPropiedades;
        //         CABECERAS_LOCALES_PROPIEDADES = prop.obtenerCabecerasPropiedades;

        //         this.paginaActual = 1;
        //         this.estadoActual = 'Todas';
        //         this.renderizar(DATOS_LOCALES_PROPIEDADES);
        //     } catch (err) {
        //         showToast('error', err.message);
        //     }
        // },
    
    };

