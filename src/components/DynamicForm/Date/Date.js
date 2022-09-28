import React, { useState } from 'react';
import { Tween } from 'react-gsap';
import Calendar, { getEndOfYear } from 'react-calendar';
import { useContext } from 'react';
import './Date.css';
import { TranslateContext } from '../../../context/Translate/TranslateContext';
import { classFunction, dateToDispFormatCustom } from '../../../utils/Function';
const maxDate = new Date();

const Dates = ({ handleChange, data, index, formFields, typeLog }) => {
    const { language } = useContext(TranslateContext);
    // check whether to show previous dates or not based on the pastdate value
    const prevDate = typeLog?.chat?.data?.fields?.find(field => field.pastdate === false) ? false : true;
    // console.log('prev state', prevDate);
    const [showDatePicker, setShowDatePicker] = useState(false);
    const [date, setDate] = useState(false);

    /**
     * Shows and hide calender on click
     */
    const toggleCalender = (value = '', event = '', calOpen = false) => {
        if (calOpen) {
            handleDate(value);
        }
        setShowDatePicker(!showDatePicker);
    };

    const handleDate = date => {
        setDate(date);

        // handleChange('2022-02-14T20:00:00.000Z', data?.name, data?.id, data?.type);
        // Uncomment once taha makes the change in the backend and remove the above method
        handleChange(dateToDispFormatCustom(date), data?.name, data?.id, data?.type);
    };

    const arabic = language === 'ar' ? true : false;

    const dateMax = new Date().getFullYear();

    return (
        <Tween from={{ y: '20px', opacity: 0 }} key={index}>
            <div className={classFunction('date-container', arabic, 'right-align')}>
                <div
                    className={classFunction('input-section date-placeholder', arabic, 'right-align')}
                    onClick={toggleCalender}
                >
                    <input
                        type="text"
                        autoComplete="off"
                        name={data?.name}
                        // value={'2022-02-14T20:00:00.000Z'}
                        value={date ? new Date(date).toLocaleDateString('en-GB') : formFields[data?.name]}
                        placeholder={data?.placeholder}
                        maxLength="16"
                        required={data?.required}
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

                <div className={`input-section`} style={showDatePicker ? { display: 'block' } : { display: 'none' }}>
                    {prevDate ? (
                        <Calendar
                            calendarType={'Arabic'}
                            minDate={new Date(1950, 1, 1)}
                            maxDate={new Date()}
                            onChange={(value, event) => toggleCalender(value, event, true)}
                            value={date}
                        />
                    ) : (
                        <Calendar
                            calendarType={'Arabic'}
                            minDate={new Date()}
                            onChange={(value, event) => toggleCalender(value, event, true)}
                            value={date}
                        />
                    )}
                </div>
            </div>
        </Tween>
    );
};
export default Dates;
