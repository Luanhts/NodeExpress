const express = require('express');
const app = express();
const porta = 3000;


app.get('/', (req, res) => {
    res.send("BEm vindo a calculadora: ");
})

app.get('/add', (req, res) => {
    req.params;
    res.send("BEm vindo a calculadora: ");
})

app.get('/sub', (req, res) => {
    req.params;
    res.send("BEm vindo a calculadora: ");
})

app.listen(porta, () => {
    console.log(`Seu servidor iniciou em http://localhost:${porta}`);
})
