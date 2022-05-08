

import mysql from 'mysql';

//crear la conexion
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'nicolas',
    password: 'mq7RNZlqbG85',
    database: 'appTickets'
});


const conectar = () => {
    connection.connect(err => {
        if(err) throw err
        console.log('Conectado')
    })
}

const desconectar = () => {
    connection.end(err => {
        if(err) throw err
        console.log('Desconectado')
    })
}

export {conectar};
export {desconectar};

