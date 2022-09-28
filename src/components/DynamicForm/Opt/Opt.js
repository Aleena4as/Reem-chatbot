import React, { useState } from 'react';
import { useContext } from 'react';
import { Tween } from 'react-gsap';
import { classFunction } from '../../../utils/Function';
import { TranslateContext } from '../../../context/Translate/TranslateContext';

const Opt = ({ handleChange, data, index, formFields, options }) => {
    const { language } = useContext(TranslateContext);
    const arabic = language === 'ar' ? true : false;
    return (
        <Tween from={{ opacity: 0 }} key={index}>
            <div className={classFunction('opt-container left-chat', arabic, 'right-align')}>
                {/* <h1>Email</h1> */}
                {arabic ? (
                    <Tween from={{ opacity: 0.8 }}>
                        <div className="input-section opt-sec arabic-opt">
                            <label class="checkboxvalue232">{data.placeholder}</label>
                            <input
                                className="checkboxvalue"
                                type="checkbox"
                                name="opt"
                                value={formFields[data?.name]}
                                className="checkboxvalue"
                                onChange={event => {
                                    console.log(event.target.checked, '=event.target.checked');
                                    handleChange(event.target.checked, data?.name, data?.id, data?.type);
                                }}
                                required={data.required}
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
                    </Tween>
                ) : (
                    <Tween from={{ opacity: 0.8 }}>
                        <div className="input-section opt-sec">
                            <div class="checkbox-container">
                                <label class="checkboxvalue232">
                                    <input
                                        className="checkboxvalue"
                                        type="checkbox"
                                        name="opt"
                                        value={formFields[data?.name]}
                                        className="checkboxvalue"
                                        onChange={event => {
                                            console.log(event.target.checked, '=event.target.checked');
                                            handleChange(event.target.checked, data?.name, data?.id, data?.type);
                                        }}
                                        required={data.required}
                                    />
                                    <div className="custom-checkbox">
                                        <div className="checkmark"></div>
                                    </div>
                                    <span>{data.placeholder}</span>
                                </label>
                            </div>
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
                )}
            </div>
        </Tween>
    );
};

export default Opt;
