const express = require("express");

const { filtrarProfessores, encontrarProfessor } = require('./controladores/professores');

const app = express();

const primeiroIntermediario = (req,res, next) =>{
  console.log('passei no primeiro intermediario');
  next();
};

const segundoIntermediario = (req,res, next) =>{
  console.log('passei no segundo intermediario');
  next();
};

const intermediarioDaRota = (req,res, next) =>{
  console.log('passei no intermediario da rota');
  next();
};

// app.use(primeiroIntermediario);
// app.use(segundoIntermediario);

// localhost:3000/professores
app.get("/professores", intermediarioDaRota, filtrarProfessores);

// localhost:3000/professores/id
app.get("/professores/:id", encontrarProfessor);

app.listen(3000, () => {
  console.log("O servidor está rodando no link http://localhost:3000");
});
