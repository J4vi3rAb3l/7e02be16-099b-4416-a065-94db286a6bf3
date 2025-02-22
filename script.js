function actualizarFechaHora() {
    let fecha = new Date();
    let opciones = { timeZone: 'America/Los_Angeles', hour12: true };
    let fechaHora = fecha.toLocaleString('es-ES', opciones).replace(',', ' a las');
    let fechaTexto = 'Mexicali: ' + fechaHora;
    
    let fechaElemento = document.getElementById('fecha-hora');
    fechaElemento.innerText = fechaTexto;
    fechaElemento.style.textAlign = 'center';
}

actualizarFechaHora();
setInterval(actualizarFechaHora, 1000);
