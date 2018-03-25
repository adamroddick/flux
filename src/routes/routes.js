const express = require('express');

const xRouter = express.Router();

function router() {
  const sg1 = [
    { name: 'Rosey', rank: 'Colonel' },
    { name: 'Kaley', rank: 'Captain' },
    { name: 'Connor', rank: 'Support' },
    { name: 'Lily', rank: 'Doctor' },
  ];

  const menuMain = [
    { label: 'Palace', link: '/' },
    { label: 'Economy', link: 'economy' },
    { label: 'Research', link: 'research' },
    { label: 'Military', link: 'military' },
    { label: 'History', link: 'history' },
  ];

  const menuDropdown1 = [
    { label: 'Team', link: 'team' },
  ];

  const menuDropdown2 = [
    { label: 'Patch Notes', link: 'patchnotes' },
    { label: 'About', link: 'about' },
  ];

  xRouter.route('/')
    .get((req, res) => {
      res.render('index', {
        title: 'Stargate Command',
        sg1,
        menuMain,
        menuDropdown1,
        menuDropdown2,
      });
    });

  xRouter.route('/economy')
    .get((req, res) => {
      res.render('economy', {
        title: 'Economy Page',
        sg1,
        menuMain,
        menuDropdown1,
        menuDropdown2,
      });
    });

  xRouter.route('/team')
    .get((req, res) => {
      res.render('team', {
        title: 'Team Page',
        sg1,
        menuMain,
        menuDropdown1,
        menuDropdown2,
      });
    });

  return xRouter;
}

module.exports = router();
