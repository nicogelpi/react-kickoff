import chai from 'chai';
import chaiAsPromised from 'chai-as-promised';

chai.use(chaiAsPromised);

describe('Start Module Tests', function() {

  let reactLogo = {
    mainElement: function() {
      return element(by.css('.react-logo'));
    }
  };

  beforeEach(function() {
    browser.get('http://localhost:3000');
  });

  it('Should Have an React Logo', function() {
    chai.expect(reactLogo.mainElement().isPresent()).to.eventually.be.true;
  });
});
