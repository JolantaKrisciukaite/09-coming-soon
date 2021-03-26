const sum = (a, b) => a + b;
const minus = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

// biblioteka
// matematika.js - komponentas

const matematika = {
    sudeti: sum,
    atimti: minus,
    sudauginti: multiply,
    dalinti: divide,

    sum: sum,
    subtract: minus,
    multiply: multiply,
    divide: divide,

    rus1: sum,
    rus2: minus,
    rus3: multiply,
    rus4: divide
}

export {matematika}
