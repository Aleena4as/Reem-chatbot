import React, { useContext, useState } from 'react';
import { Tween } from 'react-gsap';
import { TranslateContext } from '../../../context/Translate/TranslateContext';
import { buttonMoveAnimation, floor } from '../../../utils/Function';
import BotReply from '../../ChatScreen/BotReply/BotReply';
export default props => {
    const { language, translatedLanguage } = useContext(TranslateContext);
    const [activeLink, setactiveLink] = useState(null);
    const [isDisabled, setisDisabled] = useState(false);

    const sendButton = (payload, title, index) => event => {
        props.sendQuickMessage(payload, title);
        setactiveLink(index);
        setisDisabled(true);
    };

    return (
        <div className="quick-buttons-container">
            <Tween from={{ y: '20px', duration: 0.5 }}>
                <BotReply chat={props.chat} />

                <div className="timeSlot-container">
                    <p className="slotTitle">{translatedLanguage.available_time_slot}</p>
                    <div className="slotsButton">
                        {props.chat.quick_replies.map((data, index) => {
                            return (
                                <button
                                    className={`quick-reply-btn ${language === 'ar' ? 'align-right' : ''} ${isDisabled && index !== activeLink ? 'disabled-button' : ''
                                        } ${index === activeLink ? 'linkActive' : ''} `}
                                    key={index}
                                    onClick={
                                        data.payload.includes('/language')
                                            ? props.restartBotOnTimeOut
                                            : sendButton(data.payload, data.title, index)
                                    }
                                    disabled={isDisabled}
                                >
                                    {data.title?.slice(0, -2)}
                                </button>
                            );
                        })}
                    </div>
                </div>
            </Tween>
        </div>
    );
};
