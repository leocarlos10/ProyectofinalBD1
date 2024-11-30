
document.addEventListener(('DOMContentLoaded'), ()=>{
    const boton = document.querySelector("#btn-ingresar");
    boton.addEventListener("click", (event) => {
        // para evitar el comportamiento por defecto del form
        event.preventDefault();
        iniciarsesion();
    });
});

const iniciarsesion = async ()=>{
     // obtenemos los datos del usuario
     let pediatra = {
         nombre : document.querySelector('#nombre').value,
         pass : document.querySelector('#pass').value
     }
     // verificamos que los inputs no esten vacios.
     if(!(pediatra.nombre === "" && pediatra.pass === "")){
         // ya que vericamos que los campos no esten vacios hacemos la solicitud a backend
         const request = await fetch('api/login',{
            method: 'POST',
            headers: {
                'Accept' : 'application/json',
                'Content-Type' : 'application/json'
              },
            body: JSON.stringify(pediatra)
        });
     
         // convertimos la respuesta a un objeto js
         const response = await request.json();
     
         // verificamos las respuestas HTTP
         if(request.status == 200){
             // guardamos el objeto en el localstorage
             
             localStorage.setItem('pediatra',JSON.stringify(response));
             // redirigimos al usuario a la pagina principal
             location.href = 'admincita.html';
     
         } else if(request.status == 401){
             alert(response.respuesta);
         }else if(request.status == 404){
             alert('Tu cuenta no ha sido encontrada');
         } 

     } else {
         alert('por favor, revise que los campos no esten vacios!');
     }
}
