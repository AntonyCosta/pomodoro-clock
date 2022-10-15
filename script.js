let sessao = document.querySelector('.modificador').innerHTML;

function upTime(local){
    let sessaoTempo = parseFloat(document.querySelector(local).value);
    sessaoTempo += 5;
    document.querySelector(local).value = sessaoTempo;
    
    if(local =='#tempo-sessao') {
    document.querySelector('.tempo-restante').innerHTML = sessaoTempo;
}
}

function downTime(local){
    let sessaoTempo = parseFloat(document.querySelector(local).value);
    sessaoTempo -= 5;
    document.querySelector(local).value = sessaoTempo;
    if(sessaoTempo < 0){
        document.querySelector(local).value = 0;
    }
    if(local=='#tempo-sessao') {
    document.querySelector('.tempo-restante').innerHTML = sessaoTempo;
    }
}

function countdown(){
    let tempoRestante = parseFloat(document.querySelector('.tempo-restante').innerHTML);
    tempoRestante -= 1;
 document.querySelector('.tempo-restante').innerHTML = tempoRestante;
    if(tempoRestante < 0){
        document.querySelector('.tempo-restante').innerHTML = document.querySelector('#tempo-intervalo').value;
        document.querySelector('h2').textContent = "Intervalo";
    }
    else if (tempoRestante < 0) {
       
    }
}

let myTime;
// let myInterval;
function controlTimer(action) {
    if(action == "play"){
        document.querySelector('#play-botao').disabled = true;
        myTime = setInterval(function () { countdown() }, 1000);
    }
    else if(action == "pause"){
        document.querySelector('#play-botao').disabled = false;
        clearInterval(myTime);
    }
    else if (action == "reset"){
        clearInterval();
        document.querySelector('.tempo-restante').innerHTML = document.querySelector('#tempo-sessao').value
        document.querySelector('h2').textContent = "Tempo Restante";
    }
}
