function soma1(num1, num2) {
    return num1 + num2;
}

console.log("Soma da função 1: " + soma1(3, 4));

const soma2 = function soma(num1, num2) {
    return num1 + num2;
}

console.log("Soma da função 2: " + soma2(5, 5));

// FUNÇÕES ANÔNIMAS
const soma3 = (num1, num2) => {
    return num1 + num2;
};

console.log("Soma da função 3: " + soma3(4, 4));

// Quarta forma de declarar função

const soma4 = (num1, num2) => num1 + num2;
console.log("Soma da função 4: " + soma4(3, 3));

const dobro1 = function(num1) {
    return num1 * 2;
}

console.log(dobro1(10));

const dobro2 = num1 => num1 * 2; // Um argumento não precisa de parênteses
console.log(dobro2(10));

// A função que não tem um retorno definido, por padrão ela retorna undefined
function mostrarPreco(preco) {
    console.log("Preco = " + preco);
}

// Variaveis definidas dentro da funcao pertencem somente ao escopo da funcao

function areaCirculo(raio) {
    var pi = 3.14;
    return pi * raio * raio;
}
//console.log(pi);

// Function hoisting: declaracoes de funcoes sao "movidas" para cima pelo motor do JavaScript

teste(5);

function teste(x) {
    console.log("TESTE " + x);
}

// Funcoes podem ser passadas como argumento

function triplo(num) {
    return num * 3;
}

function aplicar(f, num) {
    const result = f(num);
    console.log("RESULTADO = " + result);
}

aplicar(dobro1, 10);
aplicar(triplo, 10);