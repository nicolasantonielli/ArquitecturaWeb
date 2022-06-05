
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


const listarTickets = function(){

    let cadenaSql = "SELECT * FROM `TICKET` "
    console.log(cadenaSql);
    connection.
    connection.query(cadenaSql, function(err, result, fields){
        if (err) throw err
        console.log("Correcto.");
//        res.status(201).send("Creado Correctamente");
    });
}

const agregarTicket = function(nroTicket,fechaTicket,descripcionTicker,responsableTicket,codCliente){

    let cadenaSql = "INSERT INTO `TICKET`(`nroTicket`, `fechaTicket`, `descripcionTicket`, `responsableTicket`, `codCliente`, `codEstado`) VALUES (" + nroTicket + ",'" + fechaTicket + "','" + descripcionTicker + "','" + responsableTicket + "'," + codCliente + ",'abierto');"
    console.log(cadenaSql);
    connection.
    connection.query(cadenaSql, function(err, result, fields){
        if (err) throw err
        console.log("Correcto.");
//        res.status(201).send("Creado Correctamente");
    });
}



const listarTicketById = function(nroTicket){

    let cadenaSql = "DELETE FROM `TICKET` WHERE `TICKET`.`nroTicket` =" + nroTicket + ";"
    console.log(cadenaSql);
    connection.query(cadenaSql, function(err, result, fields){
        if (err) throw err
        console.log("Correcto.");
    });
}

const modificarTicketById = function(nroTicket,fechaTicket,descripcionTicker,responsableTicket,codCliente,codEstado){

    let cadenaSql = "UPDATE `TICKET` SET `fechaTicket` = '" + fechaTicket + "', `descripcionTicket` = '" + descripcionTicker + "', `responsableTicket` = '" + responsableTicket + "', `codCliente` = '" + codCliente + "', `codEstado` = '" + codEstado + "' WHERE `TICKET`.`nroTicket` = " + nroTicket + ";"
     
    console.log(cadenaSql);
    connection.query(cadenaSql, function(err, result, fields){
        if (err) throw err
        console.log("Correcto.");
    });
}


const borrarTicketById = function(nroTicket){

    let cadenaSql = "DELETE FROM `TICKET` WHERE `TICKET`.`nroTicket` =" + nroTicket + ";"
    console.log(cadenaSql);
    connection.query(cadenaSql, function(err, result, fields){
        if (err) throw err
        console.log("Correcto.");
    });
}


export {conectar};

export {listarTickets};
export {agregarTicket};
export {listarTicketById};
export {modificarTicketById};
export {borrarTicketById};