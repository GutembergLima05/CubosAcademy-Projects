const { fomart, format } = require('date-fns');


const ontem = new Date(2002, 5, 30, 8);
const ontem2 = new Date(2002, 5, 30, 8);


//timestamp
console.log(+ontem === +ontem2);

//getters e setters
const hoje = new Date();
console.log(hoje.getFullYear());

//format datas
const agora = new Date();

agora.toLocaleString();
console.log(agora);

agora.toLocaleString("pt-BR");
console.log(agora);

agora.toLocaleString(undefined, {year: "numeric", month: "long", day: "numeric"});
console.log(agora);

//using date-fns 

//format
const dateFormat = new Date(2023,9,3);

console.log(format(dateFormat, "dd/MMMM/yyyy"));