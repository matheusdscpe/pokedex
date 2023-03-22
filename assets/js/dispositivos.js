let body = document.querySelector('body');
let altura = body.clientHeight;
export let largura = body.clientWidth;


export function verificaLimit(largura) {
    if(largura <= 425){
        return 2;
    }else if(largura >= 425 && largura <= 700){
        return 4;
    }else if(largura <= 1024){
        return 8;
    }

};



console.log(largura, altura);