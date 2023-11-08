
function zeroAEsquerda(num){
  return num >= 10 ? num : `0${num}`
}
function geradia(diaN){
    const dia = zeroAEsquerda(diaN.getDay())
    return `${dia} de`;
    
}

function dataBrasil2(data){
    
    const ano = zeroAEsquerda (data.getFullYear());
    const hora = zeroAEsquerda (data.getHours());
    const minutos = zeroAEsquerda (data.getMinutes());
    const segundos = zeroAEsquerda (data.getSeconds());
    
    
    return `de ${ano}</br></br> ${hora}:${minutos}:${segundos}`;
}


const dataDia = new Date();
let mes = dataDia.getMonth();
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
    mes = 'Outubro';
} else if(mes === 10){
    mes = 'Novembro';
} else if(mes === 11){
    mes = 'Dezembro';
}

let diaSemana = dataDia.getDay();

if (diaSemana === 0){
    diaSemana = 'Domingo';
} else if (diaSemana === 1){
    diaSemana = 'Segunda-Feira';
} else if (diaSemana === 2){
    diaSemana = 'Terça-Feira';
} else if (diaSemana === 3){
    diaSemana = 'Quarta-Feira';
} else if (diaSemana === 4){
    diaSemana = 'Quinta-Feira';
} else if (diaSemana === 5){
    diaSemana = 'Sexta-Feira';
} else if (diaSemana === 6){
    diaSemana = 'Sábado-Feira';
}

const datafinal = new Date();

const dataGeral = `${diaSemana}, ` + geradia(datafinal) + ` ${mes} ` + dataBrasil2(datafinal);

document.write(`<h1>${dataGeral.toString()}</h1>`);
