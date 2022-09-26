const time = 19;

if (time < 12) {
  console.log("Bom dia");
} else if (time < 18) {
  console.log("Boa tarde");
} else {
  console.log("Boa noite");
}

const week = 3;
let dayOfWeek = "Hoje é ";
switch (week) {
  case 1:
    console.log(dayOfWeek + " domingo");
    break;
  case 2:
    console.log("segunda");
    break;
  case 3:
    console.log(dayOfWeek + "terça");
    break;
  case 4:
    console.log(dayOfWeek + "quarta");
    break;
  case 5:
    console.log(dayOfWeek + "quinta");
    break;
  case 6:
    console.log(dayOfWeek + "sexta");
    break;
  case 7:
    console.log(dayOfWeek + "sábado");
    break;
  default:
    console.log("Valor inválido");
}

let count = 4;
while (count > 0) {
  console.log(`COUNT = ${count}`);
  count--;
}

for (let i = 0; i < 4; i++) {
  console.log(`I = ${i}`);
}

let test = 4;
do {
  console.log(`TEST = ${test}`);
  test--;
} while (test > 0);