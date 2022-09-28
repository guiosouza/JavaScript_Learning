function sum(num1, num2) {
    return num1 + num2;
}

function exp(base, expoente) {
    return base ** expoente;
}

function round(value, precision) {
    var multiplier = exp(10, precision || 0);
    return Math.round(value * multiplier) / multiplier;
}

export { sum, round }; // vai exportar somente as funções que eu colocar aqui
