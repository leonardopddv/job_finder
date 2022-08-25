const bodyParser = require('body-parser');
const express    = require('express');
const app        = express();
const db         = require('./db/connection');

const PORT    = 3000;

app.listen(PORT, function() {
    console.log(`O express esta rodando na porta ${PORT}`)
});

// body parser
app.use(bodyParser.urlencoded({extended: false}));


//db connections
db
    .authenticate()
    .then(() => {
        console.log("Conectou ao Banco com Sucesso.")
    })
    .catch(err =>{
        console.log("Ocorreu um erro ao conectar o Banco de Dados.", err)
    });

// routes
app.get('/', (req, res)=>{
    res.send("Esta é a Home do Site!")
});

// jobs routes
app.use('/jobs', require('./routes/jobs'));



