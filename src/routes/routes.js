const express = require('express');

const xRouter = express.Router();

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

module.exports = xRouter;