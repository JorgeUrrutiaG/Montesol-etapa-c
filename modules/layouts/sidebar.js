export const sidebar= `
            <nav class="sidebar-menu">
            <ul id="sidebar-list">
                <!-- Filtro Todas -->
                <li class="sidebar-item">
                    <a href="#" class="sidebar-link sidebar-link--active" id="link-tareas" data-estado="Panel Principal">
                        <i class="bi bi-grid-fill"></i>
                        <span class="tooltip">Inicio</span>
                    </a>
                </li>
                <!-- Filtro Abiertas -->
                <li class="sidebar-item">
                    <a href="#" class="sidebar-link" id="link-abiertas" data-estado="Propiedades">
                        <i class="bi bi-clock-history"></i>
                        <span class="tooltip">Propiedades</span>
                    </a>
                </li>
                <!-- Filtro Resueltas -->
                <li class="sidebar-item">
                    <a href="#" class="sidebar-link" id="link-resueltas" data-estado="GGCC">
                        <i class="bi bi-check2-circle"></i>
                        <span class="tooltip">GGCC</span>
                    </a>
                </li>

                <li class="sidebar-divider"></li>

                <!-- Pantalla Control -->
                <li class="sidebar-item">
                    <a href="#" class="sidebar-link" id="link-control" data-estado="Control">
                        <i class="bi bi-ui-checks-grid"></i>
                        <span class="tooltip">Control Dinero</span>
                    </a>
                </li>
                <!-- Reportes -->
                <li class="sidebar-item">
                    <a href="#" class="sidebar-link" id="link-reportes" data-estado="Reportes">
                        <i class="bi bi-printer"></i>
                        <span class="tooltip">Reportes</span>
                    </a>
                </li>
            </ul>
        </nav>
`;