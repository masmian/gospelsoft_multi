const {config} = require('dotenv')

config()

module.exports = {
    db:{
        host : process.env.DB_HOST,
        port : process.env.DB_PORT,
        username : process.env.DB_USER,
        password : process.env.DB_PASSWD,
        database : process.env.DB_DATABASE,
    }
}