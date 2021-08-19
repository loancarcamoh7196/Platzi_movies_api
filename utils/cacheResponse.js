/**
 * Cache 
 * Solo debe usarse en rutas donde se obtega info, no modificar
 */
const { config } = require('../config');

function cacheResponse(res, seconds) {
    if(!config.dev) {
        res.set('Cache-Control', `public, max-age=${seconds}`);
    }
}

module.exports = cacheResponse;