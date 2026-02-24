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

    // Convertir automáticamente a mayúsculas todos los campos de texto
    const uppercaseInputs = document.querySelectorAll('.uppercase-input');
    uppercaseInputs.forEach(input => {
        input.addEventListener('input', function(e) {
            const start = this.selectionStart;
            const end = this.selectionEnd;
            this.value = this.value.toUpperCase();
            this.setSelectionRange(start, end);
        });
    });

    // Previsualización de foto del jugador
    const photoInput = document.getElementById('player-photo-input');
    if (photoInput) {
        photoInput.addEventListener('change', function(e) {
            const file = e.target.files[0];
            if (file) {
                // Validar tamaño (5MB máximo)
                if (file.size > 5 * 1024 * 1024) {
                    alert('La imagen es demasiado grande. El tamaño máximo es 5MB.');
                    this.value = '';
                    return;
                }

                // Validar tipo de archivo
                if (!file.type.startsWith('image/')) {
                    alert('Por favor selecciona un archivo de imagen válido (JPG, PNG, JPEG).');
                    this.value = '';
                    return;
                }

                // Mostrar previsualización
                const reader = new FileReader();
                reader.onload = function(e) {
                    const preview = document.getElementById('player-photo-preview');
                    preview.innerHTML = `<img src="${e.target.result}" alt="Foto del jugador" class="w-full h-full object-cover rounded-xl">`;
                };
                reader.readAsDataURL(file);
            }
        });
    }

    // Actualizar resumen de pago dinámicamente
    const studentSelect = document.getElementById('payment-student-select');
    const conceptInput = document.getElementById('payment-concept-input');
    const monthSelect = document.getElementById('payment-month-select');
    
    if (studentSelect && conceptInput && monthSelect) {
        // Función para actualizar el resumen
        function updatePaymentSummary() {
            const summaryStudent = document.getElementById('summary-student');
            const summaryConcept = document.getElementById('summary-concept');
            const summaryMonth = document.getElementById('summary-month');
            
            // Actualizar alumno
            const selectedStudent = studentSelect.options[studentSelect.selectedIndex].text;
            if (summaryStudent) {
                summaryStudent.textContent = studentSelect.value ? selectedStudent : '-';
            }
            
            // Actualizar concepto
            if (summaryConcept) {
                summaryConcept.textContent = conceptInput.value || '-';
            }
            
            // Actualizar mes
            const selectedMonth = monthSelect.options[monthSelect.selectedIndex].text;
            if (summaryMonth) {
                summaryMonth.textContent = monthSelect.value ? selectedMonth : '-';
            }
        }
        
        // Agregar listeners para actualizar en tiempo real
        studentSelect.addEventListener('change', updatePaymentSummary);
        conceptInput.addEventListener('input', updatePaymentSummary);
        monthSelect.addEventListener('change', updatePaymentSummary);
    }
});