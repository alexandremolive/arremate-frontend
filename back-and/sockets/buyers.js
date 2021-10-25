const Language = require('../models/Language');

module.exports = (io) => {
  io.on('connection', (socket) => {
    // console.log(`Cliente ${socket.id} acabou de entrar`);

    socket.on('incrementValue', async ({ id }) => {
      await Language.increaseVotes(id);
      const language = await Language.getById(id);
      io.emit('refreshCurrentVotes', language);
    })
  });  
} 