import React from 'react';
import Users from '../../src/components/Users/Users';
import { expect } from 'chai';
import { shallow } from 'enzyme';

describe('UsersComponent', () => {
  it('should render users Component', () => {
    let component = shallow(<Users/>);
    expect(component.exists()).equal(true);
  });
});
