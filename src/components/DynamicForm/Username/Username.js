import React, { useContext } from 'react';
import { Tween } from 'react-gsap';
import { TranslateContext } from '../../../context/Translate/TranslateContext';
import { classFunction } from '../../../utils/Function';

const Username = ({ handleChange, data, index, formFields, isFormSubmitted }) => {
    const { language } = useContext(TranslateContext);

    const arabic = language === 'ar' ? true : false;
    return (
        <Tween from={{ y: '20px', opacity: 0 }} key={index}>
            <div className={classFunction('username-container left-chat', arabic, 'right-align')}>
                <div className="input-section">
                    <input
                        type="text"
                        name={data?.name}
                        value={formFields[data?.name]}
                        onChange={event => {
                            handleChange(event.target.value, data?.name, data?.id, data?.type);
                        }}
                        placeholder={data?.placeholder}
                        autoComplete="off"
                        required={data?.required}
                        readOnly={isFormSubmitted}
                    />
                    {data?.hasError && (
                        <div class="custom-error-message">
                            <div class="error-icon">!</div>
                            <div class="error-tooltip">
                                <span>{data?.errMessage}</span>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </Tween>
    );
};

export default Username;
