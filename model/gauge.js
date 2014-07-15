/**
 * Created by shmuel on 04/07/2014.
 */
'use strict';
var mongoose = require('mongoose');
var promise = require('bluebird');


var GaugeSchema = new mongoose.Schema({

  number: {type: Number},
  Width: {type: Number},
  Height: {type: Number},
  RedFrom: {type: Number},
  RedTo: {type: Number},
  YellowFrom: {type: Number},
  YellowTo: {type: Number},
  GreenFrom: {type: Number},
  GreenTo: {type: Number},
  Max: {type: Number},
  MinorTicks: {type: Number},
  Label: {type: String},
  Value: {type: Number},
  Header: {type: String},
  Footer: {type: String}
});


var model = mongoose.model('Gauge', GaugeSchema);
promise.promisifyAll(model);
promise.promisifyAll(model.prototype);
module.exports = model;