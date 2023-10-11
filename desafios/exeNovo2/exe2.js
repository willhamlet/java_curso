document.getElementById("btn-desafio").addEventListener("click", function(){
    const nameUser = prompt("Qual o seu nome?");
    const ageUser = prompt(`Olá, ${nameUser}, quantos anos você tem?`);
    alert(`Acabei de conhecer ${nameUser}, que tem ${ageUser} de idade!`);
})