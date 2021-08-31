/**
 * Capa de Servicio - Datos
 * Dedicado a userMovies
 */
const MongoLib = require('../lib/mongo');

class UserMoviesService {

    constructor(){
        this.collection = 'user-movies';
        this.mongoDB = new MongoLib();
    }

    async getUserMovies({userId}){
        const query = userId && {userId};

        const userMovies = await this.mongoDB.get(this.collection, query);
        return userMovies || [];
    }

    async createUserMovie({userMovie}){
        const createUserMovieId = await this.mongoDB.create(this.collection, userMovie);

        return createUserMovieId;
    }

    async deleteUserMovie({userMovieId}){
        const deletedUserMovieId = await this.mongoDB.delete(this.collection, userMovieId);
        return deletedUserMovieId;
    }

}

module.exports = UserMoviesService;