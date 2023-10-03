// Não podemos criar constantes com palavras reservadas 
// Constantes precisam ter nomes significativos 
// Nõa pode começar o nome de uma constante com um número 
// Não podem conter espaços ou traços 
// Utilizamos camelCase
// Case-Sensitive
// Não podemos modificar o valor de uma constante 
// Não Utilize VAR, Utilize CONST. 

const primeiroNumero =  5; 
const segundoNumero = 10; 
const resultado = primeiroNumero * segundoNumero; 
const resultadoDuplicado = resultado *2;
let resultadoTriplicado = resultado * 3;
resultadoTriplicado = resultadoTriplicado + 5;
console.log(resultadoTriplicado);

console.log(typeof(primeiroNumero));
