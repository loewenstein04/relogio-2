function relogio() {
    const elementoRelogio = document.querySelector('.relogio')
    const horaAtual = new Date()
    const horas = horaAtual.getHours()
    const minutos = horaAtual.getMinutes()
    const segundos = horaAtual.getSeconds()
    //Configuração do Tempo
    const formatoHoras = horas.toString().padStart(2 /*Número de carateries que vão aparecer*/, "0")
    const formatoMinutos = minutos.toString().padStart(2, "0")
    const formatoSegundo = segundos.toString().padStart(2, "0")

    elementoRelogio.textContent = `${formatoHoras}:${formatoMinutos}:${formatoSegundo}`

    if (horas < 12) {
        document.body.innerHTML += '<img src="http://24.media.tumblr.com/3a6f1c13ccaba5b53b4c896615854d47/tumblr_mptt1fO0JG1sa8oyyo1_250.gif" alt="Imagem não carregada">'
        document.querySelector('.tudo').style.cssText = 'background: linear-gradient(#ffd587, #fab940, #fdb42e, #ffa500); box-shadow: 0px 0px 100px #fab940; position: absolute; right: 0; height: 100vh; width: 50vw; display: flex; flex-direction: column; justify-content: center; align-items: center; z-index: 1;'
    } else if (horas < 18) {
        document.body.innerHTML += '<img src="http://www.orkugifs.com/images/Dia-de-praia-_1615.gif" alt="Imagem não carregada">'
        document.querySelector('.tudo').style.cssText = 'background: linear-gradient(#7be0ff, #62d9fd, #40d2ff, #0ac6ff); box-shadow: 0px 0px 100px #62d9fd; position: absolute; right: 0; height: 100vh; width: 50vw; display: flex; flex-direction: column; justify-content: center; align-items: center; z-index: 1;'
    } else if (horas < 19) {
        document.body.innerHTML += '<img src="http://www.orkugifs.com/images/Belo-por-do-sol_1609.gif" alt="Imagem não carregada">'
        document.querySelector('.tudo').style.cssText = 'background: linear-gradient(#fdca00, #fdd300, #fdb100, #fda000); box-shadow: 0px 0px 100px #fdd300; position: absolute; right: 0; height: 100vh; width: 50vw; display: flex; flex-direction: column; justify-content: center; align-items: center; z-index: 1;'
    } else {
        document.body.innerHTML += '<img src="https://i.pinimg.com/originals/9e/4d/dc/9e4ddcd1cbd74c563a76e152958bcc8e.gif" alt="Imagem não carregada">'
        document.querySelector('.tudo').style.cssText = 'background: linear-gradient(#2e2e2e, #242424, #101010, #000000); box-shadow: 0px 0px 200px #101010; position: absolute; right: 0; height: 100vh; width: 50vw; display: flex; flex-direction: column; justify-content: center; align-items: center; z-index: 1;'
        document.querySelector('.frase').style.color = '#f2f2f2'
        document.querySelector('h1').style.color = '#f2f2f2'
    }

    const frase = document.querySelector('.frase')
    dia = new Array('Domingo', 'Segunda-Feira', 'Terça-Feira', 'Quarta-Feira', 'Quinta-Feira', 'Sexta-Feira', 'Sábado')

    mes = new Array('Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', ' Dezembro')

    hoje = new Date()

    frase.innerHTML = `${dia[hoje.getDay()]}, dia ${hoje.getDate().toString().padStart(2,"0")} de ${mes[hoje.getMonth()]} de ${hoje.getFullYear()}`

    //teste páscoa

   
}
setInterval(relogio, 1000)