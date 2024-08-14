const express = require('express');
const app = express();
const porta = 3333;

app.get('/', (req, res) => {
    res.send("Salve, Bem vindo!!!");
});

//ver como passar mais de um parametro
app.get('/infos/:nome/:idade/:curso', (req, res) => {
    req.params;
    res.send(`${req.params.infos.nome} Seja be vindo, ${req.params.infos.idade} Anos, Seu Curso ${req.params.infos.curso} `)
});

app.listen(porta, () => {
    console.log(`Seu server iniciou na porta http://localhost:${porta}`)
})