const { Sequelize } = require('sequelize');
const { db } = require('./config')

host = db.host
port = db.port
username = db.username
password = db.password
database = db.database

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