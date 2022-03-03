alert('oi');


function atualizarTempo(){
    const display = document.querySelector('.display');
    const agora = new Date();
    const horario = agora.getHours() + ':' + agora.getMinutes() + ':' + agora.getSeconds();    
    display.textContent = horario;
}


setInterval(atualizarTempo, 1000); 


