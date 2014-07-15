/**
 * Created by shmuel on 05/07/2014.
 */
'use strict';


var mongoose = require('mongoose');

module.exports = function () {


  mongoose.connect('mongodb://localhost/gauge');

  mongoose.connection.on('error', function (error) {
    console.error('Failed to connect to mongo: ' + error);
  });

  mongoose.connection.once('open', function () {
    console.log('Connected to mongo');
  });
};
