const boom= require('@hapi/boom');
const joi = require('@hapi/joi');

const validate = (data, schema) =>{
    if (!schema.isJoi) {
        schema = joi.object({ ...schema });
        console.log(data);
      }
      

    const { error } = schema.validate(data);
    return error;
}

const validationHandler = (schema, check = 'body') => {
    return function (req, res, next) {
        const error = validate(req[check], schema);

        error ? next(boom.badRequest(error)) : next();
    };
}

module.exports = validationHandler;