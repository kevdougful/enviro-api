'use strict';

var exec = require('child_process').exec;
var server = require('../server/server');
var ds = server.dataSources.enviro;

module.exports = (gulp, plugins) => {
  return (callback) => {
    ds.isActual((err, updated) => {
      if (!updated) {
        ds.autoupdate((err, result) => {
          ds.disconnect();
          callback(err);
        });
      }
    });
  };
};
