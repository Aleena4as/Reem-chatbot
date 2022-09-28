import React from 'react';
import { Tween } from 'react-gsap';
import BotReply from '../../ChatScreen/BotReply/BotReply';

export default props => (
    <div className="quick-buttons-container">
        <Tween from={{ x: '-50px', opacity: 0 }}>
            <BotReply chat={props.name} />

            {props.chat.buttons.map((data, index) => (
                <button
                    className="quick-reply-btn"
                    key={index}
                    onClick={() => props.sendQuickMessage(data.payload, data.title)}
                >
                    {data.title}
                </button>
            ))}
        </Tween>
    </div>
);
