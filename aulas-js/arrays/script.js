// TAMANHO DO ARRAY
const valores = [1, 2, 3];
console.log(valores);

const t1 = valores.length;
console.log("Teste length")
console.log(t1);

// REMOVER ELEMENTOS
const nomes = ["Maria", "João", "Ana", "Marcos"];
const r1 = nomes.pop();
const r2 = nomes.shift();
console.log("Teste pop")
console.log(`Esse nome aqui foi removido com o ".pop()": "${r1}"`);
console.log(`Esse nome aqui foi removido com o ".shift()": "${r2}"`);
console.log(`O array "nomes" agora ficou assim: [${nomes}]`);
console.log(nomes); // para conseguir ver as propriedas no console, fiz sem concatenação

// INSERIR ELEMENTOS
const alturas = [1.65, 1.82, 1.7];
alturas.push(1.75);
alturas.unshift(2.1);
console.log("Teste push e unshift");
console.log(alturas);

// INSERIR E REMOVER GERAL
const letras = ["A", "B", "C", "D", "E", "F"];

letras.splice(2, 3, "X", "Y");
console.log("Teste splice");
console.log(letras);

// CONCATENAR
const meninas = ["Maria", "Ana"];
const meninos = ["João", "Marcos"];
const todos = meninas.concat(meninos);
console.log("Test concat");
console.log(todos);

// ACESSO E ATRIBUIÇÃO
const idades = [20, 30, 40, 50];

idades[1] = 38;
console.log("Teste acesso atribuição");
console.log(idades);

// PERCORRER UM ARRAY
const frutas = ["Banana", "Laranja", "Uva"];
console.log("Teste percorrer array");
for (let i = 0; i <frutas.length; i++) {
  console.log(frutas[i]);
}

// PERCORRER ARRAY COM FOR EACH
console.log("Percorrer array usando o forEach:")
frutas.forEach(x => {
  console.log(x);
});
