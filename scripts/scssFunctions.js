const { types } = require('node-sass'); 

const getBuildData = require('./getBuildData');

module.exports = {
  'build-data()': () => types.String(getBuildData(true)),
};
