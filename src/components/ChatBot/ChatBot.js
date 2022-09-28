import React, { useState, useEffect } from 'react';
// Library
import { Tween } from 'react-gsap';
import Avatar from '../../public/images/avatar@2x.png';

// Components
import LandingScreen from '../LandingScreen';
import ChatScreen from '../ChatScreen';
import ToggleButton from '../ToggleButton/ToggleButton';

export default () => {
    const [landingScreen, setLandingScreen] = useState(true);
    const [showScreen, setShowScreen] = useState(false);
    const [showPayLoad, setshowPayLoad] = useState(false);
    const [payLoad, setpayLoad] = useState('');
    const [showCloseIcon, setshowCloseIcon] = useState(false);
    const [newMenu, setnewMenu] = useState(false);

    /**
     * Displaying Either Landing Screen or ChatScreen
     *
     * Depending on the Click of the button
     *
     */
    const showLandingScreen = bool => {
        setLandingScreen(bool);
    };

    /**
     * Shows and Hides ChatBot on Click of the button Bottom Menu Button
     *
     * Toggles ChatBot
     * Shows Landing Screen
     * Toggles ChatIcon by Setting by setting the NewMainMenu with Bool Value
     *
     * @param {bool}
     *
     */
    const toggleShowScreen = bool => {
        window.parent.postMessage({ value: bool, view: `${bool ? 'big' : 'small'}` }, '*');
        setShowScreen(bool);
        setshowCloseIcon(bool);
        setnewMenu(bool);
        setLandingScreen(true);
    };

    /**
     * Ending the Chat Session and going back to the LandScreen
     *
     * Showing Landing Screen
     * Showing ChatBot
     *
     */
    const endChatSession = () => {
        setLandingScreen(true);
        setShowScreen(true);
        setshowPayLoad(false);
    };

    /**
     * Closing the Chat Bot on End Session from ChatScreen.js
     *
     */
    const closeChatBot = () => {
        setShowScreen(false);
        setshowPayLoad(false);
        setnewMenu(false);
        setshowCloseIcon(false);
    };

    /**
     * Sending Payload Dynamically Depending on the Click of the 4 boxed on the LandingScreen
     *
     * Hiding Landing Screen
     *
     * @param payload
     */

    const sendingPayLoad = payload => {
        setpayLoad(payload);
        setshowPayLoad(true);
        showLandingScreen(false);
    };

    const newMainMenu = bool => {
        setnewMenu(bool);
    };

    /**
     * This shows either the Landing Screen or the Chat Screen depending on the bool value
     *
     * default : {true}
     */
    const toggleScreens = () => {
        if (landingScreen)
            return <LandingScreen showLandingScreen={showLandingScreen} sendingPayLoad={sendingPayLoad} />;
        else
            return (
                <ChatScreen
                    endChatSession={endChatSession}
                    closeChatBot={closeChatBot}
                    payLoad={payLoad}
                    showPayLoad={showPayLoad}
                />
            );
    };

    return (
        <div
            className="chatbot-container"
        // style={{
        //     backgroundImage: 'url(images/Background@2x.png)',
        //     backgroundSize: 'cover',
        //     backgroundPosition: 'center',
        // }}
        >
            {showScreen && (
                <Tween from={{ y: window.innerWidth > 375 ? '50px' : '0' }}>
                    <div className="screen-holder">
                        <div id="minimise" onClick={() => toggleShowScreen(false)}>
                            {/* <img src={require('../../public/images/close.svg')} alt="" /> */}
                            <div className="closeChat">
                                <img src={require('../../public/images/chevronDown.svg')} alt="" />
                            </div>
                            <img className="topAvatar" src={Avatar} alt="" />
                        </div>
                        {toggleScreens()}
                    </div>
                </Tween>
            )}
            {!showScreen && (
                <ToggleButton
                    toggleShowScreen={toggleShowScreen}
                    showCloseIcon={showCloseIcon}
                    newMainMenu={newMainMenu}
                    newMenu={newMenu}
                    sendingPayLoad={sendingPayLoad}
                />
            )}
        </div>
    );
};
