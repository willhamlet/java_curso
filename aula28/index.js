/*
Objeto Date - Datas


const tresHoras = 60 * 60 * 3 * 1000;
const umDia = 60 * 60 * 24 * 1000;
const data = new Date(0 + tresHoras + umDia);

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

const data = new Date();
let mes = data.getMonth();
    if (mes === 0){
        mes = 'Janeiro';
    } else if(mes === 1){
        mes = 'Fevereiro';
    } else if(mes === 2){
        mes = 'Março';
    } else if(mes === 3){
        mes = 'Abril';
    } else if(mes === 4){
        mes = 'Maio';
    } else if(mes === 5){
        mes = 'Junho';
    } else if(mes === 6){
        mes = 'Julho';
    } else if(mes === 7){
        mes = 'Agosto';
    } else if(mes === 8){
        mes = 'Setembro';
    } else if(mes === 9){
        mes = 'Outubro'
    } else if(mes === 10){
        mes = 'Novembro';
    } else if(mes === 11){
        mes = 'Dezembro';
    }

console.log(mes);
*/
const data = new Date();
const data2 = data.getMonth();
console.log(data2);