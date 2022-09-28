import React, { useContext } from 'react';
import Carousel from '../Carousel';
import AsNavFor from '../TabCarousel/AsNavFor';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import get from 'lodash.get';
import { Tween } from 'react-gsap';
import { gsap } from 'gsap';
import { TranslateContext } from '../../context/Translate/TranslateContext';
import { classFunction } from '../../utils/Function';

const ModalPopup = ({ chat: { info, type }, sendQuickMessage, keys }) => {
    const { language } = useContext(TranslateContext);
    const closePopup = () => {
        let newD = document.querySelector(`.modal-popup-container[data-id='${keys}']`);
        let animation = gsap.timeline();
        animation.to(newD, { duration: 1, y: '900px', opacity: 0 }, 0.3);
        setTimeout(() => {
            newD.remove();
        }, 1300);
    };

    const settings = {
        dots: true,
        arrows: false,
        infinite: false,
        speed: 300,
        edgeFriction: 0,
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true,
        draggable: true,
        swipeToSlide: true,
        touchMove: true,
    };
    const settingSync = {
        dots: true,
        arrows: false,
        infinite: false,
        speed: 300,
        edgeFriction: 0,
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: false,
        draggable: true,
        swipeToSlide: true,
        touchMove: true,
    };

    const arabic = language === 'ar' ? true : false;
    return (
        <Tween from={{ y: '700px' }}>
            <div className="modal-popup-container" data-id={`${keys}`}>
                <section className="carousel-section">
                    <img
                        src="svgIcons/group-4937.png"
                        onClick={() => {
                            closePopup();
                            sendQuickMessage(get(info, 'back_button', ''), '');
                        }}
                        className="close"
                        alt=""
                    />
                    <Slider {...settings}>
                        {info?.images.map((data, key) => (
                            <div className="figure" key={key}>
                                {/* <img className="image" src="images/Rectangle@2x.png" alt="" /> */}
                                <img className="image" src={data.url} alt="" />
                            </div>
                        ))}
                    </Slider>
                </section>

                <section className={classFunction('modal-description', arabic, 'right-align')}>
                    <div className="title">{get(info, 'label', 'Lexus')}</div>
                    <div className="price price-lexus">{get(info, 'price', 'Lexus')}</div>
                    <div className="description" dir="auto">
                        {get(info, 'description', 'Car Details')}
                    </div>
                </section>

                <section>
                    <AsNavFor info={info} />
                </section>

                <section className={classFunction('carousel-section-slider', arabic, 'right-align')}>
                    <div className="title">{arabic ? 'الموديلات الأخرى' : 'Other Models'}</div>
                    <Carousel
                        chat={{ data: get(info, 'other_models', '') }}
                        sendQuickMessage={sendQuickMessage}
                        closePopup={closePopup}
                        type={type}
                    />
                </section>

                <section className="button-section">
                    {info?.replies.map((data, key) => (
                        <button
                            key={key}
                            onClick={() => {
                                closePopup();
                                sendQuickMessage(data?.payload, '');
                            }}
                        >
                            {data.title}
                        </button>
                    ))}
                </section>
            </div>
        </Tween>
    );
};

export default ModalPopup;
