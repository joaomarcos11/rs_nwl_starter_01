const express = require('express');
const server = express();

// importando banco de dados
const db = require('./database/db');

const PORT = 3333;

// configurando pasta publica
server.use(express.static('public'));

// habilitar uso do req.body na aplicacao
server.use(express.urlencoded({ extended: true }));

// template engine
const nunjucks = require('nunjucks');
nunjucks.configure('src/views', {
  express: server,
  noCache: true,
});

server.get('/', (req, res) => {
  // res.sendFile(__dirname + '/views/index.html');
  return res.render('index.html', { title: 'Um título' });
});

server.get('/create-point', (req, res) => {
  // res.sendFile(__dirname + '/views/create-point.html');

  console.log(req.query);

  return res.render('create-point.html');
});

server.post('/savepoint', (req, res) => {
  console.log(req.body);

  //inserir dados no bd
  const query = `
    INSERT INTO places (
      name,
      image,
      address,
      address2,
      state,
      city,
      items
    ) VALUES (?,?,?,?,?,?,?);
  `;

  const { name, image, address, address2, state, city, items } = req.body;
  const values = [name, image, address, address2, state, city, items];

  function afterInsertData(err) {
    if (err) {
      console.log(err);
      return res.send('Erro no cadastro!');
    }

    console.log('Cadastrado com sucesso');
    console.log(this);

    return res.render('create-point.html', { saved: true });
  }

  db.run(query, values, afterInsertData);

  // return res.send('Ok');
});

server.get('/search', (req, res) => {
  const search = req.query.search;

  if (search == '') {
    // pesquisa vazia
    return res.render('search-results.html', { total: 0 });
  }

  // pegando dados do db
  db.all(`SELECT * FROM places WHERE city LIKE '%${search}%'`, function (
    err,
    rows
  ) {
    if (err) {
      return console.log(err);
    }

    console.log(rows);

    const total = rows.length;

    // pagina html com os dados do bd
    return res.render('search-results.html', { places: rows, total });
  });
});

server.listen(PORT, () => console.log(`Servidor iniciado na porta ${PORT}`));
