let mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'stripe',
    waitForConnections: true
});

module.exports = pool;