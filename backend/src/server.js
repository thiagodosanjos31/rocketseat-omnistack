const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const app = express();
const cors = require('cors');

mongoose.connect('mongodb+srv://thiagoa:thiagoa@omnistack-h82rc.mongodb.net/semana09?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
// GET, POST, PUT, DELETE

// req.query = acessar query params
// req.params = acessar route params (para edição, delete)
// req.body = acessar corpo da requisição (tanto para edição quanto para registro)
//para que o sistema entenda o formato json devemos incluir o código da linha abaixo
app.use(cors());
app.use(express.json());
app.use(routes);



app.listen(3333); //Porta que deve rodar a aplicação