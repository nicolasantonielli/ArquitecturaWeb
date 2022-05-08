
// importar mysql

var mysql      = require('mysql');

//crear la conexion
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'nicolas',
    password: 'mq7RNZlqbG85',
    database: 'appTickets'
});

//connection.connect();

//connection.query('SELECT 1 + 1 AS solution', function(err, rows, fields) {
//  if (err) throw err;
//  console.log('The solution is: ', rows[0].solution);
//});
//connection.end();

connection.connect();

connection.query("INSERT INTO `CLIENTE`(`cuitCliente`, `nombreCliente`, `direccionCliente`) VALUES ('2028877082','nicolasA','pacheco de melo 2432');", function(err, rows, fields) {
  if (err) throw err;
  console.log('The solution is: ', rows[0].solution);
});
connection.end();