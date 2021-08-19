const assert = require('assert');
const proxyquire = require('proxyquire');
const MoviesService = require('../services/movies.js');

const { moviesMock, MoviesServiceMock } = require('../utils/mocks/movies.js');
const testServer = require('../utils/testServer');

describe('routes - movies', function() {
    const route = proxyquire('../routes/movies', {
        '../services/movies': MoviesServiceMock
    });

    const request = testServer(route);// Test especifico para rutas /api/movies
    describe('GET /movies', function() {
        it('should respond with status 200', function(done){
            request.get('/api/movies').expect(200, done)
        });

        it('should respond with the list of movies', function(done) {
            request.get('/api/movies').end( (err, res) => {
              assert.deepStrictEqual(res.body, {
                data: moviesMock,
                message: 'movies listed'
              });
      
              done();
            });
        });

    });
})
