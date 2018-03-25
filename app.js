const express = require('express');
const chalk = require('chalk');
const debug = require('debug')('app');
const morgan = require('morgan');
const path = require('path');

const port = process.env.PORT || 3000;

const app = express();

app.use(morgan('tiny'));
app.use(express.static(path.join(__dirname, '/public/')));
app.use('/css', express.static(path.join(__dirname, '/node_modules/bootstrap/dist/css')));
app.use('/js', express.static(path.join(__dirname, '/node_modules/bootstrap/dist/js')));
app.use('/js', express.static(path.join(__dirname, '/node_modules/jquery/dist')));

app.set('views', './src/views');
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  // res.sendFile(path.join(__dirname, 'views/index.html'));
  res.render('index', {
    title: 'Egypt',
    sg1: ['Rosey', 'Kaley', 'Connor', 'Lily'],
    sg1Ranks: ['Colonel', 'Captain', 'Support', 'Doctor'],
    menuMain: ['Economy', 'Research', 'Military', 'History'],
    menuDropdown: ['dd1', 'dd2', 'dd3'],
  });
});

app.listen(port, () => {
  debug(`Hi Adam, listening on port ${chalk.green(port)}`);
});
