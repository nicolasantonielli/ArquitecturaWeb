
import express from 'express';
import bodyParser from 'body-parser';
import moment from 'moment';

const app = express();

// importar mysql
//const mysql = require('./src/mysql-connect.js');
import { agregarTicket, conectar } from './src/mysql-connect.js';
export { agregarTicket } from './src/mysql-connect.js';
// start server

app.listen(process.env.PORT || 8000, function () {

    console.log('API funcionando con express...');
});


// Configuracion de pug

app.set('views', './vistas')
app.set('view engine', 'pug')


// Configuracion de archivos estaticos
app.use(express.static('./vistas'))
app.use(express.static('./src'))
app.use(express.static('./css'))


// parse body as json

app.use(bodyParser.json());

// log todos los requests
app.use((req, res, next) => {

    console.log(`${req.method}: ${req.path} - ${moment().format(moment.HTML5_FMT.DATETIME_LOCAL_MS)}`);
    next();
});


// TICKETS

// Agregar Tickets

app.post('/api/v1/tickets', function (req, res) {

    let ticket = req.body;

    conectar();
    res.status(201).send(
        agregarTicket(ticket.nroTicket, ticket.codCliente, ticket.fechaTicket, ticket.responsableTicket, ticket.descripcionTicker)
        );

});


app.put('/api/v1/tickets/', function (req, res) {
    res.send('Got a PUT request at /user');
});

app.delete('/api/v1/tickets/:idTicket', function (req, res) {

    conectar();
    res.status(201).send(
        borrarTicket(req.params.idTicket)
        );
});