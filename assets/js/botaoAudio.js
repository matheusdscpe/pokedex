const audioBatalha = document.querySelector("#audioBatalha");

const btAudioOn = document.querySelector("#btAudioOn");
const btAudioOff = document.querySelector("#btAudioOff");


function play() {
        audioBatalha.play();
        btAudioOn.classList.toggle("btOff");
        btAudioOff.classList.toggle("btOff"); 
}
function mudo(){
    audioBatalha.pause();
        btAudioOn.classList.toggle("btOff");
        btAudioOff.classList.toggle("btOff");
}


btAudioOn.addEventListener('click', play);
btAudioOff.addEventListener('click', mudo);
