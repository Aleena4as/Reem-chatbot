import React, { useEffect } from 'react';
import { useContext } from 'react';
import { TranslateContext } from '../../../context/Translate/TranslateContext';
import Button from '../../Button/Button';

const Submit = ({ sendQuickMessage, buttonDisabled, index, label, isFormSubmitted }) => {
    const { language } = useContext(TranslateContext);

    return (
        <div className="submit" key={index}>
            <Button
                className={`customs-button ${buttonDisabled || isFormSubmitted ? 'disabled-button' : ''}`}
                onClick={sendQuickMessage}
                disabled={buttonDisabled}
            >
                {label}
            </Button>
        </div>
    );
};

export default React.memo(Submit);
