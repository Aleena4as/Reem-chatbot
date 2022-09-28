import React, { Fragment, useEffect, useState, useContext } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Tween } from 'react-gsap';
import { sameHeightDiv, classFunction } from '../../utils/Function';
import { TranslateContext } from '../../context/Translate/TranslateContext';
import collapseLeft from '../../public/images/mainMenuIcons/main_icon1.svg';
import { Environment } from '../../env';

/**
 * Carousel For Direction
 *
 */

export default props => {
    const { language } = useContext(TranslateContext);
    const [clientXonMouseDown, setclientXonMouseDown] = useState(null);
    const [clientYonMouseDown, setclientYonMouseDown] = useState(null);
    const [isDisabled, setisDisabled] = useState(false);
    const [activeLink, setactiveLink] = useState(null);
    let slider;

    /**
     * Storing the Mouse Position on MousePress
     *
     * @param {*} event
     */
    const handleOnMouseDown = event => {
        setclientXonMouseDown(event.clientX);
        setclientYonMouseDown(event.clientY);
        console.log('mouse down');
        event.preventDefault();
    };

    /**
     * Checking if the Mouse is Dragged or Clicked
     *
     * If Dragged then the click event will not be triggered
     *
     * @param {*} event
     * @param {*} payload
     * @param {*} title
     *
     */
    const handleOnClick = (event, payload, title) => {
        event.stopPropagation();
        if (clientXonMouseDown !== Math.floor(event.clientX) || clientYonMouseDown !== Math.floor(event.clientY)) {
            event.preventDefault();
        } else {
            if (isDisabled) {
                event.stopPropagation();
            } else {
                props.sendQuickMessage(payload, title);
                props.closePopup && props.closePopup();
                setisDisabled(true);
                setactiveLink(title);
            }
        }
    };

    // const SlickNextClick = () => {
    //     slider.slickNext();
    // };

    // const SlickPrevClick = () => {
    //     slider.slickPrev();
    // };

    const settings = {
        // dots: true,
        // arrows: false,
        // infinite: false,
        // speed: 300,
        // edgeFriction: 0,
        // slidesToShow: 2.5,
        // slidesToScroll: 1,
        // variableWidth: true,
        // draggable: true,
        // swipeToSlide: true,
        // touchMove: true,
    };

    const type = props.type === 'used_cars_offers' ? true : false;

    // useEffect(() => {
    //     sameHeightDiv('.figure');
    // }, []);

    const arabic = language === 'ar' ? true : false;
    const dynamicRender = (data, index) => {
        if (props.type === 'main_options') {
            return (
                <div
                    className={`figure ${isDisabled && data.label !== activeLink ? 'disabled-button' : ''} ${
                        activeLink === data.label ? 'selected-button' : ''
                    }`}
                    key={index}
                    onMouseDown={handleOnMouseDown}
                    onClick={event => handleOnClick(event, data.buttons[0].payload, data.label)}
                >
                    {type && <div className="bg-overlay"></div>}

                    {/* <img className={`image ${type ? 'full-image' : ''}`} src="images/Rectangle@2x.png" alt="" /> */}

                    <section className={language === 'en' ? 'detailsBox ' : 'detailsBox flexRowReverse'}>
                        <img
                            className={`image ${type ? 'full-image' : ''}`}
                            src={data.image ? `${Environment.assetUrl}/resources/` + data.image : collapseLeft}
                            alt=""
                        />
                        <h1>{data.label}</h1>
                        {type && <p>{data.description}</p>}
                        {type &&
                            data.buttons.map(btn => (
                                <button
                                    className="used-cars-class"
                                    onClick={event => handleOnClick(event, btn.payload, data.label)}
                                >
                                    {btn.title}
                                </button>
                            ))}
                    </section>
                </div>
            );
        } else if (props.type === 'new_cars_offers') {
            return (
                <div
                    className={`figure new_cars_offers ${
                        isDisabled && data.label !== activeLink ? 'disabled-button' : ''
                    } ${activeLink === data.label ? 'selected-button' : ''}`}
                    key={index}
                    onMouseDown={handleOnMouseDown}
                    onClick={event => handleOnClick(event, data.buttons[0].payload, data.label)}
                >
                    {/* <img className={`image ${type ? 'full-image' : ''}`} src="images/Rectangle@2x.png" alt="" /> */}
                    <img className={`image`} src={data.image} alt="" />
                    <section className="details">
                        <div className={classFunction('column', arabic, 'right-align')}>
                            <h1>{data.label}</h1>
                            <p>{data.description}</p>
                        </div>
                        {data.buttons.map(btn => (
                            <button
                                className="testbot"
                                onClick={event => handleOnClick(event, btn.payload, data.label)}
                            >
                                {btn.title}
                            </button>
                        ))}
                    </section>
                </div>
            );
        }
    };

    return (
        <Tween from={{ x: '30px', opacity: 0, delay: 0.5 }}>
            <div className="carousel-container">
                <div>{props.chat?.data?.map((data, index) => dynamicRender(data, index))}</div>
            </div>
        </Tween>
    );
};
