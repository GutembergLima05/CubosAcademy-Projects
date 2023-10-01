const express = require('express');
const fs = require('fs/promises');

const app = express();

app.use(express.json());

app.get('/', async (req, res) => {
    await fs.writeFile('./src/a.txt', "Olá");
    res.json('ok');
});

app.post('/', async (req, res) => {
    const { nome, idade } = req.body

    try{
        const LerArquivo = await fs.readFile('./src/users.json');

        const arquivoString = JSON.parse(LerArquivo)
    
        arquivoString.push({ nome, idade })
    
        const arquivoJson = JSON.stringify(arquivoString);
        
        await fs.writeFile('./src/users.json', arquivoJson);
    
        return res.json('Pessoas cadastrada com sucesso');

    } catch(errr) {
        return res.json(`Deu o erro: ${errr.message}`)
    } 
    finally {
        console.log('Isso sempre será executado!');
    }
});

app.listen(3000, () => {
    console.log("Rodando em http://localhost:3000");
})