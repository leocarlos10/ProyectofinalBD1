document.addEventListener('DOMContentLoaded', () => {
    const btn_cerrar_sesion = document.querySelector('.close-sesion');
    btn_cerrar_sesion.addEventListener('click', () => {
        localStorage.removeItem('pediatra');
        location.href = 'index.html';
    });

    const btn_resgistrar_curso = document.querySelector('.registro-curso');
    btn_resgistrar_curso.addEventListener('click', () => {
        location.href = 'registro_curso.html';
    });

    const citasList = document.getElementById('citasList');
    const endpoint = "http://localhost:8080/api/getcitaspacientes";

    // Realizar la solicitud fetch
    fetch(endpoint)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json(); // Convertir la respuesta a JSON
        })
        .then(data => {
            // Limpiar el contenedor de citas antes de agregar nuevas
            citasList.innerHTML = '';

            // Generar el HTML para las citas
            let citasHTML = '';
            for (let cita of data) {
                citasHTML += `
                    <li class="list-group-item d-flex justify-content-between align-items-center" data-id="${cita.idCita}">
                        Servicio: ${cita.servicio} <br> 
                        Paciente: ${cita.nombre} <br> 
                        Cell:  (${cita.telefono}) <br>
                        Motivo: ${cita.motivoC}
                        <div>
                            <button class="btn btn-danger btn-sm me-2 btn-eliminar" onclick="eliminarCita(${cita.idCita})">Eliminar</button>
                        </div>
                    </li>
                `;
            }

            // Insertar el HTML generado en el contenedor
            citasList.innerHTML = citasHTML;
        })
        .catch(error => {
            console.error('Error al cargar las citas:', error);
            alert('No se pudieron cargar las citas.');
        });
});

// Función para eliminar una cita
function eliminarCita(idCita) {
    const endpoint = `http://localhost:8080/api/cita/${idCita}`;  // URL del endpoint de la API
    
    // Realizamos una solicitud DELETE para eliminar la cita
    fetch(endpoint, {
        method: 'DELETE',  // Método DELETE para eliminar el recurso
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => {
        if (response.ok) {
            alert(`Cita con ID ${idCita} eliminada con éxito.`);
            // Opcional: refrescar la lista de citas o eliminarla del DOM
            location.reload();  // Recargar la página para actualizar la lista de citas
        } else {
            throw new Error('Error al eliminar la cita');
        }
    })
    .catch(error => {
        console.error('Error al eliminar la cita:', error);
    });
}
