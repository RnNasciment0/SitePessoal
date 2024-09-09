function relogio() {
    const hoje = new Date();
    const formattedTime = hoje.toLocaleTimeString('pt-BR');
    const formattedDate = hoje.toLocaleDateString('pt-BR');
    document.getElementById('clock').textContent = `${formattedDate} ${formattedTime}`;
}

setInterval(relogio, 1000);
relogio();
