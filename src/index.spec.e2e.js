var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);

describe('Start Module Tests', function() {

  beforeEach(function() {
    browser.get('http://localhost:3000');
  });

  it('should be true haha', function() {
    chai.expect(true).to.be.true;
  });
});
