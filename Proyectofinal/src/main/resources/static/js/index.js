
// Codigo anterior

// document.addEventListener('DOMContentLoaded',(event)=>{
//     const imagen = document.querySelector('.logo');
//     const contendor_des = document.querySelector('.container-descripcion');
//     const evento = (cont)=>{
//         cont.addEventListener('click',()=>{
//             location.href = 'index.html';
//         });
//     }

//     evento(imagen);
//     evento(contendor_des);
// });

// forma de agregar modulos con js utilizando innerHTML y agregando html estatico
//  document.addEventListener('DOMContentLoaded', (event) => {
// //     const solicitar_cita = document.getElementById('sol');
// //     // agregamos el evento
// //     solicitar_cita.addEventListener('click', ()=>{
// //         const contenedor = document.querySelector('.contenedor-pri');
// //         contenedor.innerHTML = `
// //     <main class="flex-grow-1">
// //     <!-- Experience Section -->
// //     <section class="container mt-5">
// //       <div class="card p-4">
// //         <div class="card mb-3 border-0">
// //           <div class="row g-0">
// //             <div class="col-12 col-sm-4 col-md-6 col-lg-4">
// //               <img src="img/imagenExp.jpeg" class="img-fluid rounded-start" alt="imagenPediatra">
// //             </div>
// //             <div class="col-12 col-sm-8 col-md-6 col-lg-8">
// //               <div class="card-body">
// //                 <h3 class="card-title">Marta Lucia Causil</h3>
// //                 <p><strong>Especialidad:</strong> <br> Nutricionista Dietista</p>
// //                 <p><strong>Dirección:</strong> <br> calle 5D #38A - 35 Edif Vida Torre 1 Consultorio 731, Cali.</p>
// //                 <p><strong>Teléfono personal:</strong> ##########</p>
// //                 <div>
// //                   <a href="#" class="btn btn-outline-dark btn-sm me-1"><i class="bi bi-instagram"></i></a>
// //                   <a href="#" class="btn btn-outline-dark btn-sm me-1"><i class="bi bi-youtube"></i></a>
// //                   <a href="#" class="btn btn-outline-dark btn-sm"><i class="bi bi-linkedin"></i></a>
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </section>

// //     <!-- Appointment Management Section -->
// //     <section class="container mt-4">
// //       <div class="card">

// //         <div class="card-header" style="background-color: #7b45ad; color: white">
// //           <h5 class="mb-0">Gestión de Citas</h5>
// //         </div>

// //         <div class="card-body">
// //           <ul class="nav nav-tabs" id="tabGestion" role="tablist">
// //             <li class="nav-item" role="presentation">
// //               <button class="nav-link active" id="agendar-tab" data-bs-toggle="tab" data-bs-target="#agendar"
// //                 type="button" role="tab">Agendar Cita</button>
// //             </li>
// //             <li class="nav-item" role="presentation">
// //               <button class="nav-link" id="citas-tab" data-bs-toggle="tab" data-bs-target="#citas" type="button"
// //                 role="tab">Citas Agendadas</button>
// //             </li>
// //           </ul>

// //           <div class="tab-content mt-3" id="tabGestionContent">
// //             <!-- Schedule Appointment Tab -->
// //             <div class="tab-pane fade show active" id="agendar" role="tabpanel">
// //               <div class="row">
// //                 <div class="col-md-6 mb-3">
// //                   <div class="form-group">
// //                     <label for="servicio">Servicios:</label>
// //                     <select class="form-select" id="servicio">
// //                       <option value="">Seleccione un servicio</option>
// //                       <option value="1">Consulta Nutricional</option>
// //                       <option value="2">Plan Alimenticio</option>
// //                     </select>
// //                   </div>
// //                 </div>
// //                 <div class="col-md-6 mb-3">
// //                   <div class="form-group">
// //                     <label for="fechaHora">Fecha y Hora:</label>
// //                     <input type="datetime-local" class="form-control " id="fechaHora"
// //                       style="font-size: 1rem;">
// //                   </div>
// //                 </div>
// //               </div>
// //             </div>

// //             <!-- Scheduled Appointments Tab -->
// //             <div class="tab-pane fade" id="citas" role="tabpanel">
// //               <div class="row">
// //                 <div class="col-md-12">
// //                   <ul class="list-group">
// //                     <li class="list-group-item d-flex justify-content-between align-items-center">
// //                       Cita 1 - Vista Presencial
// //                       <div>
// //                         <button class="btn btn-danger btn-sm me-2">Eliminar</button>
// //                         <button class="btn btn-dark btn-sm">Editar</button>
// //                       </div>
// //                     </li>
// //                     <li class="list-group-item d-flex justify-content-between align-items-center">
// //                       Cita 2 - Consulta en Línea
// //                       <div>
// //                         <button class="btn btn-danger btn-sm me-2">Eliminar</button>
// //                         <button class="btn btn-dark btn-sm">Editar</button>
// //                       </div>
// //                     </li>
// //                   </ul>
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </section>
// //   </main>
// //         `;
// //     });

// //     // ahora agregamos el codigo para el apartado de cursos
// //     const cursos = document.querySelector('#cursos');
// //     cursos.addEventListener('click',()=>{
// //         const contenedor = document.querySelector('.contenedor-pri');
// //         contenedor.innerHTML = `
// //              <div class="container py-5">
// //     <h1 >Cursos</h1>
// //     <p class="descripcion">¿Necesitas mejorar tu alimentación? Estas en el lugar correcto, encuentra tu curso aquí. </p>

// //     <div class="row g-4">
// //       <div class="col-md-4">
// //         <div class="card h-100 ">
// //           <div class="card-body">
// //             <div class="placeholder-image mb-3"></div>
// //             <h5 class="card-title">Title</h5>
// //             <p class="card-text">Body text for whatever you'd like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story.</p>
// //             <a href="#" class="btn btn-dark">Ver más</a>
// //           </div>
// //         </div>
// //       </div>

// //       <div class="col-md-4">
// //         <div class="card h-100 ">
// //           <div class="card-body">
// //             <div class="placeholder-image mb-3"></div>
// //             <h5 class="card-title">Title</h5>
// //             <p class="card-text">Body text for whatever you'd like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story.</p>
// //             <a href="#" class="btn btn-dark">Ver más</a>
// //           </div>
// //         </div>
// //       </div>
// //       <div class="col-md-4">
// //         <div class="card h-100 ">
// //           <div class="card-body">
// //             <div class="placeholder-image mb-3"></div>
// //             <h5 class="card-title">Title</h5>
// //             <p class="card-text">Body text for whatever you'd like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story.</p>
// //             <a href="#" class="btn btn-dark">Ver más</a>
// //           </div>
// //         </div>
// //       </div>
// //       <div class="col-md-4">
// //         <div class="card h-100 ">
// //           <div class="card-body">
// //             <div class="placeholder-image mb-3"></div>
// //             <h5 class="card-title">Title</h5>
// //             <p class="card-text">Body text for whatever you'd like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story.</p>
// //             <a href="#" class="btn btn-dark">Ver más</a>
// //           </div>
// //         </div>
// //       </div>
// //       <div class="col-md-4">
// //         <div class="card h-100 ">
// //           <div class="card-body">
// //             <div class="placeholder-image mb-3"></div>
// //             <h5 class="card-title">Title</h5>
// //             <p class="card-text">Body text for whatever you'd like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story.</p>
// //             <a href="#" class="btn btn-dark">Ver más</a>
// //           </div>
// //         </div>
// //       </div>
// //       <div class="col-md-4">
// //         <div class="card h-100 ">
// //           <div class="card-body">
// //             <div class="placeholder-image mb-3"></div>
// //             <h5 class="card-title">Title</h5>
// //             <p class="card-text">Body text for whatever you'd like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story.</p>
// //             <a href="#" class="btn btn-dark">Ver más</a>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   </div>
// //         `;
// //     });
// });

// codigo para agregar los modulos dinamicamente mediante un fetch

// funcion para cargar el modulo
// hacemos la funcion para cambiar los modulos.

document.addEventListener('DOMContentLoaded',(event)=>{
    // primero obtenemos el contenedor principal
    const contenedor = document.querySelector('.contenedor-pri');
    // creamos un objeto que va a contener los botones que van a tener los eventos
    const botones = {
        inicio: document.querySelector('#inicio'), 
        solicitarcita : document.querySelector('#sol'),
        cursos : document.querySelector('#cursos')  
    };

    // luego creamos la funcion que carga el modulo
    const cargarModulo = async (ruta)=>{
        try {
    
            const response = await fetch(ruta);
    
            if(!response.ok){
                console.log(`Error al cargar el modulo ${ruta}`);
            }
            
            // convertimos la respuesta a texto
            const html = await response.text();
            contenedor.innerHTML = html;
            // guardamos el modulo actual en el localstorag
            localStorage.setItem('moduloActual', ruta);
            // con este metodo agregamos la logica correspondiente a cada modulo.
            inicializarModulos(ruta);
        } catch (error) {
            console.log(`Error al cargar el modulo ${ruta} ${error}`);
        }
    }

    // cargamos los eventos respectivos para cada boton y le indicamos que modulo debe cargar
    botones.solicitarcita.addEventListener('click', ()=> cargarModulo('modulos/solicitarcita.html'));
    botones.cursos.addEventListener('click', ()=> cargarModulo('modulos/cursos.html'));
    botones.inicio.addEventListener('click', ()=> cargarModulo('modulos/inicio.html'));
    
    // cargar el estado guardado al recargar la pagina
    const moduloActual = localStorage.getItem('moduloActual')|| 'modulos/inicio.html' ;
    cargarModulo(moduloActual);

    const inicializarModulos = (ruta)=>{
         // Cargar scripts específicos para cada módulo
         if (ruta=== 'modulos/solicitarcita.html') {
            LogicaSol_cita();
        } else if (ruta === 'modulos/cursos.html') {
            LogicaCursos();
        } else if(ruta === 'modulos/inicio.html'){
            LogicaInicio();
        }
    }

    const LogicaCursos = ()=>{

        //desactivamos los botones de el nav que no se van a utilizar
        const nav = {
            experiencia : document.querySelector('#exp'),
            consultorio : document.querySelector('#cons')
        };

        nav.experiencia.style.display = 'none';
        nav.consultorio.style.display = 'none';

        cargarCursos();
    }

    const cargarCursos = async ()=>{

         // agregamos la logica para cargar los cursos en el contenedor-cursos
         const request =  await fetch('api/getcursos', {
            method : 'GET',
            headers : {
                'Accept' : 'application/json',
                'Content-Type' : 'application/json'
            }
        });

        const response = await request.json();

        if(request.status == 200){
            // si la respuesta fue 200 ps recorro el array de response y subo los cursos al contenedor
            console.log(response);
            localStorage.setItem('cursos', JSON.stringify(response));
            const contenedor_cursos = document.querySelector('.g-4');
            console.log(contenedor_cursos);
            let cuentas = '';

            for(let r of response){
                    cuentas += `
                        <div class="col-md-4">
                            <div class="card h-100 ">
                                <div class="card-body">
                                    <div class="placeholder-image mb-3" style="background-image: url('${r.url_imagen}');"></div>
                                    <h5 class="card-title">${r.titulo}</h5>
                                    <p class="card-text">${r.descripcion}</p>
                                </div>
                            </div>
                        </div>

                    `
            }
            //agregamos todas las cuentas al contenedor
            contenedor_cursos.innerHTML = cuentas;

        } else if(request.status == 201){
            alert(response.respuesta);
        } 
    }


    const LogicaSol_cita = ()=>{

         //desactivamos los botones de el nav que no se van a utilizar
         const nav = {
            experiencia : document.querySelector('#exp'),
            consultorio : document.querySelector('#cons')
        };

        nav.experiencia.style.display = 'none';
        nav.consultorio.style.display = 'none';
        console.log('hola mundo');
    }

    const LogicaInicio = ()=>{

        // agregamos el evento de la pagina de inicio
        const sol_main = document.querySelector('#sol_main');
        sol_main.addEventListener('click', ()=> cargarModulo('modulos/solicitarcita.html'));

        // activamos los nav
        //desactivamos los botones de el nav que no se van a utilizar
        const nav = {
            experiencia : document.querySelector('#exp'),
            consultorio : document.querySelector('#cons')
        };

        nav.experiencia.style.display = 'block';
        nav.consultorio.style.display = 'block';

        const boton = document.querySelector('.link-admin');
        boton.addEventListener('click', ()=> location.href = '/formularioiniciosesion.html');

    }
});


   
    



