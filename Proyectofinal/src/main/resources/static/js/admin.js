
document.addEventListener('DOMContentLoaded', (event)=>{

    const btn_cerrar_sesion = document.querySelector('.close-sesion');
    btn_cerrar_sesion.addEventListener('click', ()=>{
        localStorage.removeItem('pediatra');
        location.href = 'index.html';
    });

    const btn_resgistrar_curso = document.querySelector('.registro-curso');
    btn_resgistrar_curso.addEventListener('click', ()=>{
        location.href = 'registro_curso.html';
    });
});