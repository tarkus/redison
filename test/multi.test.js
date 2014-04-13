// Generated by CoffeeScript 1.6.3
var Redison, should;

Redison = require('../lib');

should = require('should');

describe('Multi', function() {
  beforeEach(function(done) {
    this.redison = new Redison({
      servers: ['localhost:6379', 'localhost:6479']
    });
    return done();
  });
  return it('should be executed in the right way', function(done) {
    var multi;
    multi = this.redison.multi();
    multi.set('foo', 'bar');
    multi.set('bar', 'foo');
    multi.set('a', 'b');
    return multi.exec(function(error, results) {
      should.not.exist(error);
      return done();
    });
  });
});
