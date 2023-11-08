const elementos = [
    {tag: 'p', texto: 'Frase 1'},
    {tag: 'div', texto: 'Frase 2'},
    {tag: 'footer', texto: 'Frase 3'},
    {tag: 'section', texto: 'Frase 4'},

];
for (let i = 1; i <= 4; i++){
    const [{texto}] = elementos;
    const numeroFrase = i
    document.write(texto + i);
}


