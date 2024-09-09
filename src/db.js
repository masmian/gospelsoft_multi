const { Sequelize } = require('sequelize');
const dotenv = require('dotenv')

dotenv.config()

console.log(process.env)

host = process.env.DB_HOST
port = process.env.DB_PORT
username = process.env.DB_USER
password = process.env.DB_PASSWD
database = process.env.DB_DATABASE

const sequelize = new Sequelize(database, username, password, {
    host: host,
    dialect: 'mysql'
  });

sequelize.sync({ force: false })
.then(() => {
    console.log('Database synchronized');
})
.catch((error) => {
    console.error('Failed to synchronize database:', error);
});

module.exports = sequelize