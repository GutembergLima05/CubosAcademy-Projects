const fs = require('fs');

console.log('Antes de ler');

//leitura de arquivos sincronos
// const a = fs.readFileSync('a.txt').toString();
// console.log(a);

fs.readFile('b.txt', (erro, data) => {
    if(erro) {
        console.log(erro);
    } else {
        console.log(data.toString());
    }
});

console.log('Depois de ler');