const express = require('express');
const bodyParser = require('body-parser');
const moment = require('moment');
const clientsService = require('./services/tecnicos');

const app = express();

// parse body as json

app.use(bodyParser.json());

// all requests

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






// start server

app.listen(process.env.PORT || 8000, function () {

    console.log('API andando con express...');

});
