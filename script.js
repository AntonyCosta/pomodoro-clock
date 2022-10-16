let tempoRestante = document.querySelector('#tempo-restante');
let tempoIntervalo = document.querySelector('#tempo-intervalo');
let tempoSessao = document.querySelector('#tempo-sessao');
let sessaoTitulo = document.querySelector('#sessao-titulo');
let play = document.querySelector('#play-botao');


function convertHMS(value) {
    const sec = parseInt(value, 10);
    let hours = Math.floor(sec / 3600);
    let minutes = Math.floor((sec - (hours * 3600)) / 60);
    let seconds = sec - (hours * 3600) - (minutes * 60);
    if (hours < 10) { hours = "0" + hours; }
    if (minutes < 10) { minutes = "0" + minutes; }
    if (seconds < 10) { seconds = "0" + seconds; }
    if (hours > 0)
        return hours + ':' + minutes + ':' + seconds;
    else
        return minutes + ':' + seconds;
}

function convertToSeconds(value) {
    var a = value.split(':');

    var seconds = (+a[0]) * 60 * 60 + (+a[1]) * 60 + (+a[2]);

    return seconds;
}


function upTime(local) {
    let sessaoTempo = parseFloat(document.querySelector(local).value);
    sessaoTempo += 5;
    document.querySelector(local).value = sessaoTempo;

    if (local == '#tempo-sessao') {
        tempoRestante.innerText = sessaoTempo;
    }
}

function downTime(local) {
   
    let sessaoTempo = parseFloat(document.querySelector(local).value);
    sessaoTempo -= 5;
    document.querySelector(local).value = sessaoTempo;
    if (sessaoTempo < 0) {
        document.querySelector(local).value = 0;
    }
    if (local == '#tempo-sessao') {
        tempoRestante.innerText = sessaoTempo;
    }
}

function countdown() {
    let tempoCountdown = parseFloat(tempoRestante.innerText);
    console.log(tempoCountdown);
    tempoCountdown -= 1;
    tempoRestante.innerText = tempoCountdown;

    if (tempoCountdown < 0 && sessaoTitulo.innerText == "TEMPO RESTANTE") {
        tempoRestante.innerText = tempoIntervalo.value;
        sessaoTitulo.innerText = "INTERVALO";
    }
    else if (tempoCountdown < 0 && sessaoTitulo.innerText == "INTERVALO") {
        tempoRestante.innerText = tempoSessao.value;
        sessaoTitulo.innerText = "TEMPO RESTANTE";
    }
}

let myTime;
function controlTimer(action) {
    if (action == "play") {
        play.disabled = true;
        myTime = setInterval(function () { countdown() }, 1000);
    }
    else if (action == "pause") {
        play.disabled = false;
        clearInterval(myTime);
    }
    else if (action == "reset") {
        clearInterval();
        tempoRestante.innerText = tempoSessao.value;
        sessaoTitulo.textContent = "Tempo Restante";
    }
}
