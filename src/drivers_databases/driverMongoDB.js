const mongoose = require('mongoose');
const URI = 'mongodb://localhost:27017/mern-crud-test';

mongoose.connect(URI)
  .then(db => console.log('MongoDB =========> Conexión exitosa'))
  .catch(error => console.error(error));

module.exports = mongoose;