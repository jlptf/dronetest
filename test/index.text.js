const should = require('should')
const supertest = require('supertest')
require('../index.js')

const api = supertest('http://localhost:1234')

describe('Simple http server test', function() {
  it('should return', function(done) {
    api.get('/')
      .expect(200)
      .end((err, res) => {
        if (err) { return done(err) }
        
        res.body.should.be.Object()
        res.text.should.equal('hello')
        done()
      })
  })
})
