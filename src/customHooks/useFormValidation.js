import React, { useState, useEffect, useContext } from 'react';
import { TranslateContext } from '../context/Translate/TranslateContext';

const useFormValidation = (chatFields = []) => {
    const [fields, setFields] = useState({});
    const [inputs, setInputs] = useState([]);
    const [buttonDisabled, setButtonDisabled] = useState(true);
    const [lastChangedFieldId, setLastChangedFieldId] = useState('');
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);
    const { language, translatedLanguage } = useContext(TranslateContext);


    useEffect(() => {
        // Runs initially when the form payloads are received from websocket
        // Dynamically adds the keys of the form and creates a state
        const allFields = chatFields?.reduce((acc, val) => {
            if (val?.type !== 'submit' && val?.type !== 'dropdown') {
                acc[val?.data] = '';
            }
            if (val?.type === 'dropdown') {
                acc[val?.data] = val?.options[0];
            }
            return acc;
        }, {});

        setFields(allFields);
    }, [chatFields]);

    useEffect(() => {
        const allFields = [];
        const notValidTypes = ['submit'];
        for (let i = 0; i < chatFields.length; i++) {
            if (!notValidTypes.includes(chatFields[i].type)) {
                const labelLength = chatFields[i]?.label.length === 0 ? true : false;
                const isRequired = chatFields[i]?.required;
                allFields.push({
                    id: i,
                    placeholder: chatFields[i]?.label,
                    // if dropdown then add options
                    ...(chatFields[i].options && { options: chatFields[i].options }),
                    name: chatFields[i]?.data,
                    required: chatFields[i]?.required,
                    type: chatFields[i]?.type,
                    errMessage: '',
                    hasError: null,
                });
            } else {
                allFields.push(chatFields[i]);
            }
        }
        setInputs(allFields);
    }, [chatFields]);

    const handleChange = (value, fieldName, id, type) => {
        if (type === 'eid') {
            addHyphenForEmiratesID(value, fieldName);
        } else {
            updateFieldsState(value, fieldName);
        }

        setLastChangedFieldId(id);
    };

    const addHyphenForEmiratesID = (value, fieldName) => {
        const valueLength = value.length;

        if (valueLength <= 17) {
            if (value[valueLength - 1] === '-') {
                let newValue = value.slice(0, -1);
                updateFieldsState(newValue, fieldName);
                return;
            }

            if (valueLength === 4 || valueLength === 9 || valueLength === 17 || valueLength === 19) {
                let newValue = value.slice(0, -1) + '-' + value.split('')?.[value?.length - 1];
                updateFieldsState(newValue, fieldName);
                return;
            }
            updateFieldsState(value, fieldName);
        }
    };

    const updateFieldsState = (value, fieldName) => {
        setFields(currentValue => ({
            ...currentValue,
            [fieldName]: value,
        }));
    };

    /**
     * All the valid arguments in ...args in order on the index
     *
     * @param {string} fieldName
     * @param {string} ID
     * @param {string} type
     * @param {bool} isRequired
     */
    const validateForm = (...args) => {
        const newInput = [...inputs];

        checkText(args);
        checkEmail(args);
        checkPhone(args);
        checkDate(args);
        checkDropdown(args);
        checkEmiratesID(args);

        setInputs(newInput);
    };

    const checkText = ([fieldName = '', ID, type = '', isRequired]) => {
        const regex = /[0-9]/gi;
        if (type === 'text') {
            if (fields?.[fieldName].length === 0 || fields?.[fieldName] === '') {
                addError(ID, translatedLanguage.This_field_is_mandatory);
            } else if (/[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(fields?.[fieldName])) {
                addError(ID, translatedLanguage.Special_characters_are_not_allowed);
            } else if (regex.test(fields?.[fieldName])) {
                addError(ID, translatedLanguage.Numerics_are_not_allowed);
            } else {
                removeError(ID);
            }
        }
    };

    const checkEmail = ([fieldName = '', ID, type = '', isRequired]) => {
        if (type === 'email') {
            if (fields?.[fieldName].length === 0 || fields?.[fieldName] === '') {
                addError(ID, translatedLanguage.This_field_is_mandatory);
            } else if (
                !fields?.[fieldName].match(
                    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                )
            ) {
                addError(ID, translatedLanguage.Invalid_Email);
            } else {
                removeError(ID);
            }
        }
    };

    const checkPhone = ([fieldName = '', ID, type = '', isRequired]) => {
        const regex = /[^0-9]/g;
        if (type === 'phone') {
            if (fields?.[fieldName].length === 0 || fields?.[fieldName] === '') {
                addError(ID, translatedLanguage.This_field_is_mandatory);
            } else if (fields?.[fieldName].length < 9) {
                addError(ID, translatedLanguage.Phone_number_must_be_valid);
            } else if (regex.test(fields?.[fieldName])) {
                addError(ID, translatedLanguage.Phone_number_must_be_numeric);
            } else {
                removeError(ID);
            }
        }
    };

    const checkDate = ([fieldName = '', ID, type = '', isRequired]) => {
        if (type === 'date') {
            if (fields?.[fieldName].length === 0 || fields?.[fieldName] === '') {
                addError(ID, translatedLanguage.This_field_is_mandatory);
            } else {
                removeError(ID);
            }
        }
    };

    const checkEmiratesID = ([fieldName = '', ID, type = '', isRequired]) => {
        if (type === 'eid') {
            if (fields?.[fieldName].length === 0 || fields?.[fieldName] === '') {
                addError(ID, translatedLanguage.This_field_is_mandatory);
            } else if (fields?.[fieldName].match(/^784-[0-9]{4}-[0-9]{7}-[0-9]{1}$/) === null) {
                addError(ID, translatedLanguage.Emirates_ID_is_not_valid);
            } else {
                removeError(ID);
            }
        }
    };

    const checkDropdown = ([fieldName = '', ID, type = '', isRequired]) => {
        if (type === 'opt') {
            if (fields?.[fieldName] !== true) {
                addError(ID, translatedLanguage.This_field_is_mandatory);
            } else {
                removeError(ID);
            }
        }
    };

    const addError = (ID, msg) => {
        const newInput = [...inputs];
        newInput[ID].errMessage = msg;
        newInput[ID].hasError = true;
    };

    const removeError = ID => {
        const newInput = [...inputs];
        newInput[ID].errMessage = '';
        newInput[ID].hasError = false;
    };

    useEffect(() => {
        const currentChangedField = inputs.find(input => input.id === lastChangedFieldId);

        if (currentChangedField)
            validateForm(currentChangedField.name, currentChangedField.id, currentChangedField.type);

        const allValidInput = inputs.filter(input => input.type !== 'submit' && input.type !== 'dropdown');

        if (allValidInput.some(data => data.hasError || data.hasError === null)) {
            setButtonDisabled(true);
        } else {
            setButtonDisabled(false);
        }
    }, [fields]);

    const togglePassword = id => {
        const newInput = [...inputs];
        newInput[id].securePassword = !newInput[id].securePassword;
        setInputs(newInput);
    };

    return {
        fields,
        handleChange,
        inputs,
        validateForm,
        togglePassword,
        buttonDisabled,
        isFormSubmitted,
        setIsFormSubmitted,
    };
};

export default useFormValidation;
