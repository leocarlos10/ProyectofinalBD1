
document.addEventListener('DOMContentLoaded',()=>{

    document.querySelector('.btn').addEventListener('click', (e)=>{
        e.preventDefault();
        solicitud();
    });

    const solicitud = async ()=>{
        
        let paciente = {
            cedula : document.querySelector('#cedula').value,
            nombre : document.querySelector('#nombre').value,
            apellido : document.querySelector('#apellido').value,
            fechaNacimiento : document.querySelector('#fechaNacimiento').value,
            telefono : document.querySelector('#telefono').value,
            fechaUltValoracion : document.querySelector('#ultimaValoracion').value,
            ciudad : document.querySelector('#ciudad').value,
            motivoC : document.querySelector('#motivo').value,
            remitente : document.querySelector('#remitente').value,
           
        }

        if (Object.values(paciente).some(value => value.trim() === "")) {
            alert("Todos los campos deben ser completados.");
        } else {
                // obtenemos el servicio que guardamos en el localstorage con e objetivo de recuperar el id cita
            paciente.idcita = parseInt( localStorage.getItem('id'));
            // en caso de que todos los inputs esten completos enviamos los datos al backend
            const request = await fetch('api/paciente',{
                method : 'POST',
                headers : {
                    'Accept' : 'application/json',
                'Content-Type' : 'application/json'
                },
                body : JSON.stringify(paciente)
            })

            const response = await request.json();

            if(request.status == 200){
                alert(response.respuesta);
                location.href ='index.html';
            }else if (request.status == 400){
                alert(response.respuesta);
            } 
        }
    }
});