const express = require('express');
const { moviesMock } = require('../utils/mocks/movies');//Agregar importación de Datos

// o tambien function moviesApi(app) {
 let moviesApi = (app) => {
    const router = express.Router();
    app.use("/api/movies", router);// Es extremadamente importante que se incluya / al principio de la ruta

    router.get("/", async function (req, res, next) {
        try{
            const movies = await Promise.resolve(moviesMock);
            res.status(200).json({
                data: movies,
                message: 'movies listed'
            })
        } catch(err) {
            
            
            next(err);
        }
    });

};
  

module.exports = moviesApi;