const express = require("express");

const server = express()
const PORT = process.env.PORT || 3000

server.get("/", (req, res)=>{
    res.status(200).json({message: "API UP!"})
});

server.listen(PORT, ()=>{
    console.log(`Server is listening at: ${PORT}`)
});

//Route: Greetings portion
server.get('/greeting/:name', (req, res) => {

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

    res.status(200).json ({message:randomizeSaludos})
});

//Route: Tip Calculator 
server.get('/tip/:total/:tipPercentage', (req, res) => {

    const total = parseFloat(req.params.total);

    const tipPercentage = parseFloat(req.params.tipPercentage);

    const tip = (total * (tipPercentage/100)).toFixed(2);

    res.status(200).json({message: `Please tip $${tip}`})
})

//Route: Magic 8 Ball
server.get('/magic/:question', (req, res) => {


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

    console.log(preguntas, randomizeRespuestas);

    res.json({message:`
    <h1>Question: ${preguntas}</h1>
    <h1>Response: ${randomizeRespuestas}</h1>
    `});
});


