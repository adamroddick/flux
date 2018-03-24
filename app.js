var express = require('express');
var chalk = require('chalk');
var debug = require('debug')('app');

var app = express();

app.get('/', function(req, res) {
    res.send('Hello Adam');
});

app.listen(3000, function() {
    debug(`Hi Adam, listening on port ${chalk.green('3000')}`);
});