const audioBatalha = document.querySelector("#audioBatalha");

const btAudioOn = document.querySelector("#btAudioOn");
const btAudioOff = document.querySelector("#btAudioOff");


function mudo() {

    let estadoBt = 1;
    if(estadoBt == 1){
        audioBatalha.play();
        btAudioOn.classList.toggle("btOff");
        btAudioOff.classList.toggle("btOff");
        estadoBt++;
    }else if(estadoBt == 2){
        audioBatalha.muted();
        btAudioOn.classList.toggle("btOff");
        btAudioOff.classList.toggle("btOff");
        estadoBt++;
    }else{
        estadoBt = 1;
    }

}


btAudioOn.addEventListener('click', mudo);
btAudioOff.addEventListener('click', mudo);


// audioBatalha.play();
//         btAudio.classList.toggle(fa-volume-high,fa-volume-xmark)