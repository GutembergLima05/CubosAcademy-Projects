const express = require('express');

const app = express();

const users = [
    { id: 8, name: 'joao', idade: 23 },
    { id: 4, name: 'maria', idade: 28 },
    { id: 1, name: 'rodrigo', idade: 13 },
    { id: 2, name: 'ana', idade: 19 },
    { id: 15, name: 'carla', idade: 54 }
]; 

app.get('/home', (req, res) => {
    res.send("Meu primeiro servidor com express");
});

app.get('/', (req, res) => {
    res.send("Rota principal");
});

app.get('/array', (req, res) => {
    array = [1,2,3,4,5,6];
    res.send(array);
});

app.get('/users', (req, res) => {
    res.send(users);
});

app.listen(3000, () => {
    console.log("Servidor inicializado na porta 3000");
})