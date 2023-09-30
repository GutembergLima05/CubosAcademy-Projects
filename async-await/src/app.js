const { getCityFromZipcode, getPackageDescriptionNpm } = require('utils-playground')

const express = require('express');
const app = express();


app.get('/', async (req, res) => {
    
    // usando await normal

    // const cidade = await getCityFromZipcode('54727310');
    // const cidade2 = await getCityFromZipcode('51727310');

    //usando await normal
    // res.send(`A cidade encontrada foi: ${cidade} e ${cidade2}`);

    //usando sem await e com  promise ALL
    const cidade =  getCityFromZipcode('51727310');
    const cidade2 =  getCityFromZipcode('51727310');

    //Utilizando promise all
    const promise = await Promise.all([cidade,cidade2])
    //destruturação de array
    const [res1, res2] = promise


    res.send(`A cidade encontrada foi: ${res1} e ${res2}`);
})

app.get('/pacote/:nomePacote', async (req,res) => {
    const { nomePacote } = req.params;

    const descricaoPacote = await getPackageDescriptionNpm(nomePacote);

    return res.send(descricaoPacote);
})

app.listen(3000, () => {
    console.log("O servidor está rodando http://localhost:3000");
});