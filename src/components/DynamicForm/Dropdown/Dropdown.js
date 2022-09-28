import React, { useState } from 'react';
import { useContext } from 'react';
import get from 'lodash.get';
import { TranslateContext } from '../../../context/Translate/TranslateContext';
import { classFunction } from '../../../utils/Function';
const Dropdown = ({ handleChange, data, index, formFields }) => {
    const [showOption, setShowOption] = useState(false);
    const { language } = useContext(TranslateContext);

    const toggleDropdown = bool => {
        setShowOption(prev => !prev);
    };

    const selectedOption = event => {
        handleChange(event.target.textContent, data?.name, data?.id, data?.type);
        toggleDropdown();
    };

    const selectValue = formFields[data?.name];
    const arabic = language === 'ar' ? true : false;
    return (
        <div className={classFunction('dropdown-container left-chat', arabic, 'right-align')} key={index}>
            <h1 style={{ fontWeight: 'bold' }}>{data?.placeholder}</h1>
            <div className="select-tag">
                <div className="selected-option" onClick={toggleDropdown}>
                    {selectValue ? selectValue : data?.options?.[0]}
                    <div className="dropdown-arrow">
                        <img src={require('./dropDownArrow.svg')} alt="" />
                    </div>
                </div>
                {showOption &&
                    data?.options?.map(data => (
                        <div
                            className={classFunction('option-tag', arabic, 'right-align')}
                            data-value={data}
                            onClick={selectedOption}
                        >
                            {data}
                        </div>
                    ))}
            </div>
        </div>
    );
};

export default Dropdown;
