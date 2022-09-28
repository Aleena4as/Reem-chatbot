import React, { useContext, useState } from 'react';
import { Tween } from 'react-gsap';
import { TranslateContext } from '../../../context/Translate/TranslateContext';
import { buttonMoveAnimation, floor } from '../../../utils/Function';
import BotReply from '../../ChatScreen/BotReply/BotReply';
// import { TimelineMax, CSSPlugin } from "gsap";
export default props => {
    const { language } = useContext(TranslateContext);
    const [activeLink, setactiveLink] = useState(null);
    const [isDisabled, setisDisabled] = useState(false);

    const sendButton = (payload, title, index, link) => event => {
        if (link) {
            window.open(link); // open the link of direction in new tab if there is a link
        }
        props.sendQuickMessage(payload, title);
        setactiveLink(index);
        setisDisabled(true);
        if (title === 'Continue') {
            console.log('Redirect');
            window.open(`${props.link}`, '_blank');
        }

        // buttonMoveAnimation(event);
    };

    return (
        <div className="quick-buttons-container">
            <Tween from={{ y: '20px', duration: 0.5 }}>
                <BotReply chat={props.chat} />

                <div className="button-dimensions">
                    {props.chat.quick_replies.map((data, index) => {
                        if (data.type === 'download') {
                            return (
                                <button
                                    className={`quick-reply-btn ${language === 'ar' ? 'align-right' : ''} ${
                                        isDisabled && index !== activeLink ? 'disabled-button' : ''
                                    } ${index === activeLink ? 'activeLink' : ''} `}
                                    key={index}
                                >
                                    <a
                                        href={data.url}
                                        target="_blank"
                                        onClick={sendButton(data.payload, data.title, index)}
                                    >
                                        {data.title}
                                    </a>
                                </button>
                            );
                        }
                        return (
                            <button
                                className={`quick-reply-btn ${language === 'ar' ? 'align-right' : ''} ${
                                    isDisabled && index !== activeLink ? 'disabled-button' : ''
                                } ${index === activeLink ? 'activeLink' : ''} `}
                                key={index}
                                onClick={
                                    data.payload.includes('/language')
                                        ? props.restartBotOnTimeOut
                                        : sendButton(data.payload, data.title, index, data.link)
                                }
                                disabled={isDisabled}
                            >
                                {data.title}
                            </button>
                        );
                    })}
                </div>
            </Tween>
        </div>
    );
};
