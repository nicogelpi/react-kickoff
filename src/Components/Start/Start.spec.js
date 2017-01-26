import chai from 'chai';
import sinon from 'sinon';
import React from 'react';
import { shallow } from 'enzyme';
import ReactWelcome from './ReactWelcome';


describe('<ReactWelcome />', function() {
  let component;

  beforeEach(function() {
    sinon.spy(window.console, 'log');
    component = shallow(<ReactWelcome />);
  });

  afterEach(function() {
    window.console.log.restore();
  });

  it('Should have as children the div with the image', function() {
    chai.expect(component.type()).to.equal('article');
  });

  it('Should had been called componentWillMount', function() {
    chai.expect(window.console.log.called).to.be.true;
  });
});
