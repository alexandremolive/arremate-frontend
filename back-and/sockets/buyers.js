const Language = require('../models/Language');

module.exports = (io) => {
  io.on('connection', (socket) => {
    // console.log(`Cliente ${socket.id} acabou de entrar`);

    socket.on('increaseVotes', async ({ id }) => {
      await Language.increaseVotes(id);
      const language = await Language.getById(id);
      io.emit('refreshCurrentVotes', language);
    })
  });  
} 