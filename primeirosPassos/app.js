const express = require('express');
const app = express();
const porta = 3333;

app.get('/', (req, res) => {
    res.send("Salve opa");
});

app.listen(porta, () => {
    console.log(`Seu server iniciou na porta http://localhost:${porta}`)
})