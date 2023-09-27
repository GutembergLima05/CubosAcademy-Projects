const professores = require('../bancoDeDados')

const filtrarProfessores = (req, res) => {

    const { stack } = req.query;
    let resultado = professores;

    console.log('cheguei no controlador do professor')

    if(stack){
        resultado = professores.filter((prof) => {
            return prof.stack === stack
        });
    }

    res.send(resultado);
};

const encontrarProfessor = (req, res) => {
    const professorEncontrado = professores.find((professores) => {
        return professores.id === Number(req.params.id)
    })
    res.send(professorEncontrado);
  };

  module.exports = {
    encontrarProfessor,filtrarProfessores
  }