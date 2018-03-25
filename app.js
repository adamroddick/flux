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

app.use('/', xRouter);

xRouter.route('/')
  .get((req, res) => {
    res.render('index', {
      title: 'Stargate Command',
      sg1: [
        { name: 'Rosey', rank: 'Colonel' },
        { name: 'Kaley', rank: 'Captain' },
        { name: 'Connor', rank: 'Support' },
        { name: 'Lily', rank: 'Doctor' },
      ],
      menuMain: [
        { label: 'Economy', link: 'economy' },
        { label: 'Research', link: 'research' },
        { label: 'Military', link: 'military' },
        { label: 'Team', link: 'team' },
        { label: 'History', link: 'history' },
      ],
      menuDropdown1: [
        { label: 'Team', link: 'team' },
      ],
      menuDropdown2: [
        { label: 'Patch Notes', link: 'patchnotes' },
        { label: 'About', link: 'about' },
      ],
    });
  });

xRouter.route('/economy')
  .get((req, res) => {
    res.render('economy', {
      title: 'Economy Page',
      menuMain: [
        { label: 'Economy', link: 'economy' },
        { label: 'Research', link: 'research' },
        { label: 'Military', link: 'military' },
        { label: 'Team', link: 'team' },
        { label: 'History', link: 'history' },
      ],
      menuDropdown1: [
        { label: 'Team', link: 'team' },
      ],
      menuDropdown2: [
        { label: 'Patch Notes', link: 'patchnotes' },
        { label: 'About', link: 'about' },
      ],
    });
  });

app.listen(port, () => {
  debug(`Hi Adam, listening on port ${chalk.green(port)}`);
});
