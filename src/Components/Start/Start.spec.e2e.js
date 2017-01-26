import chai from 'chai';
import chaiAsPromised from 'chai-as-promised';

chai.use(chaiAsPromised);

describe('Start Module Tests', function() {

  let startModule = {
    mainElement: function() {
      return element(by.css('.kickoff-start'));
    },
    title: function() {
      return this.mainElement().element(by.tagName('h1'));
    },
    paragraphDescription: function() {
      return this.mainElement().element(by.css('p:not(.warning)'));
    },
    repositoryLink: function() {
      return this.paragraphDescription().element(by.tagName('a'));
    }
  };

  beforeEach(function() {
    browser.get(`${browser.params.baseServer}`);
  });

  it('Should have a Title', function() {
    chai.expect(startModule.title().isPresent()).to.eventually.be.true;
    chai.expect(startModule.title().getText()).to.eventually.be.equal('Welcome to React Kickoff');
  });

  it('Should have a paragraph as Desription', function() {
    chai.expect(startModule.paragraphDescription().isPresent()).to.eventually.be.true;
    chai.expect(startModule.paragraphDescription().getText()).to.eventually.be.equal('Thanks for using this Repository, go ahead, develop your own app!');
  });

  it('Should have a link to the Repository', function() {
    chai.expect(startModule.repositoryLink().isPresent()).to.eventually.be.true;
    chai.expect(startModule.repositoryLink().getAttribute('href')).to.eventually.be.equal('https://github.com/Negan1911/react-kickoff');
    chai.expect(startModule.repositoryLink().getText()).to.eventually.be.equal('Repository');
  });

});
