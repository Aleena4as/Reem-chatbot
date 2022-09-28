import React, { useEffect } from 'react';
import { Tween } from 'react-gsap';
import Avatar from '../../public/images/avatar@2x.png';
import collapseNext from '../../public/images/chevronNext.svg';
import collapseDown from '../../public/images/chevronDown.svg';
import collapseLeft from '../../public/images/chevronLeft.svg';
import { Environment } from '../../env';
import { useState } from 'react';

const animationGsap = { y: '100', opacity: 0, delay: 0.5 };
// const animationGsap2 = { x: '-400', opacity: 1, delay: 0.5 };

export default ({ toggleShowScreen, showCloseIcon, sendingPayLoad, botData }) => {
    const [siteLanguage, setSiteLAnguage] = useState('');
    const getSiteLocale = () => {
        if (window.location.pathname.indexOf("/ar/") > -1) {
            setSiteLAnguage('ar');
        }
        else if (window.location.pathname.indexOf("/ar") > -1) {
            setSiteLAnguage('ar');
        }
        else {
            setSiteLAnguage('en');
        }
    }

    useEffect(() => {
        getSiteLocale();
    }, []);

    /**
     * Triggering function in ChatBot.js to Show / Hide the chatScreen
     *
     * @param toggleBool
     * @param botBool
     */
    const toggleBot = bool => {
        toggleShowScreen(bool);
    };
    const [showText, setshowText] = useState(true);
    const [showBot, setshowBot] = useState(false);
    const [botText, setbotText] = useState(false);

    const showLandingScreen = () => {
        setshowBot(!showBot);

        // setshowText(!showText);
        toggleShowScreen(!showBot);
    };
    // if(botData.type === "message"){
    //     setbotText(true);
    // }else{
    //     setbotText(false);
    // }

    const postBotView = (bool) => {
        window.parent.postMessage({ value: bool, view: bool, size: `${!bool ? "min" : "max"}` }, '*');

    }
    return (
        <Tween from={animationGsap}>
            <div className="toggle-button-container">
                <div className="showPanel flex">
                    <button className={`open-btn ${showText ? "active" : ""}`}>
                        <div className="expand-btn" onClick={() => { setshowText(!showText); postBotView(!showText) }}>
                            <img src={`${showText ? collapseNext : collapseLeft}`} alt="" />
                        </div>
                        <img className="avatarBottom" src={Avatar} alt="" onClick={() => showLandingScreen()} />
                    </button>
                    {showText && (
                        <div className="profile-welcome-text">
                            {/* { botData} */}
                            {siteLanguage === 'en' ? "Hi there! I'm Myriam, your virtual assistant. Click here to chat with me!" : "أهلا! أنا ميريام، مساعدتك الافتراضية. انقر هنا للمساعدة!"}
                        </div>
                    )}
                </div>
            </div>
        </Tween>
    );
};
