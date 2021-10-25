const products = require('../products.js');

module.exports = (io) => {
  io.on('connection', (socket) => {
    // console.log(`Cliente ${socket.id} acabou de entrar`);

    socket.on('getProducts',  () => {
      
      io.emit('sendProducts', products);
    })
  });  
} 