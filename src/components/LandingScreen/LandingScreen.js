import React, { useContext, useState } from 'react';
import { Tween } from 'react-gsap';
import { getRequiredLazySlides } from 'react-slick/lib/utils/innerSliderUtils';
import { TranslateContext } from '../../context/Translate/TranslateContext';
import { Environment } from '../../env';
import headerImage from '../../public/images/Rectangle 163.png';
import Feedback from '../Feedback/Feedback';
import ServiceRatingOverlay from '../ServiceOverlay/ServiceRatingOverlay';
import Slider from '../Slider/Slider';
import TextBox from '../TextBox/TextBox';

const LandingScreen = ({ sendingPayLoad }) => {
    const { switchLanguage } = useContext(TranslateContext);
    return (
        <div
            className="landing-screen-container"
        // style={{ backgroundImage: `url(videos/Splash-2_no-loop.gif)` }}
        >
            <div className="top-section">
                <div className="slider">
                    <Slider />
                </div>
            </div>
            <div className="bottom-section">
                <Tween from={{ y: '30px', opacity: 0, delay: 2, duration: 0.5 }}>
                    <div className="selectLanguage">
                        <p>Can you please select your prefered language?</p>
                    </div>
                </Tween>

                <Tween from={{ y: '50px', opacity: 0, delay: 2, duration: 1.5 }}>
                    <div className="languageButtons">
                        <button
                            className="english-btn"
                            onClick={() => {
                                switchLanguage('en');
                                sendingPayLoad(Environment.startBotEng);
                            }}
                        >
                            Let’s Talk
                        </button>

                        <button
                            className="arabic-btn"
                            onClick={() => {
                                switchLanguage('ar');
                                sendingPayLoad(Environment.startBotAr);
                            }}
                        >
                            لنتحدث
                        </button>
                    </div>
                </Tween>
            </div>
        </div>
    );
};
export default LandingScreen;
