// REST: valores passados com virgula => array

function sum(...numbers) {
  let total = 0;
  for (let i = 0; i < numbers.length; i++) {
      total = total + numbers[i];
  }
  return total;
}

// Com o REST (...x), passar somente valores com vírgula, sem o array;

const result1 = (sum(1, 2, 3, 4)); // 10
console.log(result1);

const result2 = Math.max(2, 5, 9, 3); // pega o maior número
console.log(result2);

// SPREAD: de array => transforma o array em valores separados por vírgulas

const mynumbers = [2, 3, 10, 5];

const result3 = Math.max(...mynumbers);
console.log(result3);

// SPREAD: objeto => valores separados por vírgula

const item = {
  description: "Computador",
  price: 3000.0,
  quantity: 1
};

// Se eu quiser fazer uma cópia do objeto acima
// Se colocar const obj = item, vai apontar para referência, mas n será uma cópia
// Então:

const cloneItem = { ...item } // Espalaha os atributos do item por vírgula e coloca dentro das chaves

const cloneItemPlus = { ...item, weight: 10 };
console.log(cloneItemPlus);