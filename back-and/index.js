const express = require('express');
const cors = require('cors');
const app = express();
const http = require('http').createServer(app);
let products = require('./products.js');

const io = require('socket.io')(http, {
  cors: {
    origin: 'http://localhost:3000', // url aceita pelo cors
    methods: ['GET', 'POST'], // Métodos aceitos pela url
  }});

let corsOptions = {
  origin: 'http://localhost:3000',
};


io.on('connection', (socket) => {
  // console.log(`Cliente ${socket.id} acabou de entrar`);
  socket.on('updateValue',  (id, lance) => {
    let productToUpdate = products.find((product) => product.id === id);
    products = products.find((product) => product.id !== id);
    productToUpdate.value = productToUpdate.value + lance;
    productToUpdate.push(productToUpdate)
    io.emit('sendProducts', products);
  })
});


const getProductsSocket = require('./sockets/buyers');
getProductsSocket(io);

app.use(cors(corsOptions));


http.listen(3000, () => {
  console.log('Servidor ouvindo na porta 3000');
});