
// OBJETOS JSON
const obj1 = {
    "name": "Computador",
    "price": 50.9,
    "due-date": "2025-04-15"
}

// OBJ SEM ASPAS NOS ATRIBUTOS (PODE SER USADO)
const obj2 = {
    name: "Computador",
    price: 50.9,
    "due-date": "2025-04-15"
}

const obj3 = {
    id: 53,
    date: "2021-10-20",
    items: [
        {
            description: "Celular",
            price: 1499.99,
            quantity: 1
        },
        {
            description: "Mouse",
            price: 100.0,
            quantity: 2
        }
    ],
    client: {
        name: "Maria Red",
        email: "maria@gmail.com",
        active: true
    }
};

console.log(obj1);
console.log(obj2);
console.log(obj3);

console.log(obj3.id);
console.log(obj3.client);
console.log(obj3.client.name);

const txt = `{"nome": "Computador", "price": 50.9, "due-date": "2025-04-15"}`; // isso é string

const obj = JSON.parse(txt); // convertendo para obj JSON

console.log(txt.name);

console.log(obj.nome);
console.log(obj.price);

const text = JSON.stringify(obj); // convertendo OBJ para texto