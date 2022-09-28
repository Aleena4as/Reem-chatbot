import React, { useState, Fragment, useContext } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Tween } from 'react-gsap';
import { TranslateContext } from '../../context/Translate/TranslateContext';
import { classFunction } from '../../utils/Function';

/**
 * Carousel For Direction
 *
 */

export default props => {
    const { language, translatedLanguage } = useContext(TranslateContext);
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

        event.preventDefault(); // stops weird link dragging effect
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

    const settings = {
        dots: true,
        arrows: false,
        infinite: false,
        speed: 300,
        edgeFriction: 0,
        slidesToShow: 1.8,
        variableWidth: true,
        slidesToScroll: 1,
        draggable: true,
        swipeToSlide: true,
        touchMove: true,
    };

    const carouselType = props.type === 'service_type_carousel' ? true : false;
    const carouselHeight =
        props.type === 'service_location_carousel' && props.chat?.data[0]?.buttons.length > 1
            ? 'two-button-height'
            : '';

    const arabic = language === 'ar' ? true : false;
    return (
        <Tween from={{ x: '30px', opacity: 0, delay: 0.5 }}>
            <div className="cardCarousel-container">
                {/* <Slider ref={c => (slider = c)} edgeFriction={0} {...settings}> */}
                {props.chat?.data?.map((data, index) => (
                    <div
                        className={`figure ${carouselHeight} ${carouselType ? '' : 'book-figure'} ${isDisabled && data.label !== activeLink ? 'disabled-button' : ''
                            } ${activeLink === data.label ? 'selected-button' : ''}`}
                        key={index}
                        onMouseDown={handleOnMouseDown}
                    >
                        <img className="containerImg" src={data.image} alt="" />
                        <section className={classFunction('details', arabic, 'right-align')}>
                            {carouselType ? (
                                <Fragment>
                                    <h1>{data.label}</h1>
                                    {data?.description?.map((desc, index) => (
                                        <Fragment key={index}>
                                            <h2>{desc.title}</h2>
                                            <p>{desc.caption}</p>
                                        </Fragment>
                                    ))}
                                </Fragment>
                            ) : (
                                <Fragment>
                                    <h2 className={classFunction('book-h-title', arabic, 'right-align')}>
                                        {data.label}
                                    </h2>
                                    <p className="book-p-tag">
                                        {translatedLanguage.Speciality}
                                        <br /> <span className="subText">{data.speciality}</span>
                                    </p>
                                    <p className="book-p-tag">
                                        {translatedLanguage.Designation}
                                        <br />
                                        <span className="subText">{data.designation} </span>
                                    </p>
                                </Fragment>
                            )}

                            {data.buttons.map((btn, index) => (
                                <Fragment >
                                    {btn.payload.includes('http') ? (
                                        <button onClick={() => window.open(btn.payload)} className="mainButton" key={index}>
                                            {' '}
                                            {btn.title}
                                        </button>
                                    ) : (
                                        <button
                                            onClick={event => handleOnClick(event, btn.payload, btn.title)}
                                            className="subButton" key={index}
                                        >
                                            {btn.title}
                                        </button>
                                    )}
                                </Fragment>
                            ))}
                        </section>
                    </div>
                ))}
                {/* </Slider> */}
            </div>
        </Tween>
    );
};
