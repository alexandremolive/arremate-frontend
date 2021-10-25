const express = require('express');
const cors = require('cors');
const app = express();
const http = require('http').createServer(app);

const io = require('socket.io')(http, {
  cors: {
    origin: 'http://localhost:3000', // url aceita pelo cors
    methods: ['GET', 'POST'], // Métodos aceitos pela url
  }});

  let corsOptions = {
    origin: 'http://localhost:3000',
  };

  const getProductsSocket = require('./sockets/buyers');
  getProductsSocket(io);
  
  app.use(cors(corsOptions));


http.listen(3000, () => {
  console.log('Servidor ouvindo na porta 3000');
});