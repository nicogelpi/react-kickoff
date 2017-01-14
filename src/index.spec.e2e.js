import chai from 'chai';
import chaiAsPromised from 'chai-as-promised';

chai.use(chaiAsPromised);

describe('Start Module Tests', function() {

  beforeEach(function() {
    browser.get(`${browser.params.baseServer}`);
  });

  it('Should have React Entry Point', function() {
    chai.expect(element(by.css('body > div')).isPresent()).to.eventually.be.true;
  });
});
