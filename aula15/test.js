let numeroUsuario = prompt('Digite algum número: ');  

let numeroInt = Number(numeroUsuario);

let numRaiz = Math.sqrt(numeroInt); 
let numInt = Number.isInteger(numeroInt); 
let numNAN = Number.isNaN(numeroInt); 
let numDown = Math.floor(numeroInt);
let numUp = Math.ceil(numeroInt); 
let numCasas = numeroInt.toFixed(2); 

document.write(`<strong>Seu número é: ${numeroUsuario}</strong><br/>`);
document.write(`A raíz quadrada é: <strong>${numRaiz}</strong><br/>`);
document.write(`<strong>${numeroUsuario}</strong> é Inteiro: <strong>${numInt}</strong><br/>`); 
document.write(`<strong>${numeroUsuario}</strong> é NAN: <strong>${numNAN}</strong><br/>`);
document.write(`Arredondando para baixo: <strong>${numDown}</strong><br/>`);
document.write(`Arredondando para cima: <strong>${numUp}</strong><br/>`);
document.write(`Com duas casas decimais: <strong>${numCasas}</strong><br/>`);