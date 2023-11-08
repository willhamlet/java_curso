/*
let a = 'A';
let b = 'B';
let c = 'C';

const numeros = [b, c, a];
[a, b, c] = numeros;
console.log(a, b, c);


const numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const [zero, , dois, tres, ...resto] = numeros; //OBS: são os valores do array e não o índice!!

console.log(zero, dois, tres);
console.log(resto);


const numeros = [ [1, 2, 3], [4, 5, 6], [7, 8, 9] ];
console.log(numeros[1][2]);

*/ 
const numeros = [ [1, 2, 3], [4, 5, 6], [7, 8, 9] ]

const [, [,,seis]] = numeros;
console.log(seis);
