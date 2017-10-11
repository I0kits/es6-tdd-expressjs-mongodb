let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../../src/app');
let should = chai.should();

chai.use(chaiHttp);

describe('foo tests', () => {
  it('case 1 description', (done) => {
    chai.request(server)
      .get('/')
      .end((err, res) => {
        res.should.have.status(200);
        res.body.message.should.equal('great!');
        done();
      });
  });
});