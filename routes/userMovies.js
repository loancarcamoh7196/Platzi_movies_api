/**
 * 
 */
const express = require('express');// Para crear API

const UserMoviesService = require('../services/userMovies');
const validationHandler = require('../utils/middleware/validationHandler');

const { movieIdSchema } = require('../utils/schemas/movies');
const { userIdSchema } = require('../utils/schemas/users');
const { createUserMovieSchema } = require('../utils/schemas/userMovies');

function userMovieApi(app){
    const router = express.Router();

    app.use('/api/user-movies', router);
    const userMoviesService =  new UserMoviesService();

    /**
     * Ruta de Lista de las peliculas de un Usuario
     */
    router.get('/', validationHandler({ userId: userIdSchema }, 'query'),

        async (req, res, next) => {
            const { userId } =  req.query;

            try {
                const userMovies = await userMoviesService.getUserMovies({ userId });

                res.status(200).json({
                    data: userMovies,
                    message: 'user movies listed'
                });
            } catch (error) {
                next(error);
            }
        }
    );

    /**
     * Ruta para Agregar una pelicula en la lista de Usuario
     */
    router.post('/',validationHandler(createUserMovieSchema), 
        async (req, res, next)=> {
            const { body: userMovie } = req;

            try {
                const createdUserMovieId = await userMoviesService.createUserMovie({
                    userMovie
                });
                res.status(200).json({
                    data: createdUserMovieId,
                    message: 'Movie added in your list'
                });
            } catch (error) {
                next(error);
            }
        }
    );

    /**
     * Ruta para eliminar una pelicual de la lista del usuario
     */
    router.delete('/', validationHandler({ userMovieId: movieIdSchema }, 'params'), 
        async (req, res, next) =>{
            const { userMovieId } = req.params;
            try {
                const deletedUserMovieId = await userMoviesService.delteUserMovie({ userMovieId });
                res.status(200).json({
                    data: deletedUserMovieId,
                    message: ' Movie deleted of your list'
                });
            } catch (error) {
                next(error);
            }
        }
    );
}

module.exports = userMovieApi;
