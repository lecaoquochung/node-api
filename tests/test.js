'use strict';

require("app-module-path").addPath(__dirname + "/../");

var _           = require("lodash");
var mocha       = require("mocha");

// assertion simple
// var assert = require('assert');
// describe('Array', function() {
//   describe('#indexOf()', function() {
//     it('should return -1 when the value is not present', function() {
//       assert.equal(-1, [1,2,3].indexOf(4));
//     });
//   });
// });

// asynchronous
// describe('User', function() {
//   describe('#save()', function() {
//     it('should save without error', function(done) {
//       var user = new User('Luna');
//       user.save(function(err) {
//         if (err) done(err);
//         else done();
//       });
//     });
//   });
// });

// describe('User', function() {
//   describe('#save()', function() {
//     it('should save without error', function(done) {
//       var user = new User('Luna');
//       user.save(done);
//     });
//   });
// });

// promise
// beforeEach(function() {
//   return db.clear()
//     .then(function() {
//       return db.save([aaa, bbb, ccc]);
//     });
// });
//
// describe('#find()', function() {
//   it('respond with matching records', function() {
//     return db.find({ type: 'User' }).should.eventually.have.length(3);
//   });
// });

// mocha & chai
// const assert = require('assert');
//
// it('should complete this test', function (done) {
//   return new Promise(function (resolve) {
//     assert.ok(true);
//     resolve();
//   })
//     .then(done);
// });

var assert = require('chai').assert;

function add() {
  return Array.prototype.slice.call(arguments).reduce(function(prev, curr) {
    return prev + curr;
  }, 0);
}

describe('add()', function() {
  var tests = [
    {args: [1, 2],       expected: 3},
    {args: [1, 2, 3],    expected: 6},
    {args: [1, 2, 3, 4], expected: 10}
  ];

  tests.forEach(function(test) {
    it('correctly adds ' + test.args.length + ' args', function() {
      var res = add.apply(null, test.args);
      assert.equal(res, test.expected);
    });
  });
});
