const express = require('express')
const {
	listarCarros,
	detalharCarro,
	cadastrarCarro,
	atualizarCarro,
	excluirCarro,
} = require('./controladores/carros')

const {
	cadastrarUsuario, loginUsuario, obterPerfil
} = require('./controladores/usuarios')

const verificarUsuarioLogado = require('./middlewares/authentication')

const rotas = express()

rotas.post('/usuario', cadastrarUsuario)
rotas.post('/login', loginUsuario)

rotas.use(verificarUsuarioLogado)

rotas.get('/perfil', obterPerfil)

rotas.get('/carro', listarCarros)
rotas.get('/carro/:id', detalharCarro)
rotas.post('/carro', cadastrarCarro)
rotas.put('/carro/:id', atualizarCarro)
rotas.delete('/carro/:id', excluirCarro)

module.exports = rotas
