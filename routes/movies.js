const express = require('express');
const MoviesService = require('../services/movies')

// o tambien function moviesApi(app) {
 let moviesApi = (app) => {
    const router = express.Router();
    app.use("/api/movies", router);

    const moviesService = new MoviesService();

    /**
     * Lista por defecto todas la listas
     */
    router.get("/", async function(req, res, next){
        // cacheResponse(res, FIVE_MINUTES_IN_SECONDS);

        const { tags } = req.query;

        try {
            const movies = await moviesService.getMovies({ tags });
            res.status(200).json({
                data: movies,
                message: 'movies listed',
            })
        } catch(err){
            next(err);
        }
    });

    /**
     * Muestra una pelicula en especifico
     */
    router.get("/:movieId", async function(req, res, next){
        // cacheResponse(res, SIXTY_MINUTES_IN_SECONDS);
        const { movieId } = req.params;

        try {
            const movie = await moviesService.getMovie({ movieId });
            res.status(200).json({
                data: movie,
                message: 'movie retrieved',
            })
        } catch(err){
            next(err);
        }
    });

    /**
     * Crea nuevo registro de película
     */
    router.post("/",  async function(req, res, next){
        const { body: movie } = req;

        try {
            const createdMovieId = await moviesService.createMovie({ movie });
            res.status(201).json({
                data: createdMovieId,
                message: 'movies created',
            })
        } catch(err){
            next(err);
        }
    });

    /**
     * Actualiza registro de pelicula
     */
    router.put("/:movieId",  async function(req, res, next){
        const { movieId } = req.params;
        const { body: movie } = req;

        try {
            const updateMovieId = await moviesService.updatedMovie({ movieId, movie });
            res.status(200).json({
                data: updateMovieId,
                message: 'movie updated',
            })
        } catch(err){
            next(err);
        }
    });

    /**
     * Actualiza parcialmente registro de pelicula
     */
     router.patch("/:movieId",  async function(req, res, next){
        const { movieId } = req.params;
        const { body: movie } = req;

        try {
            const updateMovieId = await moviesService.partialUpdatedMovie({ movieId, movie });
            res.status(200).json({
                data: updateMovieId,
                message: 'movie updated',
            })
        } catch(err){
            next(err);
        }
    });

    /**
     * Eliminar registro de pelicula
     */
    router.delete("/:movieId",  async function(req, res, next){
        const { movieId } = req.params;

        console.log('movieID: ', movieId);
        try {
            const deletedMovieId = await moviesService.deleteMovie({ movieId });
            res.status(200).json({
                data: deletedMovieId || '0',
                message: 'movie deleted',
            })
        } catch(err){
            next(err);
        }
    });

};

module.exports = moviesApi;