const express = require('express');
const app = express();

const { config } = require('./config/index');

/**
 * Middleware
 */
const moviesApi  = require('./routes/movies.js'); // Igual es middleware
const userMoviesApi = require('./routes/userMovies');// APi lista de peliculas usuario
const { logErrors, wrapErrors, errorHandler } = require('./utils/middleware/errorHandlers.js')
const notFoundHandler = require('./utils/middleware/notFoundHandler.js');

app.use(express.json()); // Body Parser, conviertecontenido enviado al cliente en json

moviesApi(app);
userMoviesApi(app);

app.use(notFoundHandler);// Capturar error 404
//Siempre alfinal de las rutas delproyecto
//Middleware de Errores
app.use(logErrors);
app.use(wrapErrors);
app.use(errorHandler);

app.listen(config.port, function(){
    console.log(`Escuchando en ... http://localhost:${config.port}`)
});
