function convertHMS(value) {
    const sec = parseInt(value, 10);
    let hours   = Math.floor(sec / 3600);
    let minutes = Math.floor((sec - (hours * 3600)) / 60);
    let seconds = sec - (hours * 3600) - (minutes * 60);
    if (hours   < 10) {hours   = "0"+hours;}
    if (minutes < 10) {minutes = "0"+minutes;}
    if (seconds < 10) {seconds = "0"+seconds;}
    return hours+':'+minutes+':'+seconds;
}

function upTime(local){
    let sessaoTempo = parseFloat(document.querySelector(local).value);
    sessaoTempo += 5;
    document.querySelector(local).value = sessaoTempo;

    if(local=='#tempo-sessao')
    document.querySelector('.tempo-restante').innerHTML = convertHMS(sessaoTempo);
}

function downTime(local){
    let sessaoTempo = parseFloat(document.querySelector(local).value);
    sessaoTempo -= 5;
    document.querySelector(local).value = sessaoTempo;
    if(sessaoTempo < 0){
        document.querySelector(local).value = 0;
    }
    if(local=='#tempo-sessao') {
    document.querySelector('.tempo-restante').innerHTML = convertHMS(sessaoTempo);
    }
}

let tempoRestante = parseFloat(document.querySelector('.tempo-restante').innerHTML);

function countdown(){
    tempoRestante -= 1;
    document.querySelector('.tempo-restante').innerHTML = convertHMS(tempoRestante);
    
    if(tempoRestante < 0){
        document.querySelector('.tempo-restante').innerHTML = document.querySelector('#tempo-intervalo').value;
        document.querySelector('h2').textContent = "Intervalo";
    }
}

let myTime;
function controlTimer(action) {
    if(action == "play"){
        document.querySelector('#play-botao').disabled = true;
        myTime = setInterval(function () { convertHMS(countdown()) }, 1000);

    }
    else if(action == "pause"){
        document.querySelector('#play-botao').disabled = false;
        clearInterval(myTime);
    }
    else if (action == "reset"){
        clearInterval();
        document.querySelector('.tempo-restante').innerHTML = convertHMS(document.querySelector('#tempo-sessao').value)
        document.querySelector('h2').textContent = "Tempo Restante";
    }
}

