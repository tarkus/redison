Redism = require '../lib'
should  = require 'should'

describe 'Multi', ->

  beforeEach (done) ->
    @redism = new Redism
      servers: ['redis://localhost:6379', 'redis://localhost:6479']
    done()

  it 'should be executed in the right way', (done) ->
    multi = @redism.multi()
    multi.set 'foo', 'bar'
    multi.set 'bar', 'foo'
    multi.set 'a', 'b'
    multi.exec (error, results) ->
      should.not.exist error
      done()
