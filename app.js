const express = require('express');
const chalk = require('chalk');
const debug = require('debug')('app');
const morgan = require('morgan');
const path = require('path');

const port = process.env.PORT || 3000;

const app = express();

const xRouter = express.Router();

app.use(morgan('tiny'));
app.use(express.static(path.join(__dirname, '/public/')));
app.use('/css', express.static(path.join(__dirname, '/node_modules/bootstrap/dist/css')));
app.use('/js', express.static(path.join(__dirname, '/node_modules/bootstrap/dist/js')));
app.use('/js', express.static(path.join(__dirname, '/node_modules/jquery/dist')));

app.set('views', './src/views');
app.set('view engine', 'ejs');

xRouter.route('/')
  .get((req, res) => {
    res.send('Base tabs');
  });

xRouter.route('/economy')
  .get((req, res) => {
    res.send('Economy tab');
  });

app.use('/tab', xRouter);

app.get('/', (req, res) => {
  // res.sendFile(path.join(__dirname, 'views/index.html'));
  res.render('index', {
    title: 'Stargate Command',
    sg1: [
      { name: 'Rosey', rank: 'Colonel' },
      { name: 'Kaley', rank: 'Captain' },
      { name: 'Connor', rank: 'Support' },
      { name: 'Lily', rank: 'Doctor' },
    ],
    menuMain: [
      { label: 'Economy', link: '/tab/economy' },
      { label: 'Research', link: '/tab/research' },
      { label: 'Military', link: '/tab/military' },
      { label: 'Team', link: '/tab/team' },
      { label: 'History', link: '/tab/history' },
    ],
    menuDropdown1: [
      { label: 'Team', link: '/tab/team' },
    ],
    menuDropdown2: [
      { label: 'Patch Notes', link: '/tab/patchnotes' },
      { label: 'About', link: '/tab/about' },
    ],
  });
});

app.listen(port, () => {
  debug(`Hi Adam, listening on port ${chalk.green(port)}`);
});
