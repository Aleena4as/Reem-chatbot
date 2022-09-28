import React from 'react';
import { useContext } from 'react';
import { Tween } from 'react-gsap';
import { TranslateContext } from '../../context/Translate/TranslateContext';
import Button from '../Button/Button';

const MainMenu = props => {
    const { language, translatedLanguage, switchLanguage } = useContext(TranslateContext);

    // const liveAgent = () => {
    //     props.sendQuickMessage('/live_agent', '');
    //     props.mainMenu();
    // };

    const changeLanguage = () => {
        switchLanguage(language === 'en' ? 'ar' : 'en');
        const currentLanguage = language === 'en' ? 'ar' : 'en';
        const title = language === 'en' ? 'Arabic' : 'English';
        props.sendQuickMessage(`/language_selection{"language": "${currentLanguage}","avatar_name":"Layla"}`, title);
    };

    return (
        <div className="mainmenu-container">
            <Tween from={{ x: '-50px', opacity: 0, delay: 3 }}>
                <div className="btn-1">
                    <Button className="circle-btn" onClick={props.resetChatSession}>
                        <img src="svgIcons/restart.svg" alt="" /> 
                        <span>&nbsp;&nbsp;{translatedLanguage.restart}</span>
                    </Button>

                    {/* <div className="tooltip">{translatedLanguage.restart}</div> */}
                </div>
            </Tween>
            <Tween from={{ y: '8px', opacity: 0, delay: 2 }}>
                <div className="btn-2">
                    <Button className="circle-btn" onClick={props.resetMainMenu}>
                        <img src="svgIcons/main-menu.svg" alt="" />
                        <span>&nbsp;&nbsp;{translatedLanguage.main_menu}</span>
                    </Button>
                    {/* <div className="tooltip">{translatedLanguage.main_menu}</div> */}
                </div>
            </Tween>
            <Tween from={{ x: '50px', opacity: 0, delay: 3 }}>
                <div className="btn-3">
                    <Button className="circle-btn" onClick={changeLanguage}>
                        {language === 'en' ? <img src="svgIcons/arabic.svg" alt="" /> : 'EN'}
                    </Button>
                    {/* <div className="tooltip">{translatedLanguage.arabic}</div> */}
                </div>
            </Tween>
        </div>
    );
};
export default React.memo(MainMenu);
