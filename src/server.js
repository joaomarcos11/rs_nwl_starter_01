const express = require('express');
const server = express();

const PORT = 3333;

// configurando pasta publica
server.use(express.static('public'));

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
  return res.render('create-point.html');
});

server.get('/search', (req, res) => {
  return res.render('search-results.html');
});

server.listen(PORT, () => console.log(`Servidor iniciado na porta ${PORT}`));
