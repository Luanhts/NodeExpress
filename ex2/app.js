const express = require('express');
const app = express();
const funcs = require('./controllers/operacoes');
const porta = 3000;


app.get('/', (req, res) => {
    res.send("BEm vindo a calculadora: ");
})

app.get('/add/:num1/:num2', (req, res) => {
    req.params;
    res.send(`O resultado da soma é: `, funcs(params.num1, params.num2));
})

/*
app.use(express.json())

// app.get('/calculadora/:n1/:n2', (req, res) => {
//     const n1 = parseFloat(req.params.n1);
//     const n2 = parseFloat(req.params.n2);
//     const soma = n1 + n2;
    
//     // res.send(req.params);
//     res.send(`A soma é: ${soma}`); 
//     // res.json(req.params)
// });

app.get('/calculadora/somar', (req, res) => {

    const result = op.soma(req.body)

    res.send(`A soma é: ${result}`);
})

*/

app.listen(porta, () => {
    console.log(`Seu servidor iniciou em http://localhost:${porta}`);
})


