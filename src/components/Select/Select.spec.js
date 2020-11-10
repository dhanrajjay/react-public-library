import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Select from './Select';
import { shallow, mount } from 'enzyme';

describe('Select Component', () => {
  it('should render correctly in "debug" mode', () => {
    const dropDownList =  [1,2,3];
    const component = shallow(<Select itemList={dropDownList} debug />);

    expect(component).toMatchSnapshot();
  });
  it('select blur should have been invoked', () => {
    const mockFunc = jest.fn();
    const dropDownList =  [1,2,3];
    const component = mount(<Select id="dropDown" name="selectComp" itemList={dropDownList} onddlChange={mockFunc} />);
    component
       .find('select')
       .simulate('blur');
    expect(mockFunc).toHaveBeenCalled();
  });

//  it('should have default value', () => {
//    const mockFunc = jest.fn();
//    const dropDownList =  [1,2,3];
//    const component = mount(<Select id="dropDown" name="selectComp" itemList={dropDownList}
//     onddlChange={mockFunc} ddlDefaultvalue={'2'} debug/>);
//    console.log(component.find('option').at(2));
//    component
//       .find('select')
//       .simulate('change', { target: { value: '3' } });
//    const select = component.find('select')
//    expect(select.props().value).toBe("2");
//  });
});