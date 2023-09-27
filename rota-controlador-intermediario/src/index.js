const express = require('express'); 

const app = express();

app.get('/', (req, res) => {
    console.log(req)
    res.send("Página inicial!");
});

app.listen(3000, () => {
    console.log("O servidor está rodando no link http://localhost:3000");
})