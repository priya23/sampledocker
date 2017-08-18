'use strict';

const express = require('express');
var os = require('os');
// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
var h = os.hostname();
app.get('/', (req, res) => {
  res.send('Hello world priyanka\n'+h);

});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
