/**
 * Servicio de Capa de Datos
 * Dedicado a Usuario
 */
const MongoLib = require('../lib/mongo');
const bcrypt = require('bcrypt');

class UsersService {

    constructor( ){
        this.collection = 'users';
        this.mongoDB = new MongoLib();
    }

    async getUser({ email }){
        const [user] = await this.mongoDB.getAll(this.collection, {email});
        return user;
    }

    async createUser({ user }) {
        const { name, email, password } = user;

        //Comprobar si existe usuario
        const queriedUser  = await this.getUser({ email: email });

        if (!queriedUser) {
            const hashedPassword = await bcrypt.hashSync(password, 10);
            const createUserId = await this.mongoDB.create(this.collection, {
                name,
                email,
                password: hashedPassword
            });
            return createUserId;
        } else throw 'User already exist, dummy!';

        
    }

}

module.exports = UsersService;