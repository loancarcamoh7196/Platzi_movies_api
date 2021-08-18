const express = require('express');
const app = express();

const { config } = require('./config/index');

/**
 * Middleware
 */
const moviesApi  = require('./routes/movies.js'); // Igual es middleware
const { logErrors,errorHandler } = require('./utils/middleware/errorHandlers.js')

app.use(express.json()); // Body Parser, conviertecontenido enviado al cliente en json

moviesApi(app);

//Siempre alfinal de las rutas delproyecto
app.use(logErrors);
app.use(errorHandler);

app.listen(config.port, function(){
    console.log(`Escuchando en ... http://localhost:${config.port}`)
});
