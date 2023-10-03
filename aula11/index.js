/* Operadores Aritméticos  
+ adição e concatenação 
- / * 
** potenciação
% Resto da divisão 
os operadores tem as mesmas preferências da matemática comum, a não ser que tenha "( )"
Ordem: 
1 - ()
2 - ** 
3 - * / % 
4 - + - 
------- 
++ incremento 
-- decremento
*/ 

console.log('Valor do Incremento ++');
let contador = 1; 
contador++; // sempre que tem o ++ ele soma o valor da variável em + 1
contador++;
console.log(contador);

console.log('Valor do Decremento --');
let contador2 = 10; 
contador2--; // subtrai o valor em - 1 
contador2--;
console.log(contador2);

console.log('Valor do Incremento de potencialização **=');
let contador3 = 2; 
contador3 **= 10; //potencia o valor 
console.log(contador3)

console.log('Tratamento da variável de Str para Int');
let contador4 = 4; 
let contador5 = parseInt('5');
console.log(contador4 + contador5);
