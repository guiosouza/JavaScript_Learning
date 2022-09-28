const item1 = document.querySelector("li");

console.log(item1);
console.log(item1.innerHTML);
console.log(item1.outerHTML); // Escreve HTML todo

const items = document.querySelectorAll("li");

console.log(items);

const card1 = document.querySelector(".card");

console.log(card1);

const paragrafo = document.createElement("p");
paragrafo.innerHTML = "Descrição adicionada via DOM por JavaScript";
card1.appendChild(paragrafo);

card1.classList.add("super-border") // Adicionando estilo com JS + CSS

const cards = document.querySelectorAll(".card");
// const cards = document.getElementsByClassName("card");
console.log(cards);

// Transformar em array e depois imprimir
Array.from(cards).map(item => {
    console.log(item.innerHTML);
})