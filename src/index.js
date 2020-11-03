/*
    Example App - Replace this src folder with your intended application code
*/

const fs = require('fs');
const http = require('http');
const https = require('https');
const morgan = require('morgan');
const express = require('express');
const app = express();

app.use(morgan('combined'));
app.get('/status', (req, res) => res.send("OK"));
app.get('/', (req, res) => res.send("App now running"));

const httpServer = http.createServer(app);
const httpsServer = https.createServer({
    key: fs.readFileSync('ssl.key', 'utf8'),
    cert: fs.readFileSync('ssl.cert', 'utf8')
}, app);

const httpPort = process.env.HTTP_PORT || 80;
const httpsPort = process.env.HTTPS_PORT || 443

httpServer.listen(httpPort);
httpsServer.listen(httpsPort);

console.log(`Example app started on ports: [HTTP: ${httpPort}, HTTPS: ${httpsPort}]`)