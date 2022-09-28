import React, { useContext } from 'react';
import { Tween } from 'react-gsap';
import { classFunction, decodeString, textToLink } from '../../../utils/Function';
import get from 'lodash.get';
import { TranslateContext } from '../../../context/Translate/TranslateContext';

const BotReply = ({ chat }) => {
    const { language } = useContext(TranslateContext);

    const arabic = language === 'ar' ? true : false;
    return (
        <div id="bot-reply-container" className="bot-reply-container">
            <Tween from={{ x: '-50px', opacity: 0 }}>
                {chat.text && chat.text !== '' && chat.text !== null ? (
                    <div
                        className={classFunction('bot-reply', arabic, 'right-align')}
                        dangerouslySetInnerHTML={{
                            __html: textToLink(decodeString(get(chat, 'text', ''))),
                        }}
                    ></div>
                ) : null}
            </Tween>
        </div>
    );
};
export default BotReply;
