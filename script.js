let tempoRestante = document.querySelector('#tempo-restante');
let tempoIntervalo = document.querySelector('#tempo-intervalo');
let tempoSessao = document.querySelector('#tempo-sessao');
let sessaoTitulo = document.querySelector('#sessao-titulo');
let play = document.querySelector('#play-botao');

function upTime(local) {
    let sessaoTempo = parseFloat(document.querySelector(local).value);
    sessaoTempo += 5;
    document.querySelector(local).value = sessaoTempo;

    if (local == '#tempo-sessao') {
        tempoRestante.innerHTML = sessaoTempo;
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
        tempoRestante.innerHTML = sessaoTempo;
    }
}

function countdown() {
    let tempoCountdown = parseFloat(tempoRestante.innerHTML);
    tempoCountdown -= 1;
    tempoRestante.innerHTML = tempoCountdown;

    if (tempoCountdown < 0 && sessaoTitulo.innerText == "TEMPO RESTANTE") {
        tempoRestante.innerHTML = tempoIntervalo.value;
        sessaoTitulo.innerText = "INTERVALO";
    }
    else if (tempoCountdown < 0 && sessaoTitulo.innerText == "INTERVALO") {
        tempoRestante.innerHTML = tempoSessao.value;
        sessaoTitulo.innerText = "TEMPO RESTANTE";
    }
}

let myTime;
// let myInterval;
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
        tempoRestante.innerHTML = tempoSessao.value
        sessaoTitulo.textContent = "Tempo Restante";
    }
}
