const fs = require('fs/promises');

console.log('antes de ler');

//metódo async
const a = fs.readFile('a.txt')
a.then((data)=>{
    console.log(data.toString());
}).catch((err) => {
    console.log(err)
});


//utilizando async e await explicito
(async function(){
    const a = await fs.readFile('a.txt');
    console.log(a.toString());
})();

console.log('depois de ler');