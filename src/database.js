const mongoose = require('mongoose');

mongoose.connect('mongodb://mongo/mydatabase',{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
    .then(db=>console.log('database conectado',db.connection.host))
    .catch(error=>console.log(error))