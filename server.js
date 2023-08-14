const express = require('express'); 
const app = express();

//Route: Greetings portion
app.get('/greeting/:name', (req, res) => {

    const nombre = req.params.name;

    const saludos = [
        `Hello, ${nombre}.`,
        `What's Up, ${nombre}!`,
        `It's do great to see you!`,
        `Que tal, ${nombre}`,
        `Buenos dias, ${nombre}`,
        `Buenas tardes, ${nombre}`
    ];
    
    const randomizeSaludos = saludos[Math.floor(Math.random() * saludos.length)];

    res.send (randomizeSaludos);
});

//Route: Tip Calculator 
app.get('/tip/:total/:tipPercentage', (req, res) => {

    const total = parseFloat(req.params.total);

    const tipPercentage = parseFloat(req.params.tipPercentage);

    const tip = (total * (tipPercentage/100)).toFixed(2);

    res.send(tip);
})

//Route: Magic 8 Ball
app.get('/magic/:question', (req, res) => {


    const preguntas = req.params.question;


    const respuestas = [
        `Maybe`,
        `No`,
        `Si`,
        `Yes`,
        `Tal Vez`,
        `Not sure`,
        `Definietly`,
        `Definietly not`,
        `Likely`,
        `Not Likely`,
        `Possible`,
        `Not Possible`,
        `Certainly`,
        `Ask later`,
        `Ask tomorrow`,
        `Ask in the future`,
    ];
    const randomizeRespuestas = saludos[Math.floor(Math.random() * respuestas.length)];


    res.send (`<h1>Question: ${preguntas}</h1>
            <h1>Response: ${randomizeRespuestas}</h1>`);
});
