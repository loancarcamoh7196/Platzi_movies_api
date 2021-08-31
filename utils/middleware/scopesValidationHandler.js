const boom = require('@hapi/boom');

function scopesValidationHandler(allowedScopes) {
    return (req, res, next) =>{
        if (!req.user || (req.user && !req.user.scopes)) {
            // console.log('Missing scopes');
            next(boom.unauthorized('Missing scopes'));
        }

        // console.log("Scopes Permitido:", allowedScopes);
        // console.log("Scope de Usuario: ", req.user.scopes)

        // Mapeo el arreglo de scopes pasados a la ruta y verifico si cada uno de esos elementos se encuentra definido en los scopes del usuario. El resultado va a ser un nuevo arreglo de elementos true y/o false
        const permisions = allowedScopes.map(scope => req.user.scopes.includes(scope) );
        // console.log("Permisos concedido: ", permisions);    

        //verifico que no haya elemetos false en el arreglo de permisos (es decir, todos tienen que ser true para pasar al siguiente middleware, con uno que tenga false, significa que todos los permisos no se cumplen y por tanto se le niega el acceso)
        //   const hasAccess = !permisions.includes(false);

        
        const hasAccess = allowedScopes
        .map(allowedScope => req.user.scopes.includes(allowedScope))
        .find(allowed => Boolean(allowed));

        // console.log('Has Access?: ', hasAccess);

        if (hasAccess) {
            // console.log('OK ;)')
            next();
        }else {
            return next(boom.unauthorized('Insufficient scopes'));
        }
    }
}

module.exports = scopesValidationHandler;