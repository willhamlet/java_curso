/*
Strings - funções 

-> [número do índice] colchetes para procurar algum índice da string, começando por 0 

*/

let string = "Texto alguma coisa"

console.log(string.charAt(5)); //CharAt - Acha algum índice 
console.log(string.concat('Alguma coisa')); // -> faz a mesma coisa do + (não usar)
console.log(string.indexOf('Texto')); //mostra em qual índice começa qualquer coisa na string 
console.log(string.indexOf('o', 3)); //da pra mostrar também em um índice determinado 
console.log(string.lastIndexOf('t')); //mostra de trás pra frente 
console.log(string.match(/[a-z]/g)); //expressão regular, precisa de uma aula mais avançada
console.log(string.search('x')); //acha algo dentro da string 
console.log(string.replace('texto', 'muito')); //muda alguma coisa na string por outra coisa que colocar

let string2 = 'O rato roeu a roupa do rei de roma';

console.log(string2.replace(/r/g), '@'); //muda alguma parte da string por outra, com g muda todas
console.log(string2.length); //mostra o tamanho da string
console.log(string2.slice(1, 6)); //retira alguma parte específica da string 
console.log(string2.split('r')); //retira alguma parte da string
console.log(string2.toLocaleUpperCase()); //tudo maiúsculo 
console.log(string2.toLocaleLowerCase()); //tudo minúsculo 
