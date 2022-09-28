

function dizerOla() {
    console.log("Olá");
}

// setTimeout(dizerOla, 2000)

function dizerBomDia(nome) {
    console.log("Bom dia " + nome);
}

setTimeout(() => {
    dizerBomDia("Maria");
    setTimeout(() => {
        dizerBomDia("João")
        setTimeout(() => {
            dizerBomDia("Eduardo")
        }, 1000);
    }, 1000);  
}, 2000);

// Já imprime o que está abaixo antes do settimeout porque é assync
console.log("A");
console.log("B");