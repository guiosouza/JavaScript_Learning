const list1 = [1, 2, 3, 4];
const list2 = [];
const nomes = ['MARIA', 'JOAO', 'ANABELA'];

// map: aplica uma função a cada elemento da coleção original, retornando uma nova coleção com os elementos alterados

function dobro(x) {
    return x * 2;
}

function triplo(x) {
    return x * 3;
}

function ehAluno(nome) {
    return nome + " é aluno nosso!"
}

const m1 = list1.map(dobro);
const m2 = list1.map(triplo);
const m3 = nomes.map(ehAluno);
const m4 = list1.map(x => x * 12) // Função lambda ou anônima;

console.log("Testes com o MAP -------------------------")
console.log(m1);
console.log(m2);
console.log(m3);
console.log(m4);

// FILTER: Retorna uma nova coleção contendo apenas aqueles elementos da coleção original
// Que satisfazem um dado predicado

function par(x) {
    return x % 2 == 0;
}

console.log(par(6));
console.log(par(9));

const f1 = list1.filter(par);
const f2 = list1.filter(x => x % 2 !== 0);
const f3 = list1.filter(x => x % 2 == 0);   
console.log("-------------------------------------------------");

console.log("-------------- Testes com o FILTER --------------");
console.log(f1);
console.log("Os ímpares do filter da lista: " + f2);
console.log("Os pares do filter da lista: " + f3);
console.log("Imprimindo o array dos filters de pares e ímpares sem concatenação:");
console.log(f2);
console.log(f3);

// -----------------------------------------------------------------------------------------------------
// reduce: aplica cumulativamente uma função aos elementos de uma coleção, retornando o resultado final
// cumulativo.
// * você pode informar, opcionalmente, um valor inicial como parâmetro (necessário para coleção vazia).

function soma(x, y) {
    return x + y;
}

function produto(x, y) {
    return x * y;
}

const r1 = list1.reduce(soma, 0);
const r2 = list2.reduce(soma, 0 ); // irá dar zero caso a lista esteja vazia
const r3 = list1.reduce(produto, 1);

console.log("-------------- REDUCE --------------");
console.log(r1);
console.log(r2);
console.log(r3);

// -------------------------------------------------------------------------------------------------------
// sort: ordena a coleção conforme a função de comparação informada como parâmetro

console.log("-------------- SORT --------------");

function comparacaoPorTamanho(s1, s2) {
    return s1.length - s2.length;
 }
 
 console.log('SORT ------------------------------');
 const s1 = nomes.sort(comparacaoPorTamanho);
 console.log(s1);
 const s2 = nomes.sort();
 console.log(s2);
 const s3 = nomes.sort((x, y) => x.length - y.length);
 console.log(s3);
