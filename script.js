function upTime(local){
    let sessaoTempo = parseFloat(document.querySelector(local).value);
    sessaoTempo += 5;
    document.querySelector(local).value = sessaoTempo;

    if(local=='#tempo-sessao')
    document.querySelector('.tempo-restante').innerHTML = sessaoTempo;
}

function downTime(local){
    let sessaoTempo = parseFloat(document.querySelector(local).value);
    sessaoTempo -= 5;
    document.querySelector(local).value = sessaoTempo;
    if(sessaoTempo < 0){
        document.querySelector(local).value = 0;
    }

    if(local=='#tempo-sessao')
    document.querySelector('.tempo-restante').innerHTML = sessaoTempo;
}


let tempoRestante = parseFloat(document.querySelector('.tempo-restante').innerHTML);

function countdown(){
    tempoRestante -= 1;
    document.querySelector('.tempo-restante').innerHTML = tempoRestante;
    if(tempoRestante < 0){
        document.querySelector('.tempo-restante').innerHTML = document.querySelector('#tempo-intervalo').value;
    }

}

let myTime;

function controlTimer(action) {
    if(action == "play"){
        document.querySelector('#play-botao').disabled = true;
        myTime = setInterval(function () { countdown() }, 1000);

    }
    else if(action == "pause"){
        clearInterval(myTime);
    }
    else if (action == "reset"){
        clearInterval(myTime);
        document.querySelector('.tempo-restante').innerHTML = document.querySelector('#tempo-sessao').value;
    }
}

