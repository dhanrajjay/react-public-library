import React from 'react';
import { mount } from 'enzyme';
import Label from '../Label/Label';
import PhoneNumber from './PhoneNumber';
import TextBox from '../TextBox/TextBox';

describe('Examining the Phone Number component of the library', () => {

    test("Should render without crash ", () => {
        mount(<PhoneNumber id="PhoneNumberId" name="PhoneNumber" displayName="Phone Number" className=""
            haserror='false' errormsg= '' onBlur={()=>{}} placeholder="555 555 5555">
        </PhoneNumber>  );
    });

    it('Should render with attributes', () => {
        const container = mount(<PhoneNumber id="PhoneNumberId" name="PhoneNumber" displayName="Phone Number" className=""
                haserror='false' errormsg= '' onBlur={()=>{}} placeholder="555 555 5555">
        </PhoneNumber>);
        const phoneCtrl = container.find('PhoneNumber');
        expect(phoneCtrl.props().placeholder).toBe("555 555 5555");
        expect(phoneCtrl.props().errormsg).toBe("");
        container.unmount();
    })

    it('Should have label and textbox inside',() => {
        const container = mount(<PhoneNumber id="PhoneNumberId" name="PhoneNumber" displayName="Phone Number" className=""
            haserror='false' errormsg= 'Phone No is not in correct format' onBlur={()=>{}} placeholder="555 555 5555">
        </PhoneNumber>);
        const phoneCtrl = container.find('PhoneNumber');
        expect(phoneCtrl.find(Label).length).toEqual(1);
        expect(phoneCtrl.find(TextBox).length).toEqual(1);
        container.unmount();
    });

    it('Should not render with error-msg when there is no error', () => {
        const container = mount(<PhoneNumber id="PhoneNumber" name="PhoneNumber" displayName="Phone Number" className=""
            haserror='false' errormsg= 'Phone No is not in correct format' onBlur={()=>{}} placeholder="555 555 5555">
        </PhoneNumber>);
        const phoneCtrl = container.find('PhoneNumber');
        expect(phoneCtrl.find('.error-msg')).toHaveLength(0);
        container.unmount();
    })

    it('Should render and validate with the given value', () => {
        const onBlurSpy = jest.fn();
        const container = mount(<PhoneNumber id="PhoneNumber" name="PhoneNumber" displayName="Phone Number" className=""
            haserror='true' errormsg= 'Phone No is not in correct format' onBlur={onBlurSpy} placeholder="555 555 5555">
        </PhoneNumber>);
        console.log(container.debug());
        container
         .find('input')
         .simulate('blur', { target: { value: '5555555555' } });
        const errorDetails = { isEmpty: true, isInvalid: false };
        expect(onBlurSpy).toHaveBeenCalled();
        expect(onBlurSpy).not.toHaveBeenCalledWith("5555555555", errorDetails);
    })

    it('Should render and validate with the given value and show error-msg when there is error', () => {
        const onBlurSpy = jest.fn();
        const container = mount(<PhoneNumber id="PhoneNumber" name="PhoneNumber" displayName="Phone Number" className=""
            haserror='true' errormsg= 'Phone No is not in correct format' onBlur={onBlurSpy} placeholder="555 555 5555">
        </PhoneNumber>);

        container
         .find('input')
         .simulate('blur', { target: { value: '' } });
        const errorDetails = { isEmpty: true, isInvalid: false };
        expect(onBlurSpy).toHaveBeenCalled();
        expect(onBlurSpy).toHaveBeenCalledWith('', errorDetails);
    })

    it('Should render and validate with the given value and show error-msg when there is error', () => {
        const onBlurSpy = jest.fn();
        const container = mount(<PhoneNumber id="PhoneNumber" name="PhoneNumber" displayName="Phone Number" className=""
            haserror='true' errormsg= 'Phone No is not in correct format' onBlur={onBlurSpy} placeholder="555 555 5555">
        </PhoneNumber>);

        container
         .find('input')
         .simulate('blur', { target: { value: 'test' } });
        const errorDetails = { isEmpty: false, isInvalid: true };
        expect(onBlurSpy).toHaveBeenCalled();
        expect(onBlurSpy).toHaveBeenCalledWith('test', errorDetails);
    })

    it('Should render the component with default placeholder if no given', () => {
        const container = mount(<PhoneNumber id="PhoneNumber" name="PhoneNumber" displayName="Phone Number" className=""
            haserror='true' errormsg= 'Phone No is not in correct format' onBlur={()=>{}}>
        </PhoneNumber>);
        const inputPlaceholder = container.find('input').props().placeholder;
        expect(inputPlaceholder).toBe('555-555-5555');
    })

    it('Should render with the given error-msg when there is error', () => {
        const container = mount(<PhoneNumber id="PhoneNumber" name="PhoneNumber" displayName="Phone Number" className=""
            haserror='true' errormsg= 'Phone No is not in correct format' onBlur={()=>{}} placeholder="555 555 5555">
        </PhoneNumber>);
        const phoneCtrl = container.find('PhoneNumber');
        expect(phoneCtrl.find('.error-msg')).toHaveLength(1);
        container.unmount();
    })
});