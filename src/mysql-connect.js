import mysql from 'mysql';

//crear la conexion
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'nicolas',
    password: 'mq7RNZlqbG85',
    database: 'appTickets'
});


const conectar = function() {
    connection.connect(err => {
        if(err) throw err
        console.log('Conectado')
    })
};


const agregarTicket = function(nroTicket,codCliente,fechaTicket,responsableTicket,descripcionTicker){


    let cadenaSql = "INSERT INTO `TICKET`(`nroTicket`, `fechaTicket`, `descripcionTicket`, `responsableTicket`, `codCliente`, `codEstado`) VALUES (" + nroTicket + ",'" + fechaTicket + "','" + descripcionTicker + "','" + descripcionTicker + "'," + codCliente + ",'abierto')"
    connection.query(cadenaSql, function(err, result, fields){
        if (err) throw err
        console.log(result);
    });
}


export {conectar};
export {agregarTicket};