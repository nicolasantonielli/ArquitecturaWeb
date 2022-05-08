

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


const agregarTicket = function(nroTicket,codCliente,fechaTicket,descripcionTicker){

    let cadenaSql = "INSERT INTO `TICKET`(`nroTicket`, `fecha`, `descripcionTicket`, `responsableTicket`) VALUES (" + nroTicket + "," + codCliente + ",'" + fechaTicket + "','" + descripcionTicker + "')"
    connection.query(cadenaSql, function(err, result, fields){
        if (err) throw err
        console.log(result);
        res.status(201).send(result);
    });
}


export {conectar};
export {agregarTicket};