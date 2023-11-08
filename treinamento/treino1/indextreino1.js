document.getElementById("enviar-nome").addEventListener("click", function(){
    const nameUser = String(document.getElementById("seu-nome").value); 
    if (nameUser === ''){
        alert('Digite alguma coisa!');
    }else{
        document.write(`Seu nome é <strong>${nameUser}</strong>`);
    }   
})

