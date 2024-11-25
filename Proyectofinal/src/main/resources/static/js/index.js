
document.addEventListener('DOMContentLoaded', (event) => {
    const solicitar_cita = document.getElementById('sol');
    // agregamos el evento
    solicitar_cita.addEventListener('click', ()=>{
        const contenedor = document.querySelector('.contenedor-pri');
        contenedor.innerHTML = `
    <main class="flex-grow-1">
    <!-- Experience Section -->
    <section class="container mt-5">
      <div class="card p-4">
        <div class="card mb-3 border-0">
          <div class="row g-0">
            <div class="col-12 col-sm-4 col-md-6 col-lg-4">
              <img src="img/imagenExp.jpeg" class="img-fluid rounded-start" alt="imagenPediatra">
            </div>
            <div class="col-12 col-sm-8 col-md-6 col-lg-8">
              <div class="card-body">
                <h3 class="card-title">Marta Lucia Causil</h3>
                <p><strong>Especialidad:</strong> <br> Nutricionista Dietista</p>
                <p><strong>Dirección:</strong> <br> calle 5D #38A - 35 Edif Vida Torre 1 Consultorio 731, Cali.</p>
                <p><strong>Teléfono personal:</strong> ##########</p>
                <div>
                  <a href="#" class="btn btn-outline-dark btn-sm me-1"><i class="bi bi-instagram"></i></a>
                  <a href="#" class="btn btn-outline-dark btn-sm me-1"><i class="bi bi-youtube"></i></a>
                  <a href="#" class="btn btn-outline-dark btn-sm"><i class="bi bi-linkedin"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Appointment Management Section -->
    <section class="container mt-4">
      <div class="card">

        <div class="card-header" style="background-color: #7b45ad; color: white">
          <h5 class="mb-0">Gestión de Citas</h5>
        </div>

        <div class="card-body">
          <ul class="nav nav-tabs" id="tabGestion" role="tablist">
            <li class="nav-item" role="presentation">
              <button class="nav-link active" id="agendar-tab" data-bs-toggle="tab" data-bs-target="#agendar"
                type="button" role="tab">Agendar Cita</button>
            </li>
            <li class="nav-item" role="presentation">
              <button class="nav-link" id="citas-tab" data-bs-toggle="tab" data-bs-target="#citas" type="button"
                role="tab">Citas Agendadas</button>
            </li>
          </ul>

          <div class="tab-content mt-3" id="tabGestionContent">
            <!-- Schedule Appointment Tab -->
            <div class="tab-pane fade show active" id="agendar" role="tabpanel">
              <div class="row">
                <div class="col-md-6 mb-3">
                  <div class="form-group">
                    <label for="servicio">Servicios:</label>
                    <select class="form-select" id="servicio">
                      <option value="">Seleccione un servicio</option>
                      <option value="1">Consulta Nutricional</option>
                      <option value="2">Plan Alimenticio</option>
                    </select>
                  </div>
                </div>
                <div class="col-md-6 mb-3">
                  <div class="form-group">
                    <label for="fechaHora">Fecha y Hora:</label>
                    <input type="datetime-local" class="form-control " id="fechaHora"
                      style="font-size: 1rem;">
                  </div>
                </div>
              </div>
            </div>

            <!-- Scheduled Appointments Tab -->
            <div class="tab-pane fade" id="citas" role="tabpanel">
              <div class="row">
                <div class="col-md-12">
                  <ul class="list-group">
                    <li class="list-group-item d-flex justify-content-between align-items-center">
                      Cita 1 - Vista Presencial
                      <div>
                        <button class="btn btn-danger btn-sm me-2">Eliminar</button>
                        <button class="btn btn-dark btn-sm">Editar</button>
                      </div>
                    </li>
                    <li class="list-group-item d-flex justify-content-between align-items-center">
                      Cita 2 - Consulta en Línea
                      <div>
                        <button class="btn btn-danger btn-sm me-2">Eliminar</button>
                        <button class="btn btn-dark btn-sm">Editar</button>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
        `;
    });
});

// agregamos un evento ala imagen para que cuando den click reinicie la pagina

document.addEventListener('DOMContentLoaded',(event)=>{
    const imagen = document.querySelector('.logo');
    const contendor_des = document.querySelector('.container-descripcion');
    const evento = (cont)=>{
        cont.addEventListener('click',()=>{
            location.href = 'index.html';
        });
    }

    evento(imagen);
    evento(contendor_des);
});
   
    



