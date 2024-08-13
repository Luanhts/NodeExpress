const express = require('express');
const app = express();
const porta = 3333;

app.get('/', (req, res) => {
    res.send("Salve opa");
});

app.get('/login', (req, res) => {
    res.send("login");
});

app.get('/menu/:infos', (req, res) => {
    req.params;
    res.send(`A informação foi ${req.params.infos}`)
    
    
    //res.send("SEU MENU");
});

app.listen(porta, () => {
    console.log(`Seu server iniciou na porta http://localhost:${porta}`)
})