'use strict'

const http = require('http');
const debug = require('debug')('nodestore:server');
const express = require('express');

const app = express();
const port = normalizePort(process.env.PORT || '3000');
app.set('port', port);

const server = http.createServer(app);
const router = express.Router();

const route = router.get('/', (req, res, next) => {
    res.status(200).send({
        title: "Node Store API",
        version: "0.0.1"
    });
});
app.use('/', route);

server.listen(port);
console.log('API rodando na porta ' + port);

function normalizePort(value) {
    const port = parseInt(value, 10);

    if (isNaN(port)){
        return value;
    }

    if(port >=0){
        return port;
    }

    return false;
}