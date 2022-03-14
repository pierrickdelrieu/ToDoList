/**
 * We've created a file called config.js, which contains all the config variables
 * such as the database crendentials and the database which we're using in this project
 */


/**
 * This file contains a module which we export, so we can manipulate it easily, as we do for other modules.
 * port : Our API is listening on port 8000, or in the environment variable port (for instance, the Heroku port as we host our project)
 * database : which database we use (for instance, ours is called todolistdb, we can see it in mysql workbench)
 * user and password : your credentials to log yourself in the database
 * options : we inform which type of database we use (mysql), which host do we use, and where is stored our database
 */
module.exports = {

    port: process.env.PORT || 8000,
    db: {
        database: process.env.DB_NAME || 'todolistdb',
        user: process.env.DB_USER || 'root', /* You have to enter your database username*/
        password: process.env.DB_PASS || '', /* You have to enter your database password */
        options: {
            //database type
            dialect: process.env.DIALECT || 'mysql',
            //database host
            host: process.env.HOST || 'localhost',
            //where the db is stored
            storage: './todolistdb.mysql'
        }
    },
    authentication: {
        jwtSecret: process.env.JWT_SECRET || 'secret'
    }
}