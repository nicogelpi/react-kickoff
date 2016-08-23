import chai from 'chai';
import React from 'react';
import ReactLogo from './ReactLogo';
import ReactTestUtils from 'react-addons-test-utils';


describe('<ReactLogo />', function() {
  let component;

  before(function() {
    let renderer = ReactTestUtils.createRenderer();
    renderer.render(<ReactLogo />);
    component = renderer.getRenderOutput();
  });

  it('Should have as children the div with the image', function() {
    chai.expect(component.type).to.equal('div');
  });
});
