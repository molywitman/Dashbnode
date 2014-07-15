/**
 * Created by shmuel on 05/07/2014.
 */

var express = require('express');
var gauge = require('../model/gauge');
var router = express.Router();

/* GET Gauge listing. */
router.get('/', function(req, res) {



  gauge.findAsync().then(function (gaugedata) {
    res.send(200, gaugedata);
  }).catch(function(err){
    res.send(500, err);
  });


});
router.get('/:gaugeNumber', function(req, res) {
  var GaugeNumber = req.params.gaugeNumber;



  gauge.findOneAsync({number:GaugeNumber}).then(function (gaugedata) {
    res.send(200, gaugedata);
  }).catch(function(err){
    res.send(500, err);
  });


});
router.post('/', function(req, res) {
  var newGauge = req.body;
  gauge.createAsync(newGauge).then(function (gauge) {
    res.send(201, gauge);
  }).catch(function(err){
    res.send(500, err);
  });


});

router.put('/:gaugeNumber', function(req, res) {

  var GaugeNumber = req.params.gaugeNumber;



  gauge.findOneAsync({number:GaugeNumber}).then(function (GaugeToUpdate) {
    GaugeToUpdate.Value = 2222222;
    GaugeToUpdate.increment();
    GaugeToUpdate.save(function (err) {
      if (err) return res.send(500, err);
      res.send(201, GaugeToUpdate);
    })
  });
});
module.exports = router;