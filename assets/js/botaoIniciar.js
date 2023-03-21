const btIniciar = document.querySelector("#btIniciar");
const audioBotao = document.querySelector("#audioBotao");

function som() {
    audioBotao.play()
    setTimeout(() => location.href = "./play.html", 2000);
}

btIniciar.addEventListener('click', som);