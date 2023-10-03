/*
O valor de A tenha o valor de B, e B tenha o valor de B e C tenha o valor de A 


let valorA = 'A';
let valorB = 'B';
let valorC = 'C';

let a = valorB; 
let b = valorC; 
let c = valorA; 

console.log(`Os primeiros valores são A é:${valorA}, B é:${valorB},C é:${valorC}`);
console.log(`O valor de A é:${a}, o valor de B é:${b}, o valor de C é:${c}`); 

*/

let valorA = 'A';
let valorB = 'B';
let valorC = 'C'; 

[valorA, valorB, valorC] = [valorB, valorC, valorA]; 

console.log(valorA, valorB, valorC);
