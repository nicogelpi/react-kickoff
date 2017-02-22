import chai from 'chai'
import React from 'react'
import { shallow } from 'enzyme'
import ReactLogo from './ReactLogo'


describe('<ReactLogo />', function() {
  let component

  before(function() {
    component = shallow(<ReactLogo />)
  })

  it('Should have as children the div with the image', function() {
    chai.expect(component.type()).to.equal('div')
  })
})
