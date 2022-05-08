
import express from 'express';
import bodyParser from 'body-parser';
import moment from 'moment';

const app = express();

// importar mysql
//const mysql = require('./src/mysql-connect.js');
import {conectar} from './src/mysql-connect.js';

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






// Crear Cliente

app.post('/api/v1/cliente', (req, res) => {

    let cliente = req.body;
   
    conectar();
    
//    conectar.query("INSERT INTO `CLIENTE`(`cuitCliente`, `nombreCliente`, `direccionCliente`) VALUES ('" + cliente.cuitCliente + "','" + cliente.nombreCliente + "','" + cliente.direccionCliente + "')", function(err, rows, fields) {
//       if (err) throw err;
//        res.status(201).send("Creado Correctamente");
//        console.log("Creado Correctamente");
//        });
    
});


//  
//app.put('/user', function (req, res) {
//    res.send('Got a PUT request at /user');
//  });
  
//  app.delete('/user', function (req, res) {
//    res.send('Got a DELETE request at /user');
//  });