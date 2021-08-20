const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root@localhost',
    password: '',
    database: 'gestor academico neil'
});
connection.connect((err) => {
    if (err) throw err;
    console.log('mysql =========> conexión')
});

module.exports = mysql;