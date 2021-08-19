const assert = require('assert');
const proxyquire = require('proxyquire');


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

    // describe('GET /api/movies/:id', function() {
    //     it('should respond with a movie', function(done) {
    //         request.get('/api/movies/60e61fbbe3942b102ac99497').expect(200, done)
    //     });

    // });
})
