// Interacciones básicas para la vista previa
document.addEventListener('DOMContentLoaded', function() {
    // Cambiar pestañas
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            tabs.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // Simular subida de archivo
    const uploadArea = document.querySelector('.upload-area');
    if (uploadArea) {
        uploadArea.addEventListener('click', function() {
            alert('En la versión completa, esto abriría el selector de archivos');
        });
    }

    // Botones de acción del admin
    const approveBtns = document.querySelectorAll('.btn-approve');
    approveBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const row = this.closest('tr');
            const statusBadge = row.querySelector('.status-badge');
            statusBadge.textContent = 'Aprobado';
            statusBadge.className = 'status-badge approved';
            alert('Pago aprobado correctamente');
        });
    });

    const rejectBtns = document.querySelectorAll('.btn-reject');
    rejectBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const row = this.closest('tr');
            const statusBadge = row.querySelector('.status-badge');
            statusBadge.textContent = 'Rechazado';
            statusBadge.className = 'status-badge rejected';
            alert('Pago rechazado');
        });
    });

    // Botones de exportación
    const exportBtns = document.querySelectorAll('.export-btn');
    exportBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const format = this.classList.contains('excel') ? 'Excel' : 'CSV';
            alert(`Descargando datos en formato ${format}`);
        });
    });

    // Botones principales
    const primaryBtns = document.querySelectorAll('.btn-primary, .btn-secondary');
    primaryBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            if (this.textContent.includes('Agregar')) {
                alert('Formulario para agregar deportista');
            } else if (this.textContent.includes('Enviar')) {
                alert('Reporte de pago enviado para validación');
            }
        });
    });
});