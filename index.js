const express = require('express');
const bodyParser = require('body-parser');
const moment = require('moment');
const clientsService = require('./services/tecnicos');
const mysql = require('./src/mysql-connect.js');

const app = express();

// start server

app.listen(process.env.PORT || 8000, function () {

    console.log('API andando con express...');
});


// configuracion de pug

app.set('views', './vistas')
app.set('view engine', 'pug')


// Cinfiguracion de archivos estaticos
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


// get home

app.get('/', async (req, res) => {

    //let clients = await clientsService.getAll();

    //let list = [];

    // clients.forEach((c) => {

    //   list.push(`<li>${c.nombre} con id: ${c.id}</li>`);

    // });

    res.send(
        `<html>
            <head>
                <title>Aplicacion Arquitectura WEB</title>
            </head>
            <body>
                <ul>
                    <p>HOLA!!!123</p>
                </ul>            
           </body>
        </html>`
    );
});

app.get('/maria', async (req, res) => {

    //let clients = await clientsService.getAll();

    //let list = [];

    // clients.forEach((c) => {

    //   list.push(`<li>${c.nombre} con id: ${c.id}</li>`);

    // });

    res.send(
        `<html>
            <head>
                <title>Aplicacion Arquitectura WEB</title>
            </head>
            <body>
                <ul>
                    <p>HOLA MARIA</p>
                </ul>            
           </body>
        </html>`
    );
});


// add new client - Content Type: json

app.post('/api/v1/tickets', (req, res) => {




//connection.connect();
//
//connection.query("INSERT INTO `CLIENTE`(`cuitCliente`, `nombreCliente`, `direccionCliente`) VALUES ('[value-1]','[value-2]','[value-3]')", function(err, rows, fields) {
//if (err) throw err;
//console.log('The solution is: ', rows[0].solution);
//});
//connection.end();

    let ticket = req.body;
    

    res.status(201).send(req.body);
    console.log(ticket.cuitCliente);
    console.log(ticket.nombreCliente);
    console.log(ticket.direccionCliente);

});


//  
//app.put('/user', function (req, res) {
//    res.send('Got a PUT request at /user');
//  });
  
//  app.delete('/user', function (req, res) {
//    res.send('Got a DELETE request at /user');
//  });