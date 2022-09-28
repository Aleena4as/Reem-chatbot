import React, { useState } from 'react';
import { Tween } from 'react-gsap';
import { buttonMoveAnimation } from '../../../utils/Function';
import get from 'lodash.get';
import Icons from './Svg/Icons';

const List = props => {
    const [isDisabled, setIsDisabled] = useState(false);
    const [activeLink, setActiveLink] = useState(null);

    /**
     * Selecting the Categories
     *
     */
    const selectCategories = (event, payload, label) => {
        const disabled = true;
        setIsDisabled(disabled);
        setActiveLink(label);

        if (disabled) {
            props.sendQuickMessage(payload, label);
            // buttonMoveAnimation(event);
        } else {
            event.stopPropagation();
        }
    };

    return (
        <Tween from={{ scale: 0.8, opacity: 0 }}>
            <div className="button-icon-container">
                <div className="items-section">
                    {props.items.data.map((data, index) => (
                        <button
                            className={`items ${isDisabled && data.label !== activeLink ? 'disabled-button' : ''} ${
                                data.label === activeLink ? 'activeLink' : ''
                            }`}
                            key={index}
                            onClick={event => selectCategories(event, data.buttons[0].payload, data.label)}
                            disabled={isDisabled}
                        >
                            {/* <img src="svgIcons/Book-test_drive.svg" /> */}

                            <Icons
                                image={get(data, 'image', 'icon-experience-lexus')}
                                className={data.label === activeLink ? 'svgPath' : 'noSvg'}
                            />
                            <div className="names">
                                <h2>{data.label}</h2>
                            </div>
                        </button>
                    ))}
                </div>
            </div>
        </Tween>
    );
};

export default List;
