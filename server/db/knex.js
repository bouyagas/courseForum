/* eslint-disable import/newline-after-import,jsx-a11y/href-no-hash */
const environment = process.env.NODE_ENV || 'development';
const knex = require('knex');
const config = require('./knexfile');
const db = knex(config[environment]);

module.exports = {
  db,
};
