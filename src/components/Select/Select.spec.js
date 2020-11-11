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
    const dropDownList = [{label: '1', value: '1'},{label: '2', value: '2'}, {label: '3', value: '3'}];
    const component = mount(<Select id="dropDown" name="selectComp" itemList={dropDownList} onddlChange={mockFunc} />);
    component
       .find('select')
       .simulate('blur');
    expect(mockFunc).toHaveBeenCalled();
  });

  it('should have the default value', () => {
    const mockFunc = jest.fn();
    const dropDownList = [{label: '1', value: '1'},{label: '2', value: '2'}, {label: '3', value: '3'}];
    const component = mount(<Select ddlID="dropDown" name="selectComp" itemList={dropDownList}
     onddlChange={mockFunc} ddlDefaultvalue={'2'} debug/>);
    const select1 = component.find('select#dropDown option').at(1);
    const select2 = component.find('select#dropDown option').at(2);
    console.log(select1.instance().selected);
    expect(select1.instance().selected).toBeTruthy();
    expect(select2.instance().selected).toBeFalsy();
    expect(select1.props().value).toBe("2");
  });
});