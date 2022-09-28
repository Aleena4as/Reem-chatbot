import React, { useState, useRef } from 'react';
import { useContext } from 'react';
import { Tween } from 'react-gsap';
import { TranslateContext } from '../../context/Translate/TranslateContext';
import { LiveAgentContext } from '../../context/LiveAgent/LiveAgentContext';

import useOutsideClick from '../useOutsideClick/useOutsideClick';

const TextBox = props => {
    // click outside of div to close menu options begins
    const menuRef = useRef();
    const outsideClick = useOutsideClick(menuRef);
    // click outside of div to close menu options ends

    const [showSendButton, setShowSendButton] = useState(false);
    const [showHBMenu, setshowHBMenu] = useState(false);
    const { language, translatedLanguage, switchLanguage } = useContext(TranslateContext);
    const { liveAgent, liveAgentStatus, switchLiveAgentStatus } = useContext(LiveAgentContext);
    /**
     * Checking if there is data in input
     *
     * Only Shows the Send button if there is data in the input
     *
     */
    const handlePress = () => {
        if (props.input.length >= 1) {
            setShowSendButton(true);
        } else {
            setShowSendButton(false);
        }
    };
    const changeLanguage = () => {
        switchLanguage(language === 'en' ? 'ar' : 'en');
        const currentLanguage = language === 'en' ? 'ar' : 'en';
        const title = language === 'en' ? 'Arabic' : 'English';
        props.sendQuickMessage(`/language_selection{"language": "${currentLanguage}","avatar_name":"Layla"}`, title);
    };

    return (
        <Tween from={{ y: '100px', opacity: 0, delay: 1 }}>
            <div className="textbox-container">
                <div className="flex">
                    <input
                        type="text"
                        value={props.input}
                        onKeyUp={handlePress}
                        className={language === 'ar' ? 'right-align' : ''}
                        autoComplete="off"
                        name="input"
                        placeholder={translatedLanguage.inputPlaceholder}
                        onKeyPress={event => props.sendMessageOnEnter(event)}
                        onChange={event => props.handleChange(event, 'input')}
                        disabled={props.input_disable === 'false' ? false : true}
                    />
                    <div className="button-container">
                        {showSendButton && (
                            <Tween from={{ x: '20px', opacity: 0 }}>
                                <button className="send-btn" onClick={props.sendMessage}>
                                    <img src={require('../../public/images/send.svg')} alt="" />
                                </button>
                            </Tween>
                        )}
                    </div>

                    {showHBMenu && !outsideClick ? (
                        <div className="hamburger-menu" onClick={() => setshowHBMenu(false)} ref={menuRef}>
                            <img src={require('../../public/images/menuClose.svg')} alt="" />
                        </div>
                    ) : (
                        <div className="hamburger-menu" onClick={() => setshowHBMenu(true)} ref={menuRef}>
                            <img src={require('../../public/images/hamburgerMenu.svg')} alt="" />
                        </div>
                    )}
                </div>
                <div>
                    {!outsideClick ? (
                        <>
                            {showHBMenu && (
                                <Tween from={{ y: '50px', opacity: 0, delay: 0.2 }}>
                                    <div
                                        className="hamburger-menu-opened"
                                        onClick={() => setshowHBMenu(false)}
                                        ref={menuRef}
                                    >
                                        <div
                                            className={language === 'en' ? 'menuOptions' : 'menuOptions flexRowReverse'}
                                            onClick={changeLanguage}
                                        >
                                            <img
                                                src={language === 'en' ? require('../../public/images/menuOptions/changeLanguage.svg')
                                                    : require('../../public/images/menuOptions/English-icon.svg')}
                                                alt=""
                                            />
                                            <p>{translatedLanguage.change_language}</p>
                                        </div>
                                        <div
                                            className={language === 'en' ? 'menuOptions' : 'menuOptions flexRowReverse'}
                                            onClick={props.resetChatSession}
                                        >
                                            <img src={require('../../public/images/menuOptions/restart.svg')} alt="" />
                                            <p>{translatedLanguage.restart_bot}</p>
                                        </div>
                                        <div
                                            className={language === 'en' ? 'menuOptions' : 'menuOptions flexRowReverse'}
                                            onClick={() => {
                                                props.openAgentLive();
                                                switchLiveAgentStatus(true);
                                            }}
                                        >
                                            <img
                                                src={require('../../public/images/menuOptions/liveAgent.svg')}
                                                alt=""
                                            />
                                            <p>{translatedLanguage.live_agent}</p>
                                        </div>
                                        <div
                                            className={language === 'en' ? 'menuOptions' : 'menuOptions flexRowReverse'}
                                            onClick={props.resetMainMenu}
                                        >
                                            <img src={require('../../public/images/menuOptions/mainMenu.svg')} alt="" />
                                            <p>{translatedLanguage.main_menu}</p>
                                        </div>
                                    </div>
                                </Tween>
                            )}
                        </>
                    ) : null}
                </div>
            </div>
        </Tween>
    );
};
export default TextBox;
