/**
 * Created by shmuel on 05/07/2014.
 */
/*jshint expr: true*/
var chai = require('chai');
var chaiHttp = require('chai-http');
var expect = chai.expect;
chai.use(chaiHttp);

describe('Gague endpoint test', function() {
  'use strict';
  var newGagueId;
  var updateGagueNumber;


  describe('POST /gauge', function () {
    var res;
    var newGague = {
      number: 10,
      Width: 10,
      Height: 10,
      RedFrom: 41,
      RedTo: 60,
      YellowFrom: 30,
      YellowTo: 40,
      GreenFrom: 10,
      GreenTo: 30,
      Max: 100,
      MinorTicks: 1,
      Label: 'Label',
      Value: 10,
      Header: "Header",
      Footer: "Footer"
    };

    before(function (done) {
      chai.request('http://localhost:3000')
        .post('/gauge')
        .req(function (req) {

          req.send(newGague);
        })
        .res(function (response) {
          res = response;
          newGagueId = res.body.number;
          done();
        });
      // done();
    });

    it('should return the newly created item and status 201', function (done) {
      expect(res).to.have.status(201);
      expect(res.body.number).to.equal(newGague.number);
      expect(res.body.Value).to.equal(newGague.Value);

      done();
    });
  });
  describe('GET /gauge/:gaugeNumber', function() {
    it('should get the newly created gauge  by its number', function(done) {
      chai.request('http://localhost:3000')
        .get('/gauge/' + newGagueId)
        .req(function(req){

        })
        .res(function (res) {
          try {
            expect(res).to.have.status(200);
          } catch (e) {
            done(e);
            return;
          }
          done();
        });
    });
  });

  describe('GET /gauge', function() {

    it('should return HTTP 200', function(done) {
      chai.request('http://localhost:3000')
        .get('/gauge')
        .req(function(req){

        })
        .res(function (res) {
          try {
            expect(res).to.have.status(200);
          } catch (e) {
            done(e);
            return;
          }
          done();
        });
    });
  });




  describe('PUT /gauge', function() {
    updateGagueNumber = 10;
    it('should return HTTP 201', function(done) {
      chai.request('http://localhost:3000')
        .put('/gauge/' + updateGagueNumber)
        .req(function(req){

        })
        .res(function (res) {
          try {
            expect(res).to.have.status(201);
          } catch (e) {
            done(e);
            return;
          }
          done();
        });
    });
  });



});
