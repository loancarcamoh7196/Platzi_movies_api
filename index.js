const express = require('express');
const app = express();

const { config } = require('./config/index');
/**
 * Middleware
 */
const moviesApi  = require('./routes/movies.js');

app.use(express.json()); // Body Parser, conviertecontenido enviado al cliente en json

moviesApi(app);


app.listen(config.port, function(){
    console.log(`Escuchando en ... http://localhost:${config.port}`)
});
