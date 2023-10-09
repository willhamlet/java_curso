/*
Objeto Date - Datas


const tresHoras = 60 * 60 * 3 * 1000;
const umDia = 60 * 60 * 24 * 1000;
const data = new Date(0 + tresHoras + umDia);
*/
function zeroAEsquerda(num){
    return num >= 10 ? num : `0${num}`;
}
function formataData(data){
   const dia = zeroAEsquerda(data.getDate());
   const mes = zeroAEsquerda(data.getMonth() + 1);
   const ano = zeroAEsquerda(data.getFullYear());
   const hora = zeroAEsquerda(data.getHours());
   const min = zeroAEsquerda(data.getMinutes());
   const seg = zeroAEsquerda(data.getSeconds());
   
   return  `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`;
}
const data = new Date();
const dataBrasil = formataData(data);
console.log(dataBrasil);