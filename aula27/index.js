/*
Operação ternária
*/

const pontUser = 1000;
const lvlUser = pontUser >= 1000 ? 'Usuario VIP' : 'Usuário Normal';

const corUsuario = 'Pink';
const corPadrao = corUsuario || 'Preta';

console.log(lvlUser);