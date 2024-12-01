

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

        // Logica para el control de el Registo de citas 
        
        const boton = document.querySelector('.btn-registrar-cita');
        boton.addEventListener('click',()=>{
            RegistrarCita();
        });

    }

    const RegistrarCita = async ()=>{
        const btn_presencial = document.querySelector('#agendar-tab');
        const btn_enlinea = document.querySelector('#citas-tab');

        const is_presencial_selected =  btn_presencial.getAttribute('aria-selected');
        const is_enlinea_selected = btn_enlinea.getAttribute('aria-selected');

        let cita = {} 

        if(is_presencial_selected === 'true'){
            cita.servicio = document.querySelector('#servicio').value;
            cita.fechahora = document.querySelector('#fechaHora').value;
        } else if(is_enlinea_selected === 'true'){
            cita.servicio = document.querySelector('#servicio-linea').value;
            cita.fechahora = document.querySelector('#fechaHora-linea').value;
        } else {
            cita.servicio = document.querySelector('#servicio').value;
            cita.fechahora = document.querySelector('#fechaHora').value
        }

        console.log(cita);

        // aplicamos el fetch al endpoitn de cita
        const request = await fetch ('api/cita',{
            method : 'POST',
            headers : {
                'Accept' : 'application/json',
               'Content-Type' : 'application/json'
            },
            body : JSON.stringify(cita)
        });

        const response = await request.json();

        if(request.status == 200){
            localStorage.setItem('id',response.id);
            location.href = 'formularioRegistro.html';
        }else{
            alert(response.respuesta);
        }
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


   
    



