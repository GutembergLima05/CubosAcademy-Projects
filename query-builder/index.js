const express = require("express");
const knex = require("./conexao");

const app = express();

app.use(express.json());

app.get("/", async (req, res) => {
  // const agenda = await knex('agenda');
  // const agenda = await knex('agenda').debug();
  // const agenda = await knex.raw('select * from agenda');
  // const agenda = await knex('agenda').where('id', 5).debug();
  // const agenda = await knex('agenda').where('id', '!=', 5).debug();
  // const agenda = await knex('agenda').select('id', 'nome').debug();
  // const agenda = await knex('agenda').where({ id: 5}).first().debug();
  // const agenda = await knex('agenda').where({ id: 5}).select('id', 'nome').first().debug();

  // const agenda = await knex('agenda').whereNull('email').debug();
  // const agenda = await knex('agenda').whereNotNull('email').debug();
  // const agenda = await knex('agenda').whereBetween('id', [5, 10]).debug();
  // const agenda = await knex('agenda').whereBetween('id', [5, 10]).orderBy('id', 'desc').debug();
  // const agenda = await knex('agenda').distinct('email', 'nome').debug();

  // select email, count(*) from agenda group by email
  // const agenda = await knex('agenda').select('email').groupBy('email').count().debug();
  // const agenda = await knex('agenda').limit(5).offset(2).debug();

  // const agenda = await knex('agenda').whereNull('email').count().debug();
  // const agenda = await knex('agenda').whereNull('email').debug();
  // const agenda = await knex('agenda').whereNull('email').sum('id').debug();
  // const agenda = await knex('agenda').whereNull('email').avg('id').debug();
  // const agenda = await knex('agenda').whereNull('email').min('id').debug();
  // const agenda = await knex('agenda').whereNull('email').max('id').debug();

  const gute = {
    nome: 'Gutemberg3 Lima',
    email: 'gute3@gmail.com',
    telefone: '(81) 98412-4241'
  }

  const lindemberg = {
    nome: 'Lindembergmberg2 Lima',
    email: 'Lindemberg2@gmail.com',
    telefone: '(81) 98412-4241'
  }

//   const agenda = await knex('agenda').insert(gute).returning(['id', 'nome']);
//   const agenda = await knex('agenda').insert([gute, lindemberg]).returning('*');

  return res.json(agenda);
});

app.put('/:id', async (req, res) => {
    const { nome, email, telefone } = req.body;
    const { id } = req.params;

    const agendaAtualizada = await knex('agenda').update({ nome, email, telefone }).where({ id }).returning('*');

    return res.json(agendaAtualizada);
})

app.delete('/:id', async (req, res) => {
    const { id } = req.params;
    
    const agendaExcluida = await knex('agenda').del().where('id', id).returning('*');

    return res.json(agendaExcluida);
})

app.post('/:id/anotacoes', async (req, res) => {
    const { id } = req.params;
    const { nota } = req.body;

    const anotacao = await knex('anotacoes')
        .insert({
            agenda_id: id,
            nota
        })
        .returning('*');
    return res.json(anotacao);
});

app.get('/anotacoes', async (req, res) => {
    // const anotacoes = await knex('anotacoes')
    //     .join('agenda', 'anotacoes.agenda_id', 'agenda.id')
    //     .select('anotacoes.*', 'agenda.nome');
    const anotacoes = await knex('anotacoes')
        .leftJoin('agenda', 'anotacoes.agenda_id', 'agenda.id')
        .select('anotacoes.*', 'agenda.nome');
    // const anotacoes = await knex('anotacoes')
    //     .rightJoin('agenda', 'anotacoes.agenda_id', 'agenda.id')
    //     .select('anotacoes.*', 'agenda.nome');
    return res.json(anotacoes);
});


app.listen(3000);
