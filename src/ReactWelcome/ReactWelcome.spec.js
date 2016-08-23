import chai from 'chai';
import sinon from 'sinon';
import React from 'react';
import ReactWelcome from './ReactWelcome';
import ReactTestUtils from 'react-addons-test-utils';


describe('<ReactWelcome />', function() {
  let component;

  beforeEach(function() {
    let renderer = ReactTestUtils.createRenderer();
    sinon.spy(window.console, 'log');
    renderer.render(<ReactWelcome />);
    component = renderer.getRenderOutput();
  });

  afterEach(function() {
    window.console.log.restore();
  });

  it('Should have as children the div with the image', function() {
    chai.expect(component.type).to.equal('article');
  });

  it('Should had been called componentWillMount', function() {
    chai.expect(window.console.log.called).to.be.true;
  });
});
