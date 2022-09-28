import React, { useContext } from 'react';
import { TranslateContext } from '../../context/Translate/TranslateContext';
import { LiveAgentContext } from '../../context/LiveAgent/LiveAgentContext';
const Header = ({ closeAgentLive }) => {
    const { language, translatedLanguage, switchLanguage } = useContext(TranslateContext);
    const { liveAgent, liveAgentStatus, switchLiveAgentStatus } = useContext(LiveAgentContext);

    return (
        <div className="header-section">
            <p className="avatarName">{translatedLanguage.avatar_name}</p>
            <div
                className="leaveAgentButton"
                onClick={() => {
                    switchLiveAgentStatus(false);
                    closeAgentLive();
                }}
            >
                <img
                    src={liveAgent ? require('../../public/images/leaveAgentIcon.svg') : ''}
                    alt=""
                />
                <p>{liveAgent ? translatedLanguage.Leave_Agent : ''}</p>
            </div>
        </div>
    );
};

export default Header;
