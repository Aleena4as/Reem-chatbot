import React from 'react';
import { useContext } from 'react';
import { Tween } from 'react-gsap';
import 'react-phone-input-2/lib/style.css';
import { TranslateContext } from '../../../context/Translate/TranslateContext';
import { classFunction } from '../../../utils/Function';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

const PhoneNumber = ({ handleChange, data, index, formFields }) => {
    const { language } = useContext(TranslateContext);

    const arabic = language === 'ar' ? true : false;
    return (
        <Tween from={{ y: '20px', opacity: 0 }} key={index}>
            <div className={classFunction('phone-number-container', arabic, 'right-align')}>
                <Tween from={{ opacity: 0 }}>
                    <div className="input-section">
                        <PhoneInput
                            country={'ae'}
                            value={formFields[data?.name]}
                            onChange={phone => handleChange(phone, data?.name, data?.id, data?.type)}
                            inputProps={{
                                maxLength: '16',
                            }}
                        />
                        {/* <input
                            type="tel"
                            name={data?.name}
                            value={formFields[data?.name]}
                            onChange={event => handleChange(event.target.value, data?.name, data?.id, data?.type)}
                            placeholder={data?.placeholder}
                            maxLength="16"
                            required={data?.required}
                        /> */}
                        {data?.hasError && (
                            <div class="custom-error-message">
                                <div class="error-icon">!</div>
                                <div class="error-tooltip">
                                    <span>{data?.errMessage}</span>
                                </div>
                            </div>
                        )}
                    </div>
                </Tween>
            </div>
        </Tween>
    );
};

export default PhoneNumber;
