export const panelPrincipalHTML = `
<div class="panel-container">
    <div class="panel-welcome">
        <h2>Bienvenido al Panel de Control de la Comunidad</h2>
        <p>Resumen informativo de Montesol Etapa C</p>
    </div>

    <div class="dashboard-cards">
        <!-- Card 1: Departamentos -->
        <div class="card-metric">
            <div class="card-icon"><i class="bi bi-building"></i></div>
            <div class="card-info">
                <span class="card-label">Total Departamentos</span>
                <h3 id="total-departamentos">0</h3>
            </div>
        </div>

        <!-- Card 2: Usuarios del Sistema -->
        <div class="card-metric">
            <div class="card-icon"><i class="bi bi-people-fill"></i></div>
            <div class="card-info">
                <span class="card-label">Usuarios Registrados</span>
                <h3 id="total-usuarios">0</h3>
            </div>
        </div>
    </div>

    <!-- Bloque informativo de Roles de la Comunidad (Informativo para desarrollo) -->
    <div class="panel-roles-info">
        <h3><i class="bi bi-shield-lock"></i> Estructura de Roles de Gestión</h3>
        <ul>
            <li><strong>Administrador DB (Super Admin):</strong> Control total, creación y edición de usuarios.</li>
            <li><strong>Administrador:</strong> Gestión de propiedades, GGCC, comprobantes y registros de pago.</li>
            <li><strong>Comité:</strong> Supervisión y auditoría de la información registrada.</li>
        </ul>
    </div>
</div>
`
