function actualizarFechaHora() {
    let fecha = new Date();
    let opciones = { 
        timeZone: 'America/Tijuana', 
        day: '2-digit', month: '2-digit', year: 'numeric',
        hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true 
    };
    let fechaHora = fecha.toLocaleString('es-ES', opciones).replace(',', ' a las');
    document.getElementById('fecha-hora').innerText = `Mexicali B.C a: ${fechaHora}`;
}
setInterval(actualizarFechaHora, 1000);
actualizarFechaHora();
