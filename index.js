
import express, { response } from 'express';
import bodyParser from 'body-parser';
import moment from 'moment';

const app = express();

// importar mysql
//const mysql = require('./src/mysql-connect.js');
import { listarTickets, agregarTicket, listarTicketById, modificarTicketById, borrarTicketById, conectar } from './src/mysql-connect.js';

//export { agregarTicket } from './src/mysql-connect.js';
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

/*
*
*   Listar todos los Tickets
*
*/

app.get('/api/v1/tickets', function (req, res) {

    let ticket = req.body;


    res.status(201).send(
        listarTickets()
    );

});

/*
*
*   Crear Ticket
*
*/

app.post('/api/v1/tickets', function (req, res) {

    let ticket = req.body;


    res.status(201).send(
        agregarTicket(ticket.nroTicket, ticket.fechaTicket, ticket.descripcionTicker, ticket.responsableTicket, ticket.codCliente)
    );

});

/*
*
*   Listar Ticket por Id
*
*/

app.get('/api/v1/tickets/:idTicket', function (req, res) {


    console.log (listarTicketById(req.params.idTicket) + "hola")      
    
});


/*
*
*   Modificar Ticket por ID
*
*/


app.put('/api/v1/tickets/:idTicket', function (req, res) {

    let ticket = req.body;


    res.status(201).send(
        modificarTicketById(req.params.idTicket, ticket.fechaTicket, ticket.descripcionTicker, ticket.responsableTicket, ticket.codCliente, ticket.codEstado)
    );
});


/*
*
*   Borrar Ticket por ID
*
*/

app.delete('/api/v1/tickets/:idTicket', function (req, res) {

    conectar();
    res.status(201).send(
        borrarTicketById(req.params.idTicket)
    );
});