
document.addEventListener('DOMContentLoaded', (event) => {

    const btn_cerrar_sesion = document.querySelector('.close-sesion');
    btn_cerrar_sesion.addEventListener('click', () => {
        localStorage.removeItem('pediatra');
        location.href = 'index.html';
    });

    const btn_resgistrar_curso = document.querySelector('.registro-curso');
    btn_resgistrar_curso.addEventListener('click', () => {
        location.href = 'registro_curso.html';
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const btnCargarCitas = document.getElementById('btnCargarCitas');
    const citasList = document.getElementById('citasList');

    btnCargarCitas.addEventListener('click', () => {

        const endpoint = "http://localhost:8080/api/getcitaspacientes";

        fetch(endpoint)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                console.log(data); 

                citasList.innerHTML = '';
                const citasHTML = data.map(cita => `
                    <li class="list-group-item d-flex justify-content-between align-items-center" data-id="${cita.idCita}">
                        ${cita.servicio} - ${cita.nombre} (${cita.telefono})
                        <div>
                            <button class="btn btn-danger btn-sm me-2 btn-eliminar" onclick="eliminarCita(${cita.idCita})">Eliminar</button>
                            <button class="btn btn-dark btn-sm btn-editar" onclick="editarCita(${cita.idCita})">Editar</button>
                        </div>
                    </li>
                `).join('');
                citasList.innerHTML = citasHTML;
            })
            .catch(error => {
                console.error('Error al cargar las citas:', error);
            });
    });
});

function eliminarCita(idCita) {
    alert(`Eliminar cita con ID: ${idCita}`);
}

function editarCita(idCita) {
    alert(`Editar cita con ID: ${idCita}`);
}
