const { getCityFromZipcode, getStateFromZipcode } = require('utils-playground');


//utilzando then e catch
getCityFromZipcode('54727310').then(cidade => {
    console.log(cidade);
    getStateFromZipcode('54727310').then(estado => {
        console.log(estado);
    })
}).catch(err => {
    console.log(err);
})

//padrao function sem nome
(async function(){
    const cidade = await getCityFromZipcode('54727310');

    console.log(cidade);

    const estado = await getStateFromZipcode('54727310');

    console.log(estado);
})();

//padrao normal
async function teste(a){
    return 
}

//arrow function
const teste = async () => {

}

console.log(teste());
