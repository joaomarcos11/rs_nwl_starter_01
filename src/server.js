const express = require('express');
const server = express();

const PORT = 3333;

// configurando pasta publica
server.use(express.static('public'));

server.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
});

server.get('/create-point', (req, res) => {
  res.sendFile(__dirname + '/views/create-point.html');
});

server.listen(PORT, () => console.log(`Servidor iniciado na porta ${PORT}`));
