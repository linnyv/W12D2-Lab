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


    const respuestas = ["It is certain", 
    "It is decidedly so", 
    "Without a doubt", 
    "Yes definitely",
    "You may rely on it", 
    "As I see it yes", 
    "Most likely", 
    "Outlook good",
    "Yes", 
    "Signs point to yes", 
    "Reply hazy try again", 
    "Ask again later",
    "Better not tell you now", 
    "Cannot predict now", 
    "Concentrate and ask again",
    "Don't count on it", 
    "My reply is no", 
    "My sources say no",
    "Outlook not so good", 
    "Very doubtful"];

    const randomizeRespuestas = respuestas[Math.floor(Math.random() * respuestas.length)];


    res.send (`<h1>Question: ${preguntas}</h1>
            <h1>Response: ${randomizeRespuestas}</h1>`);
});

//Server on
const port = 3000;
app.listen(port, () => {
    console.log(`Server is up and running on http://localhost:${port}`);
});
