//config inicial
require('dotenv').config()
const express = require('express') //importa o express
const mongoose = require('mongoose') // importa mongoose
const app = express() //inicializa a aplicação

//forma de ler JSON / middlewares
app.use(
    express.urlencoded({
        extended: true,
    })
)

app.use(express.json()) //permite ler json

// rotas da API
const alunoRoutes = require('./routes/alunoRoutes.js')

app.use('/aluno', alunoRoutes)

//rota inicial / endpoint
app.get('/', (req, res) => {

    //mostrar req

    res.json({ message: 'Oi Express!' })

})

const DB_USER = process.env.DB_USER
const DB_PASSWORD = process.env.DB_PASSWORD

//entregar uma porta
mongoose
    .connect(
        `mongodb+srv://${DB_USER}:${DB_PASSWORD}@apicluster.bpllvly.mongodb.net/bancodaapi?retryWrites=true&w=majority`
    )
    .then(() =>{
        console.log("Conectamos ao MongoDB!")
        app.listen(3000)
    })

    .catch((err) => console.log(err))
