import React from 'react';
import FactSheet from '../../src/components/FactSheet/FactSheet';
import { expect } from 'chai';
import { shallow } from 'enzyme';

describe('FactSheetComponent', () => {
  it('should render facts Component', () => {
    let component = shallow(<FactSheet />);
    expect(component.exists()).equal(true);
  });
});
