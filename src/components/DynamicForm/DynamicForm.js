import React from 'react';
import Username from '../DynamicForm/Username/Username';
import Date from '../DynamicForm/Date/Date';
import Opt from '../DynamicForm/Opt/Opt';
import PhoneNumber from '../DynamicForm/PhoneNumber/PhoneNumber';
import Submit from './Submit/Submit';
import Dropdown from './Dropdown/Dropdown';
import useFormValidation from '../../customHooks/useFormValidation';

const DynamicForm = props => {
    const {
        // The main state that has the key and values only
        fields: formFields,
        handleChange,
        // The state that has entire properties (placeholder, hasError etc..) (except value)
        inputs: formInputs,
        buttonDisabled,
        setIsFormSubmitted,
        isFormSubmitted,
    } = useFormValidation(props?.chat?.data?.fields);

    const submitForm = payload => {
        const formValid = Object.values(formFields).every(value => value !== '');
        if (formValid) {
            let payload = '';
            // Fetching submit button payload
            const submitButton = props?.chat?.data?.fields?.find(field => field.type === 'submit');
            payload = '/' + submitButton?.data + '{';
            // Fetching all keys and values without submit
            const allFields = props?.chat?.data?.fields?.reduce((acc, field) => {
                if (field?.type !== 'submit') {
                    acc += `"${[field?.data]}":"${formFields[field?.data]}",`;
                }
                return acc;
            }, '');
            // Joining all the values except the last character
            const formPayload = payload + allFields?.slice(0, allFields?.length - 1) + '}';
            setIsFormSubmitted(true);
            props.sendQuickMessage(formPayload, '', ''); // formPayload, props.label, props.type);
        }
    };

    return (
        <div className="dynamicForm" id="dynamicFormd" data-submitted="false">
            {formInputs.map((data, index) => {
                if (data.type === 'date') {
                    return (
                        <Date
                            index={index}
                            formFields={formFields}
                            data={data}
                            handleChange={handleChange}
                            typeLog={props}
                            isFormSubmitted={isFormSubmitted}
                        />
                    );
                } else if (data.type === 'phone') {
                    return (
                        <PhoneNumber
                            index={index}
                            formFields={formFields}
                            data={data}
                            handleChange={handleChange}
                            isFormSubmitted={isFormSubmitted}
                        />
                    );
                } else if (data.type === 'dropdown') {
                    return (
                        <Dropdown
                            index={index}
                            handleChange={handleChange}
                            formFields={formFields}
                            data={data}
                            isFormSubmitted={isFormSubmitted}
                        />
                    );
                } else if (data.type === 'opt') {
                    return (
                        <Opt
                            index={index}
                            options={data.options}
                            handleChange={handleChange}
                            formFields={formFields}
                            data={data}
                            isFormSubmitted={isFormSubmitted}
                        />
                    );
                } else if (data.type === 'text' || data.type === 'email' || data.type === 'eid') {
                    return (
                        <Username
                            index={index}
                            formFields={formFields}
                            data={data}
                            handleChange={handleChange}
                            isFormSubmitted={isFormSubmitted}
                        />
                    );
                } else if (data.type === 'submit') {
                    return (
                        <Submit
                            index={index}
                            label={data.label}
                            buttonDisabled={buttonDisabled}
                            sendQuickMessage={submitForm}
                            isFormSubmitted={isFormSubmitted}
                        />
                    );
                }
            })}
        </div>
    );
};
export default DynamicForm;
